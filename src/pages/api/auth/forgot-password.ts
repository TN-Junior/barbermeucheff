import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "E-mail é obrigatório." });
  }

  try {
    // Simular envio de código (ou integrar com Supabase)
    console.log("E-mail recebido:", email);
    return res.status(200).json({ message: "Código enviado para o e-mail!" });
  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ message: "Erro no servidor." });
  }
}
