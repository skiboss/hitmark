"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Target, Handshake, Zap, BarChart3 } from "lucide-react";

export default function OurValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      imgSrc: "target",
      title: "Precision over volume",
      description: "We scale what works, not what looks impressive in reports.",
      color: "bg-blue-500",
      borderColor: "border-gray-400",
    },
    {
      icon: Handshake,
      imgSrc: "partnership",
      title: "Ownership over excuses",
      description: "We take accountability. Always.",
      color: "bg-green-500",
      borderColor: "border-gray-400",
    },
    {
      icon: Zap,
      imgSrc: "speed",
      title: "Speed over bureaucracy",
      description: "Fast execution beats perfect strategy delayed.",
      color: "bg-yellow-500",
      borderColor: "border-gray-400",
    },
    {
      icon: BarChart3,
      imgSrc: "data",
      title: "Data-driven decision making",
      description: "Every move is backed by insights, not guesswork.",
      color: "bg-purple-500",
      borderColor: "border-gray-400",
    },
  ];

  return (
    <section ref={ref} className="py-12 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "#7C3BED",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every Service We Offer, Is Tied Directly To Business Outcomes:
            <br />
            <span className="font-semibold">
              Leads, Revenue, And Long-Term Scale.
            </span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                z: 50,
              }}
              className={`bg-gray-100 p-6 lg:p-8 rounded-2xl shadow-lg border ${value.borderColor} text-center relative overflow-hidden group`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                whileHover={{
                  //   rotate: [0, 360],
                  scale: 1.2,
                  // rotateY: 180,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                className={`w-16 h-16 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 relative z-10 drop-shadow-lg`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <img
                    src={`/images/${value.imgSrc}.png`}
                    className="w-20 h-20 object-cover"
                  />
                  {/* <value.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" /> */}
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4"
                whileHover={{
                  scale: 1.05,
                  color: value.color.includes("blue")
                    ? "#3b82f6"
                    : value.color.includes("green")
                      ? "#10b981"
                      : value.color.includes("yellow")
                        ? "#f59e0b"
                        : "#8b5cf6",
                }}
              >
                {value.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-sm lg:text-base leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                {value.description}
              </motion.p>

            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 md:px-12 text-lg rounded-full relative overflow-hidden shadow-xl"
              onClick={() => (window.location.href = "/contact#contact-form")}
            >
              <span className="relative z-10 font-semibold">
                Let's Talk Growth
              </span>

            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
