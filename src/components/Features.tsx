import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Code, Globe, BarChart3, Headphones } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Bank-level encryption and security protocols to protect your sensitive financial information and personal data."
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Get real-time analysis of your spending patterns and financial health with our powerful processing engine."
    },
    {
      icon: BarChart3,
      title: "Expense Visualization",
      description: "Interactive charts and graphs that make understanding your finances intuitive and actionable."
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Track and analyze spending across different currencies with automatic conversion and exchange rate tracking."
    },
    {
      icon: Code,
      title: "Smart Algorithms",
      description: "AI-powered analysis identifies saving opportunities and provides personalized recommendations for budget optimization."
    },
    {
      icon: Headphones,
      title: "Financial Guidance",
      description: "Receive tailored tips and strategies to improve your financial habits based on your unique spending patterns."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take control of your
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              financial future
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful analytics tools designed for everyone, from personal budgeting 
            to small business finance management.
          </p>
        </div>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon className="h-4 w-4" />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <li className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2.5}
          blur={0.5}
          movementDuration={1.5}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-primary/10 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Features;