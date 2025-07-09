import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "5511910623871"; // Número de telefone
  const message = "Olá! Gostaria de saber mais sobre os serviços da Los Coders.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-50
        p-4
        bg-green-500
        text-white
        rounded-full
        shadow-lg
        hover:bg-green-600
        transition-all
        duration-300
        flex items-center justify-center
      "
      aria-label="Conversar no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;