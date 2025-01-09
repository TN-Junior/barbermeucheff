{/*

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

  const { email } = req.body;

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) throw error;

    return res.status(200).json({ message: "E-mail para redefinição de senha enviado!" });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
}
*/}