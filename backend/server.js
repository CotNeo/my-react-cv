const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const winston = require('winston');
const cors = require('cors');
const app = express();
const http = require('http');
const WebSocket = require('ws');
const net = require('net');

// .env dosyasındaki değişkenleri yükleme
dotenv.config();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket bağlantılarını dinleyin
wss.on('connection', (ws) => {
  console.log('Yeni bir WebSocket bağlantısı kuruldu.');

  ws.on('message', (message) => {
    console.log(`Gelen mesaj: ${message}`);
    ws.send(`Sunucudan gelen yanıt: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket bağlantısı kapandı.');
  });
});

// Winston log ayarları
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Statik dosyaları sunmak
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// E-posta gönderme işlemi için POST route
app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    logger.error('Tüm alanlar doldurulmamış.');
    return res.status(400).json({ success: false, message: 'Tüm alanların doldurulması gerekiyor.' });
  }

  // E-posta gönderme işlemi
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Yeni mesaj - ${email}`,
    text: `E-posta: ${email}\nMesaj: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(`E-posta gönderim hatası: ${error}`);
      return res.status(500).json({ success: false, message: 'E-posta gönderimi başarısız oldu.' });
    } else {
      logger.info(`E-posta başarıyla gönderildi: ${info.response}`);
      return res.json({ success: true, message: 'E-posta başarıyla gönderildi!' });
    }
  });
});

// Portun kullanımda olup olmadığını kontrol et
const PORT = process.env.PORT || 3001;

const portInUse = (port, callback) => {
  const tester = net.createServer()
    .once('error', err => (err.code === 'EADDRINUSE' ? callback(true) : callback(false)))
    .once('listening', () => tester.once('close', () => callback(false)).close())
    .listen(port);
};

// Port kontrolü ve sunucuyu başlatma
portInUse(PORT, inUse => {
  if (inUse) {
    console.log(`Port ${PORT} zaten kullanımda, 3002 portuna geçiliyor...`);
    server.listen(3002, () => {
      console.log('Sunucu 3002 portunda çalışıyor...');
    });
  } else {
    server.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda çalışıyor...`);
    });
  }
});
