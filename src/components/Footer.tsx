import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  // Função para rolagem suave
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { name: 'Sobre', id: 'about' },
    { name: 'Serviços', id: 'services' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Contato', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/seu-usuario' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/seu-usuario' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/seu-usuario' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800/50 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">
          
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-4">
              Los <span className="text-[#E95027]">Coders</span>
            </h3>
            <p className="leading-relaxed text-gray-400 text-base font-normal">
              Transformando ideias em soluções digitais com integridade e foco em você.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8">
            {/* Coluna 2: Navegação */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScrollTo(link.id)}
                      className="text-gray-400 hover:text-[#E95027] transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Coluna 3: Siga-nos (TROCADO DE LUGAR) */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Siga-nos</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-gray-400 hover:text-[#E95027] transition-colors">
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna 4: Contato (TROCADO DE LUGAR) */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="https://wa.me/5511910623871" target="_blank" rel="noopener noreferrer" className="hover:text-[#E95027]">
                    (11) 91062-3871
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a href="mailto:contato@loscoders.com.br" className="hover:text-[#E95027]">
                    contato@loscoders.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Los Coders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;