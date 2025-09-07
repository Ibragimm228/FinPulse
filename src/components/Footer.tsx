import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-[#0A66C2]" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-[#333]" },
    { icon: Mail, label: "Email", href: "#", color: "hover:text-primary" }
  ];
  
  const essentialLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Analytics", href: "#analytics" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden border-t border-border/30">
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none"></div>
      <div aria-hidden="true" className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div aria-hidden="true" className="absolute top-0 left-1/4 -translate-x-1/2 w-60 h-60 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
      <div aria-hidden="true" className="absolute top-0 right-1/4 translate-x-1/2 w-40 h-40 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>

      <div className="container relative">
        <div className="relative px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    FinPulse
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground max-w-xs">
                  Advanced financial analytics with visualization of expenses and personalized 
                  tips for budget optimization to transform your financial future.
                </p>
                
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`text-muted-foreground transition-colors duration-300 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8 lg:col-span-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <h2 className="text-sm font-semibold tracking-wide uppercase">
                    Quick Links
                  </h2>
                  <ul className="space-y-3">
                    {essentialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-1.5 group"
                        >
                          {link.name}
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 md:col-span-3"
              >
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  Subscribe to our Newsletter
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <input
                      placeholder="Your email"
                      required
                      type="text"
                      className="w-full h-10 px-4 border-border/60 focus:border-primary rounded-md bg-background focus:ring-primary focus:ring-opacity-20 focus:outline-none focus:ring-2 transition-all"
                    />
                  </div>
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex-shrink-0"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground/60">
                  Get the latest updates on product features and financial tips.
                  <br />
                  We'll never share your email and you can unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between pt-5 pb-5 border-t border-border/40 sm:flex-row"
          >
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} FinPulse. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a 
                href="#" 
                className="text-xs text-muted-foreground/70 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-xs text-muted-foreground/70 hover:text-primary transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;