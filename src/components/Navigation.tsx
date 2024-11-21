import { ChevronDown } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Button } from './ui/Button';

export function Navigation() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <Button variant="secondary">
            Learn Use Cases
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}