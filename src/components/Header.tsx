
import { Home, User, FileText, Settings, Video, BarChart, Calendar, Share2 } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export const Header = ({ isAuthenticated, onSignOut }: HeaderProps) => {
  const authenticatedNavItems = [
    { name: 'Dashboard', url: '/dashboard', icon: Home },
    { name: 'Scripts', url: '/scripts', icon: FileText },
    { name: 'Videos', url: '/videos', icon: Video },
    { name: 'Analytics', url: '/analytics', icon: BarChart },
    { name: 'Schedule', url: '/schedule', icon: Calendar },
    { name: 'Share', url: '/share', icon: Share2 },
    { name: 'Settings', url: '/settings', icon: Settings }
  ];

  const publicNavItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Features', url: '#features', icon: FileText },
    { name: 'Pricing', url: '#pricing', icon: BarChart }
  ];

  return (
    <header className="relative w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gradient">
              VideoBard
            </span>
          </a>
        </div>
        
        <NavBar 
          items={isAuthenticated ? authenticatedNavItems : publicNavItems} 
          className="!fixed !top-4"
        />

        {isAuthenticated && (
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white"
            onClick={onSignOut}
          >
            Sign Out
          </Button>
        )}
      </div>
    </header>
  );
};
