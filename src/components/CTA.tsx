import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const CTA = () => {
  const [hovered, setHovered] = useState(false);
  
  const benefits = [
    {
      title: "Smart financial insights",
      description: "Discover hidden patterns in your spending habits"
    },
    {
      title: "Personalized budget tips",
      description: "Get AI-powered recommendations tailored to your lifestyle"
    },
    {
      title: "Free data migration",
      description: "Easily import your financial data from other services"
    },
    {
      title: "Bank-level security",
      description: "Your data is protected with enterprise-grade encryption"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_40%,hsl(260_85%_40%/0.3),transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,hsl(270_85%_40%/0.3),transparent_40%)]"></div>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10">
          <div className="absolute inset-0 backdrop-blur-[1px] [background:repeating-linear-gradient(to_right,#8b5cf6_0px,#8b5cf6_1px,transparent_1px,transparent_40px)] [background-size:40px_100%]"></div>
          <div className="absolute inset-0 [background:repeating-linear-gradient(to_bottom,#8b5cf6_0px,#8b5cf6_1px,transparent_1px,transparent_40px)] [background-size:100%_40px]"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <div 
            className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="text-sm font-medium text-primary">Financial Freedom</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Ready to transform your <br className="hidden lg:block" /> 
                  <span className="bg-gradient-primary bg-clip-text text-transparent">financial future?</span>
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Join thousands of users who trust FinPulse to visualize their expenses 
                  and optimize their budget. Get started today and take control of your finances.
                </p>

                <div className="flex flex-wrap gap-x-8 gap-y-6 pt-4">
                  {benefits.map((benefit, i) => (
                    <motion.div 
                      key={i}
                      className="flex items-start gap-2 max-w-[260px]"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                    asChild
                  >
                    <a href="/auth">
                      <span className="relative z-10 flex items-center gap-2">
                        Start Free Analysis
                        <ArrowRight 
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/30 to-primary/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></span>
                    </a>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/5 text-foreground"
                  >
                    Schedule Demo
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  No credit card required • Free basic plan • Start analyzing in minutes
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:h-[540px] relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-full rounded-[1.5rem] border-[0.75px] p-2 lg:p-3">
                <GlowingEffect 
                  spread={40} 
                  glow={hovered} 
                  disabled={false} 
                  proximity={100} 
                  borderWidth={3}
                  blur={0.5}
                />
                <div className="relative flex h-full overflow-hidden rounded-[1.25rem] shadow-xl dark:shadow-primary/5 border-[0.75px] border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 backdrop-blur-sm"></div>
                  <div className="relative z-10 flex flex-col w-full h-full p-4 lg:p-8">
                    <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Sparkles className="h-10 w-10 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold">Interactive Dashboard</h3>
                      <p className="text-muted-foreground max-w-sm">
                        Visualize your spending patterns, track your savings goals, and identify opportunities to optimize your budget.
                      </p>
                      
                      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-b from-primary/5 to-transparent rounded-xl border border-primary/10">
                        <div className="w-full h-full p-4 relative">
                          <div className="absolute top-4 left-4 w-full h-8 flex items-center gap-3">
                            <div className="h-4 w-4 rounded-full bg-primary/40"></div>
                            <div className="h-4 w-16 rounded bg-primary/20"></div>
                          </div>
                          
                          <div className="absolute top-16 left-4 right-4 h-32">
                            <div className="h-full w-full flex items-end justify-around gap-2">
                              {[40, 65, 35, 80, 55, 70, 45, 90, 60, 30, 50, 75].map((height, i) => (
                                <motion.div 
                                  key={i}
                                  className="w-full h-full bg-primary/10 rounded-t-sm relative"
                                  initial={{ height: "0%" }}
                                  animate={{ height: `${height}%` }}
                                  transition={{ duration: 0.6, delay: 0.3 + i * 0.05, type: "spring", bounce: 0.3 }}
                                >
                                  <div className="absolute bottom-0 left-0 right-0 w-full bg-primary/30 rounded-t-sm" style={{ height: `${height}%` }}></div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-4 left-4 right-4 h-20 rounded-lg bg-primary/5 border border-primary/10 p-3">
                            <div className="flex justify-between items-center mb-2">
                              <div className="h-3 w-20 bg-primary/20 rounded"></div>
                              <div className="h-3 w-12 bg-primary/30 rounded"></div>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                              <div className="h-3 w-32 bg-primary/10 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;