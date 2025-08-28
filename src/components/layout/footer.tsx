import { Instagram, Linkedin, Dribbble } from 'lucide-react';
import { Logo } from '@/components/logo';

const socialLinks = [
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Dribbble', href: '#', icon: Dribbble },
];

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Logo />
          <div className="mt-8 flex justify-center space-x-6 sm:mt-0">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-300 hover:text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 transition-colors hover:text-accent" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Harbol Audiovisual. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
