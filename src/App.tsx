import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BarChart3, 
  MessageSquare, 
  Monitor, 
  Zap, 
  Shield, 
  TrendingUp,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
  Activity,
  Cpu,
  Database,
  UserPlus,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Terminal
} from 'lucide-react';

// Auth Component
const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      return;
    }
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 w-full max-w-md overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-[#00d4aa] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: `0 0 10px 2px #00d4aa`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <Terminal className="w-6 h-6" />
        </button>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00d4aa] to-[#00a8ff] rounded-2xl flex items-center justify-center mx-auto mb-4 transform rotate-6">
              <Terminal className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-400">
              {isLogin ? 'Sign in to access your dashboard' : 'Start your journey with us'}
            </p>
          </div>

          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Success!</h3>
              <p className="text-gray-400">
                {isLogin ? 'Redirecting...' : 'Account created successfully!'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-800 rounded-lg p-0.5">
                  <div className="flex items-center px-4 py-3 bg-gray-900 rounded-lg">
                    <Mail className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-0 focus:ring-0 text-white placeholder-gray-500"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-800 rounded-lg p-0.5">
                  <div className="flex items-center px-4 py-3 bg-gray-900 rounded-lg">
                    <Lock className="h-5 w-5 text-gray-500 mr-3" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-0 focus:ring-0 text-white placeholder-gray-500"
                      placeholder="Password"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-white ml-2"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {!isLogin && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-gray-800 rounded-lg p-0.5">
                    <div className="flex items-center px-4 py-3 bg-gray-900 rounded-lg">
                      <Lock className="h-5 w-5 text-gray-500 mr-3" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full bg-transparent border-0 focus:ring-0 text-white placeholder-gray-500"
                        placeholder="Confirm Password"
                        required
                        minLength={8}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                {isLogin && (
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#00d4aa] focus:ring-[#00d4aa] border-gray-700 rounded bg-gray-800"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                      Remember me
                    </label>
                  </div>
                )}
                {isLogin && (
                  <a href="#" className="text-sm text-[#00d4aa] hover:underline">
                    Forgot password?
                  </a>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] text-black font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {isLogin ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  <>
                    {isLogin ? (
                      <>
                        <Terminal className="w-4 h-4" />
                        Sign In
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        Create Account
                      </>
                    )}
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#00d4aa] hover:underline font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeMonitors, setActiveMonitors] = useState(0);
  const [alertsSent, setAlertsSent] = useState(0);
  const [connectedServers, setConnectedServers] = useState(0);
  const [showAuth, setShowAuth] = useState(false);
  
  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Show/hide auth modal
  const openAuth = () => {
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };

  // Animated counters
  useEffect(() => {
    const animateCounter = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(setActiveMonitors, 247, 2000);
      animateCounter(setAlertsSent, 1847, 2500);
      animateCounter(setConnectedServers, 5, 1500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Seamless Discord Integration",
      description: "Connect your Discord server and receive instant notifications when price changes occur."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "User Friendly Interface",
      description: "Navigate through our intuitive dashboard designed for both beginners and professionals."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Customizable Alerts",
      description: "Set up personalized notifications based on your specific monitoring needs."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Real-Time Monitoring",
      description: "Track price changes across multiple platforms with millisecond precision."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dedicated 24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support team."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Performance",
      description: "Experience ultra-fast monitoring and alerts with our high-performance infrastructure."
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Solver has completely transformed my reselling business. The real-time alerts helped me secure deals I would have missed otherwise."
    },
    {
      name: "Sarah Chen",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "The Discord integration is seamless and the interface is incredibly user-friendly. Best investment I've made for my business."
    },
    {
      name: "Mike Rodriguez",
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Professional monitoring tools that actually work. The customizable alerts save me hours of manual checking every day."
    }
  ];

  const faqs = [
    {
      question: "How does the monitoring system work?",
      answer: "Our advanced monitoring system continuously tracks prices across multiple platforms in real-time, alerting you instantly when changes occur."
    },
    {
      question: "Can I integrate with multiple Discord servers?",
      answer: "Yes, you can connect multiple Discord servers and customize notification settings for each one independently."
    },
    {
      question: "Is there a free trial available?",
      answer: "We offer a 7-day free trial for new users to experience all our premium features before committing to a plan."
    },
    {
      question: "What platforms do you monitor?",
      answer: "We monitor major e-commerce platforms including Amazon, eBay, Walmart, Target, and many more, with new platforms added regularly."
    }
  ];

  // Particle component
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4aa] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes glow {
            0%, 100% { text-shadow: 0 0 5px #00d4aa, 0 0 10px #00d4aa; }
            50% { text-shadow: 0 0 20px #00d4aa, 0 0 30px #00d4aa; }
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 170, 0.5); }
            50% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.8); }
          }
          @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(50px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes matrix {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100vh); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-glow { animation: glow 2s ease-in-out infinite; }
          .animate-pulse-glow { animation: pulse-glow 1.5s ease-in-out infinite; }
          .animate-slide-up { animation: slideInUp 0.8s ease-out forwards; }
          .animate-slide-left { animation: slideInLeft 0.8s ease-out forwards; }
          .animate-slide-right { animation: slideInRight 0.8s ease-out forwards; }
          .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
          .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
          .matrix-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 170, 0.03), transparent);
            animation: matrix 20s linear infinite;
          }
          .tech-grid {
            background-image: 
              linear-gradient(rgba(0, 212, 170, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 170, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
          .hologram {
            background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 170, 0.1) 50%, transparent 70%);
            background-size: 20px 20px;
            animation: matrix 3s linear infinite;
          }
        `
      }} />

      {/* Animated Background */}
      <div className="fixed inset-0 tech-grid opacity-20"></div>
      <Particles />

      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-800 relative z-10 backdrop-blur-sm bg-[#0a0a0a]/80">
        <nav className="max-w-7xl mx-auto flex items-center justify-between animate-slide-up">
          <div className="text-2xl font-bold text-[#00d4aa] animate-glow">
            <Cpu className="w-8 h-8 inline-block mr-2" />
            SolverSuite
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Features</a>
            <a href="#pricing" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Pricing</a>
            <a href="#features" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">About</a>
            <a href="#contact" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Contact</a>
          </div>
          <button 
            onClick={openAuth}
            className="relative overflow-hidden group bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] text-black px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00d4aa]/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Get Started
            </span>
            <span className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-all duration-300"></span>
          </button>
        </nav>
      </header>

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={closeAuth} />}

      {/* Hero Section */}
      <section className="px-6 py-20 text-center relative">
        <div className="matrix-bg absolute inset-0"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Revolutionize your<br />
            <span className="text-white relative">
              reselling
              <div className="absolute inset-0 hologram opacity-30"></div>
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
            Get instant alerts for sneaker drops, price changes and restocks with 
            our leading monitoring system. Never miss an opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <button 
              onClick={openAuth}
              className="border border-[#00d4aa] text-[#00d4aa] px-8 py-3 rounded-lg font-semibold hover:bg-[#00d4aa] hover:text-black transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              Start Free Trial
            </button>
            <a 
              href="#pricing"
              className="bg-[#00d4aa] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00b894] transition-all duration-300 transform hover:scale-105 animate-pulse-glow text-center"
            >
              View Pricing
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 animate-fade-in" style={{animationDelay: '0.9s'}}>
            Trusted by <span className="text-[#00d4aa] font-bold animate-pulse">10,000+</span> resellers worldwide
          </p>
        </div>
      </section>

      {/* Powerful Features */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 animate-slide-up">
            <span className="relative">
              POWERFUL FEATURES
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Customizable Monitoring */}
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-slide-left group">
              <div className="w-16 h-16 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                <BarChart3 className="w-8 h-8 text-[#00d4aa] group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customizable Monitoring</h3>
              <p className="text-gray-400 mb-6">
                Monitor any product with advanced filtering options and custom 
                triggers tailored to your specific needs.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4aa]/10 to-transparent animate-pulse"></div>
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className="text-sm text-gray-400">Active Monitors</span>
                  <span className="text-[#00d4aa] font-bold text-lg">{activeMonitors}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 relative overflow-hidden">
                  <div className="bg-[#00d4aa] h-2 rounded-full transition-all duration-2000 ease-out animate-pulse-glow" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            {/* Real-Time Alerts */}
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-slide-up group" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center mb-6 relative group-hover:animate-pulse-glow">
                <Bell className="w-8 h-8 text-[#00d4aa] group-hover:animate-pulse" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00d4aa] rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#00d4aa] rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold mb-4">Real-Time Alerts</h3>
              <p className="text-gray-400 mb-6">
                Receive instant notifications via Discord, email, or webhook 
                the moment price changes are detected.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent animate-pulse"></div>
                <div className="flex items-center space-x-3 mb-3 relative z-10">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Alert sent 2 seconds ago</span>
                </div>
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-3 h-3 bg-[#00d4aa] rounded-full animate-ping"></div>
                  <span className="text-sm">Nike Air Jordan 1 - Price drop detected</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Total alerts sent: <span className="text-[#00d4aa] font-bold">{alertsSent}</span>
                </div>
              </div>
            </div>

            {/* Seamless Discord Integration */}
            <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-slide-right group" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <MessageSquare className="w-8 h-8 text-[#00d4aa] group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-4">Seamless Discord Integration</h3>
              <p className="text-gray-400 mb-6">
                Connect directly with Discord servers for instant team 
                notifications and community sharing.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
                <div className="flex items-center justify-between mb-2 relative z-10">
                  <span className="text-sm text-gray-400">Connected Servers</span>
                  <span className="text-[#00d4aa] font-bold text-lg">{connectedServers}</span>
                </div>
                <div className="flex -space-x-2 relative z-10">
                  <div className="w-8 h-8 bg-[#00d4aa] rounded-full border-2 border-gray-800 animate-pulse"></div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-800 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-800 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy to Use Dashboard */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-4xl font-bold mb-6">
                EASY TO USE<br />
                <span className="text-[#00d4aa] animate-glow">DASHBOARD</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Our intuitive dashboard puts all your monitoring tools in one place. 
                Track performance, manage alerts, and analyze trends with our 
                user-friendly interface designed for maximum efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Real-time monitoring dashboard</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Advanced analytics and reporting</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Customizable notification settings</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl animate-slide-right relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent animate-pulse"></div>
              <div className="bg-gray-800 p-4 rounded-lg mb-4 relative z-10 hover:bg-gray-700 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center">
                    <Activity className="w-4 h-4 mr-2 text-[#00d4aa] animate-pulse" />
                    Active Monitors
                  </h3>
                  <span className="text-[#00d4aa] animate-pulse font-bold">{activeMonitors} Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 transform hover:scale-102">
                    <span className="text-sm">Nike Air Jordan 1 Retro</span>
                    <span className="text-green-400 text-sm animate-pulse">In Stock</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 transform hover:scale-102">
                    <span className="text-sm">Adidas Yeezy 350 V2</span>
                    <span className="text-red-400 text-sm animate-pulse">Out of Stock</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded hover:bg-gray-600 transition-all duration-300 transform hover:scale-102">
                    <span className="text-sm">PlayStation 5 Console</span>
                    <span className="text-[#00d4aa] text-sm bg-[#00d4aa]/10 px-2 py-1 rounded animate-pulse">Price Drop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Solver */}
      <section id="features" className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
            <span className="relative">
              WHY CHOOSE SOLVERSUITE?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-scale-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-12 h-12 bg-[#00d4aa]/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <div className="text-[#00d4aa] group-hover:animate-pulse">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
            <span className="relative">
              Choose Your Plan
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Pro */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-[#00d4aa]/50 transition-all duration-500 transform hover:scale-105 animate-slide-left group">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Starter Pro</h3>
                <div className="text-4xl font-bold text-[#00d4aa] mb-2 group-hover:animate-pulse">35€</div>
                <p className="text-gray-400">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Up to 50 monitors</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Real-time alerts</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Discord integration</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Email notifications</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Standard support</span>
                </li>
              </ul>
              <button className="w-full bg-[#00d4aa] text-black py-3 rounded-lg font-semibold hover:bg-[#00b894] transition-all duration-300 transform hover:scale-105 animate-pulse-glow">
                Get Started
              </button>
            </div>

            {/* Advanced Reseller */}
            <div className="bg-gray-900 p-8 rounded-xl border border-[#00d4aa] relative hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-slide-right group">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00d4aa] text-black px-6 py-1 rounded-full text-sm font-semibold animate-pulse">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Advanced Reseller</h3>
                <div className="text-4xl font-bold text-[#00d4aa] mb-2 group-hover:animate-glow">200€</div>
                <p className="text-gray-400">per month</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.1s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Unlimited monitors</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Priority real-time alerts</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Advanced Discord integration</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Webhook notifications</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Priority 24/7 support</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: '0.8s'}}>
                  <Check className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full bg-[#00d4aa] text-black py-3 rounded-lg font-semibold hover:bg-[#00b894] transition-all duration-300 transform hover:scale-105 animate-glow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
            <span className="relative">
              What Our Customers Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-xl hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-[#00d4aa]/30 group-hover:border-[#00d4aa] transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-slide-up">
            <span className="relative">
              Frequently Asked Questions
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
            </span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800 transition-all duration-300 group"
                >
                  <span className="font-semibold group-hover:text-[#00d4aa] transition-colors duration-300">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00d4aa] animate-pulse" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#00d4aa] group-hover:animate-pulse transition-all duration-300" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-slide-up">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              <span className="relative">
                Contact Us
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#00d4aa] animate-pulse-glow"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions? Our team is here to help. Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00d4aa] to-[#00a8ff]">
                  Send us a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/50 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#00d4aa]/30 rounded-lg pointer-events-none transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/50 focus:border-transparent transition-all duration-300"
                      placeholder="Email Address"
                    />
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#00d4aa]/30 rounded-lg pointer-events-none transition-all duration-500"></div>
                  </div>
                  
                  <div className="relative">
                    <select className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/50 focus:border-transparent transition-all duration-300">
                      <option value="">Select a topic</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#00d4aa]/30 rounded-lg pointer-events-none transition-all duration-500"></div>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/50 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Your Message"
                    ></textarea>
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#00d4aa]/30 rounded-lg pointer-events-none transition-all duration-500"></div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00d4aa] to-[#00a8ff] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 group-hover:animate-pulse-glow"
                  >
                    <span>Send Message</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
              
              {/* Animated background elements */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-[#00d4aa] rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: `0 0 10px 2px #00d4aa`,
                    animation: `pulse ${3 + Math.random() * 4}s infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 text-[#00d4aa]">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-xl flex items-center justify-center text-[#00d4aa] group-hover:bg-[#00d4aa]/20 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Email Us</h4>
                      <a href="mailto:support@solversuite.com" className="text-gray-400 hover:text-[#00d4aa] transition-colors duration-300">support@solversuite.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-xl flex items-center justify-center text-[#00d4aa] group-hover:bg-[#00d4aa]/20 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Discord</h4>
                      <a href="https://discord.gg/solversuite" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00d4aa] transition-colors duration-300">Join our Discord</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-xl flex items-center justify-center text-[#00d4aa] group-hover:bg-[#00d4aa]/20 transition-colors duration-300">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Follow Us</h4>
                      <div className="flex space-x-4 mt-1">
                        {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                          <a 
                            key={social}
                            href="#" 
                            className="text-gray-400 hover:text-[#00d4aa] transition-colors duration-300"
                            aria-label={social}
                          >
                            {social}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-[#00d4aa]">Join Our Newsletter</h3>
                  <p className="text-gray-400 mb-4">Stay updated with our latest features and updates.</p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="flex-1 bg-gray-800/50 border border-gray-700 rounded-l-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00d4aa]/50 focus:border-transparent"
                    />
                    <button className="bg-[#00d4aa] text-gray-900 font-medium px-4 rounded-r-lg hover:bg-[#00c29a] transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute -right-1/4 -bottom-1/4 w-full h-full bg-gradient-to-br from-[#00d4aa]/5 to-transparent rounded-full filter blur-3xl opacity-30"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#00d4aa]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-fade-in">
              <div className="text-2xl font-bold text-[#00d4aa] mb-4 flex items-center animate-glow">
                <Database className="w-6 h-6 mr-2" />
                SolverSuite
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing reselling with advanced monitoring and alert systems.
              </p>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Pricing</a></li>
                <li><a href="#faq" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">FAQ</a></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">About</a></li>
                <li><a href="#contact" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Contact</a></li>
                <li><a href="#contact" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Support</a></li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#00d4aa] transition-all duration-300 hover:glow">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 animate-fade-in space-y-2" style={{animationDelay: '0.4s'}}>
            <p>&copy; 2024 Solver. All rights reserved.</p>
            <p className="text-sm">
              Made by{' '}
              <a 
                href="https://mycode.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00d4aa] hover:underline transition-colors duration-300"
              >
                MyCode
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;