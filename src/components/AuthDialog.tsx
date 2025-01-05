import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const AuthDialog = ({ isOpen, onClose, onSuccess }: AuthDialogProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add Supabase authentication later
    toast({
      title: isLogin ? "Login Successful" : "Sign up Successful",
      description: "Welcome to our platform!",
    });
    onSuccess();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-8 glass-card">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-1">
            {isLogin ? "Sign in to Platform" : "Create your account"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium block">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              {isLogin && (
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                  onClick={() => {
                    toast({
                      title: "Reset password",
                      description: "Password reset functionality coming soon!",
                    });
                  }}
                >
                  Forgot password?
                </button>
              )}
            </div>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-background/50"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {isLogin ? "Sign in" : "Sign up"}
          </Button>
          <div className="pt-4 text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1A1A2E] text-gray-400">
                  {isLogin ? "New to platform?" : "Already have an account?"}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:text-primary/90 text-sm"
            >
              {isLogin ? "Create an account" : "Sign in"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};