import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { id: 1, social: <FaFacebook size={26} /> },
    { id: 2, social: <FaInstagram size={26} /> },
    { id: 3, social: <FaTwitter size={26} /> },
    { id: 4, social: <FaLinkedin size={26} /> },
  ];

  return (
    <footer className="max-w-[1100px] mx-auto flex justify-around items-center min-h-[60px] py-6 mt-10 border-t-2 border-[var(--primary)]">
      <p className="text-[18px] font-semibold">
        All Right Reserverd By <span className="primary">Ecommerce-web</span>
      </p>
      <div className="social-icons">
        <ul className="flex items-center gap-4">
          {socialIcons.map((social) => (
            <li
              className="cursor-pointer text-[var(--text)] hover:text-[var(--buttons)] transition-all duration-300"
              key={social.id}
            >
              {social.social}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
