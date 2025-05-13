'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
  className?: string;
}

export default function Navigation({ links, className = '' }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex space-x-6 ${className}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium transition-colors ${
              isActive 
                ? 'text-klare-k' 
                : 'text-klare-text hover:text-klare-k'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}