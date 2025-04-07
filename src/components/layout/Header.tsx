
import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between h-16">
      <div className="flex items-center gap-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="md:hidden"
        >
          <Menu size={20} />
        </Button>
        
        <div className="relative hidden md:block w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search"
            placeholder="Search..."
            className="pl-9 w-full"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500 hover:text-gray-700 relative"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
