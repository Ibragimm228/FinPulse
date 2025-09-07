import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const InvestorsSection = () => {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="relative m-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by leading
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              financial institutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our financial analytics platform is the choice of industry leaders
          </p>
        </motion.div>
        
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-3xl grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-14"
        >
          <div className="flex">
            <img
              className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/nvidia.svg"
              alt="Nvidia Logo"
              height="32"
              width="auto"
            />
          </div>

          <div className="flex">
            <img
              className="mx-auto h-7 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/column.svg"
              alt="Column Logo"
              height="28"
              width="auto"
            />
          </div>
          
          <div className="flex">
            <img
              className="mx-auto h-6 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/github.svg"
              alt="GitHub Logo"
              height="24"
              width="auto"
            />
          </div>
          
          <div className="flex">
            <img
              className="mx-auto h-7 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="28"
              width="auto"
            />
          </div>
          
          <div className="flex">
            <img
              className="mx-auto h-7 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
              alt="Lemon Squeezy Logo"
              height="28"
              width="auto"
            />
          </div>
          
          <div className="flex">
            <img
              className="mx-auto h-6 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/laravel.svg"
              alt="Laravel Logo"
              height="24"
              width="auto"
            />
          </div>
          
          <div className="flex">
            <img
              className="mx-auto h-9 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/lilly.svg"
              alt="Lilly Logo"
              height="36"
              width="auto"
            />
          </div>

          <div className="flex">
            <img
              className="mx-auto h-8 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              src="https://html.tailus.io/blocks/customers/openai.svg"
              alt="OpenAI Logo"
              height="32"
              width="auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InvestorsSection
