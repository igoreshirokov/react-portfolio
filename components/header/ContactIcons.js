import { BASE } from "../Constants";


export default function ContactsIcons() {
  return (
    <div className="contact-icons">
      <a href={BASE.TELEGRAM}>
        <img src="/images/icons/telegram.svg" />
      </a>
      <a href={BASE.WHATSAPP}>
        <img src="/images/icons/whatsapp.svg" />
      </a>
      <a href={BASE.GITHUB}>
        <img src="/images/icons/github.svg" />
      </a>
    </div>
  );
}
