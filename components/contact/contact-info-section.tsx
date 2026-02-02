"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@hitmarkdigital.com",
      description: "Send us an email anytime",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (346) 871-0080",
      description: "Mon-Fri from 8am to 5pm",
      color: "bg-green-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      details: "+1 (346) 871-0080",
      description: "24 / 7 (always available)",
      color: "bg-teal-500",
      isCustomIcon: true,
    },
    // {
    //   icon: MapPin,
    //   title: "Visit Us",
    //   details: "New York, NY",
    //   description: "Come say hello at our office",
    //   color: "bg-purple-500",
    // },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Fri: 8am - 5pm",
      description: "Weekend support available",
      color: "bg-orange-500",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to grow your business? We're here to help you every step of
            the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden group"
            >
              <motion.div
                // whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                {info.isCustomIcon ? (
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                ) : (
                  <info.icon className="w-8 h-8 text-gray-900" />
                )}
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.details === "support@hitmarkdigital.com" ? (
                <Link
                  className="text-blue-500 font-semibold mb-1"
                  href="mailto:support@hitmarkdigital.com"
                >
                  {info.details}
                </Link>
              ) : info.title === "WhatsApp Us" ? (
                <Link
                  className="text-blue-500 font-semibold mb-1"
                  href={`https://wa.me/13468710080`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.details}
                </Link>
              ) : info.details === "+1 (346) 871-0080" ? (
                <Link
                  className="text-blue-500 font-semibold mb-1"
                  href={`tel:+1 (346) 871-0080`}
                >
                  {info.details}
                </Link>
              ) : (
                <p className="text-gray-900 font-semibold mb-1">
                  {info.details}
                </p>
              )}
              <p className="text-gray-600 text-sm">{info.description}</p>

              {/* {info.title === "Call Us" && } */}

              {/* Hover glow effect */}
              {/* <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-200"
                style={{
                  background: `radial-gradient(circle at center, ${info.color.replace("bg-", "").replace("-500", "")}, transparent 60%)`,
                }}
              /> */}
            </motion.div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-3xl text-white max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Need Immediate Help?</h3>
            <p className="mb-6 opacity-90">
              Our team is standing by to answer your questions and help you get started.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Live Chat
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
