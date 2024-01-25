const nodemailer = require("nodemailer");

async function kirimEmail() {
  // Ganti createTestAccount dengan createTransport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maharanisafitri.112@gmail.com",
      pass: "npxh tjdb jjmk qwka",
    },
  });

  // Buat objek konfigurasi email
  const sendMail = await transporter.sendMail({
    from: "maharanisafitri.112@gmail.com",
    to: "maharanisafitri.112@gmail.com",
    subject: "Pesan dari Node.js",
    text: "Halo saya maharani safitri semester 5!",
  });
  console.log("email berhasil dikirim");
}

kirimEmail();
