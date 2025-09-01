import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("block", className)}>
      <Image
        src="/harbol_tipograf_opt.PNG"
        alt="Harbol Audiovisual Logo"
        width={180} // ajusta según el tamaño que necesites
        height={40} // ajusta según proporción real de tu imagen
        priority
      />
    </Link>
  );
}
