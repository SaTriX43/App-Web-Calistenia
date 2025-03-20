import dotenv from "dotenv";
import nodemailer from 'nodemailer'

dotenv.config()

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export async function enviarEmail({ nombre, email, mensaje, asunto, adjuntos }) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user, 
      subject: `Nuevo mensaje ${asunto}`,
      text: `
        Nombre: ${nombre}
        Correo: ${email}
        Mensaje: ${mensaje}
        Asunto: ${asunto}
      `,
      attachments: adjuntos,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error);
    return { success: false, error: error.message };
  }
}
