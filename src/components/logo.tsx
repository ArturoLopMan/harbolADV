import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-2xl font-bold font-headline", className)}>
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Harbol Audiovisual
      </span>
    </Link>
  );
}
