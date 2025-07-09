
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3333;

// --- CONFIGURAÇÃO DE CORS ATUALIZADA ---
// Lista de domínios que podem aceder à sua API
const allowedOrigins = [
  'http://localhost:8080',    // Para o seu ambiente de desenvolvimento
  'https://loscoders.com.br'  // O seu site em produção na Vercel
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Permite requisições sem 'origin' (como Postman ou apps mobile)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'A política de CORS para este site não permite acesso da origem especificada.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

// Usa as novas opções de CORS
app.use(cors(corsOptions));
// --- FIM DA ATUALIZAÇÃO ---


// Permitir receber JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST /contact
app.post('/contact', async (req, res) => {
  const { nome, sobrenome, telefone, email, mensagem } = req.body;

  console.log('📩 Nova mensagem recebida:', req.body);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('❌ Variáveis de ambiente EMAIL_USER ou EMAIL_PASS não estão definidas.');
    return res.status(500).json({ message: 'Erro de configuração no servidor.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: '📬 Novo formulário recebido pelo site',
      html: `
        <h2>Nova mensagem recebida</h2>
        <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${mensagem}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ E-mail enviado com sucesso!');
    res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar mensagem.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});