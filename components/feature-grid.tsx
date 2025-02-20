"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Gift, Zap, Globe, SmartphoneIcon, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function FeatureGrid() {
  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-10">Experience the Future of Shagun</h2>
        <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#E6C200] flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#E6C200] flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  }
  const arr = new Array(5).fill(0)
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  )
}

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background: "linear-gradient(-45deg, #ff8a00, #e53e3e, #dd6b20, #f97316)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  )
}

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      animate="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <SmartphoneIcon className="h-10 w-10 text-[#FFD700]" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Mobile App</p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <SmartphoneIcon className="h-10 w-10 text-[#FFD700]" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Responsive Design</p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <SmartphoneIcon className="h-10 w-10 text-[#FFD700]" />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">Cross-Platform</p>
      </motion.div>
    </motion.div>
  )
}

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Shield className="h-10 w-10 text-[#FFD700]" />
        <p className="text-xs text-neutral-500">
          Bank-grade encryption and security measures to protect your data and transactions.
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Secure Payments</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#E6C200] flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}

const items = [
  {
    title: "AI-Powered Collection Creation",
    description: (
      <span className="text-sm text-muted-foreground">
        Create beautiful digital shagun collections instantly with our AI-powered system.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-2 bg-card border border-border hover:border-primary/20 transition-colors",
    icon: <Gift className="h-4 w-4 text-primary" />,
  },
  {
    title: "Instant Processing",
    description: (
      <span className="text-sm text-muted-foreground">
        Process shagun transfers instantly with our advanced payment system.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 bg-card border border-border hover:border-primary/20 transition-colors",
    icon: <Zap className="h-4 w-4 text-primary" />,
  },
  {
    title: "Multi-Language Support",
    description: (
      <span className="text-sm text-muted-foreground">
        Use ShagunPe in multiple Indian languages for wider accessibility.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 bg-card border border-border hover:border-primary/20 transition-colors",
    icon: <Globe className="h-4 w-4 text-primary" />,
  },
  {
    title: "Mobile-First Design",
    description: (
      <span className="text-sm text-muted-foreground">
        Perfectly optimized for all mobile devices and screen sizes.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-1 bg-card border border-border hover:border-primary/20 transition-colors",
    icon: <SmartphoneIcon className="h-4 w-4 text-primary" />,
  },
  {
    title: "Bank-Grade Security",
    description: (
      <span className="text-sm text-muted-foreground">
        Enterprise-level security for all your transactions and data.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1 bg-card border border-border hover:border-primary/20 transition-colors",
    icon: <Shield className="h-4 w-4 text-primary" />,
  },
]

