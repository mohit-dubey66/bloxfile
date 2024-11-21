import { ReactNode } from 'react';
import { Button } from './Button';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  onClick?: () => void;
}

export function Card({ title, description, buttonText, buttonHref, onClick }: CardProps) {
  return (
    <div className="relative group">
      <div className="h-full relative rounded-2xl border-2 border-gray-200 bg-white p-6 flex flex-col justify-between hover:border-gray-300 transition-colors">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-4 text-gray-500">{description}</p>
        </div>
        <Button onClick={onClick} className="mt-8 w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}