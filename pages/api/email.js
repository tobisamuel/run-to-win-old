const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: '"Run2Win Fitness" <run2winfitness@gmail.com>',
    to: req.body,
    subject: "Hello!",
    html: `<p>We are thrilled to have you in the Run2Win 4-week starter program - Building habits for sustainable fitness and wellness.</p> 
    
    <p>It promises to be an exciting and life-changing experience. Investing in your fitness and wellness is one of the most important decisions you could ever make. To quote Sean Patrick Flanery <i>"Do something today that your future self will thank you for"<i/></p>
    
    <p>You will be added to the Run2Win Fitness and Wellness WhatsApp Group for guidelines and updates. Stay tuned as we embark on a journey to becoming the best version of ourselves!</p>
    
    <p>Best Regards,</p>
    <p>Robo Joan</p>
    `,
  };

  try {
    let mail = await transporter.sendMail(mailOptions);
    // console.log("Message sent: %s", mail.messageId);
    res.status(200).json("Email Successfully sent!");
  } catch (error) {
    console.log(error);
  }
}
