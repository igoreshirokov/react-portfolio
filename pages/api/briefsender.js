import * as posts from "../../data/posts.json";
import nodemailer from "nodemailer";

// Функция отправки email
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  let text = "";
  for (let key in body) {
    text += key + ": " + body[key] + "\n";
  }
  const transporter = nodemailer.createTransport({
    sendmail: true,
    host: "localhost",
    port: 25,
    secure: false,
    auth: false,
  });

  var message = {
    from: "qusty@yandex.ru",
    to: "qusty@yandex.ru",
    subject: "Заявка",
    text: text,
    html: "<p>Please confirm your email</p>",
  };

  transporter.sendMail({
    from: "qusty@yandex.ru",
    to: "qusty@yandex.ru",
    subject: "Заявка",
    text: "text",
    html: "<p>Please confirm your email</p>",
  }, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log(info);
  });

  // console.log(body);
  // console.log(text);
  // res.status(200).json();
}
