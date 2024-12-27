import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  try {
    // Configuração do transporte do Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Servidor SMTP
      port: 587, // Porta SMTP
      secure: false, // Use true para SSL (port 465)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      
    });

    // Configuração do email
    await transporter.sendMail({
      from: `"Contato do Site" <seuemail@gmail.com>`, // Substitua pelo seu email
      to: "destinatario@gmail.com", // Email de destino
      subject: `Novo contato de ${name}`,
      html: `
        <h3>Nova mensagem do site:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao enviar email" });
  }
}
