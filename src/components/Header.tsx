
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export const Header = ({ isAuthenticated, onSignOut }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800 bg-[#1A1A2E]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                VideoBard
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white"
                  onClick={onSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <a href="#features" className="text-gray-300 hover:text-white">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-300 hover:text-white">
                  How it Works
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white">
                  Pricing
                </a>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
