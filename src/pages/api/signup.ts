import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { email, password, fullName } = req.body;

  console.log("Dados recebidos no backend:", { email, password, fullName });

  if (!email || !password || !fullName) {
    console.log("Campos faltando no backend.");
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  try {
    const sanitizedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(sanitizedEmail)) {
      return res.status(400).json({ error: "Formato de e-mail inválido." });
    }

    const { data, error } = await supabase.auth.signUp({
      email: sanitizedEmail,
      password,
    });

    if (error) {
      console.error("Erro ao criar usuário no Supabase:", error);
      throw error;
    }

    console.log("Usuário criado no Supabase:", data);

    const { error: profileError } = await supabase
      .from("profiles")
      .insert([{ id: data.user?.id, fullName }]);

    if (profileError) {
      console.error("Erro ao inserir no perfil:", profileError);
      throw profileError;
    }

    console.log("Perfil criado com sucesso.");

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error: any) {
    console.error("Erro no backend:", error.message || error);
    res.status(400).json({ error: error.message || "Erro desconhecido." });
  }
}
