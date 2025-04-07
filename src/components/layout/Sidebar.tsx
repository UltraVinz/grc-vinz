
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Shield, 
  ClipboardList, 
  Settings, 
  Menu,
  X,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Risk Assessment', path: '/risk-assessment', icon: Shield },
    { name: 'Compliance', path: '/compliance', icon: ClipboardList },
    { name: 'Policies', path: '/policies', icon: FileText },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar w-64 shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <h1 className="text-xl font-bold text-white">GRC Platform</h1>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="md:hidden text-white hover:bg-sidebar-accent"
            >
              <X size={20} />
            </Button>
          </div>
          
          <nav className="flex-1 pt-5 pb-4 overflow-y-auto">
            <ul className="space-y-1 px-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "bg-sidebar-primary text-white"
                          : "text-sidebar-foreground hover:bg-sidebar-accent"
                      )
                    }
                    end={item.path === '/'}
                  >
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-full bg-grc-teal flex items-center justify-center text-white font-medium">
                UR
              </div>
              <div>
                <p className="text-sm font-medium text-white">User Name</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
