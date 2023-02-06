import React from "react";
import { motion, Variants } from "framer-motion";
import { BalanceCard, EarningCard } from "../../components/dashboard";
import { StatCard } from "../../components/dashboard/StatCard";

const cardVariants = {
    offscreen: {
      y: 200
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
export const Dashboard = () => {
    return(
        <div>
            <p className="font-bold text-start text-lg mb-10">Good morning</p>
            <div className="flex flex-wrap gap-4 w-[1000px]">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={cardVariants}>
                        <BalanceCard balance={"200.00"}/>
                    </motion.div>                    
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={cardVariants}>
                        <EarningCard />
                    </motion.div>                    
                </motion.div>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.div variants={cardVariants}>
                        <StatCard />
                    </motion.div>                    
                </motion.div>  
            </div>
        </div>
    )
}
