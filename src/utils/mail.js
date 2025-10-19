import Mailgen from "mailgen";
import nodemailer from "nodemailer";
const rgba = (r, g, b, a = 1) => `rgba(${r}, ${g}, ${b}, ${a})`;

const sendEmail = async (options) => {
  const mailgenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagerlink.com",
    },
  });
  const emailTextual = mailgenerator.generatePlaintext(options.mailgenContent);
  const emailHTML = mailgenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "orbitwork.mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTML,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed silently. Make sure you provide correct MAILTRAP credentials in .env file"
    );
    console.error("Error: ", error);
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to OrbitWork! Excited to have you on board.",
      action: {
        instructions:
          "To verify your email, please click on the following button",
        button: {
          color: rgba(9, 217, 106, 1),
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have any questions? Feel free to reply to this mail, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account.",
      action: {
        instructions:
          "To reset your password, please click on the following button",
        button: {
          color: rgba(9, 217, 106, 1),
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have any questions? Feel free to reply to this mail, we'd love to help.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};
