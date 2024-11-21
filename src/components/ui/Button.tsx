import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, href, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full transition-colors";
  const variants = {
    primary: "border-transparent text-white bg-black hover:bg-gray-800",
    secondary: "border-gray-300 text-gray-700 hover:bg-gray-50"
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
}