import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";


const Banner2 = () => {
  return(
    <section className="">
      <div
      className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24" 
      >
        {/* Brand Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true}} 
            className="text-3xl lg:text-6xl font-bold uppercase">Online Fruit Store</motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true}}
            >
            Ad eu magna officia voluptate elit. Nulla commodo enim pariatur ad adipisicing nostrud id dolor nulla aliquip labore 
            Consectetur nulla proident dolor sint proident veniam ullamco incididunt ut excepteur non consectetur exercitation es
            Voluptate culpa nulla aute ex voluptate mollit. Do eu nisi exercitation incididunt duis commodo culpa tempor aliquip.
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            animate="visible"
            viewport={{ once: true}}
            >
              Ad eu magna officia voluptate elit. Nulla commodo enim pariatur ad adipisicing nostrud id dolor nulla aliquip labore excepteur qui eiusmod. 
              Consectetur nulla proident dolor sint proident veniam ullamco incididunt ut excepteur non consectetur exercitation esse. Anim incididunt ex ad fugiat. 
              Voluptate culpa nulla aute ex voluptate mollit. Do eu nisi exercitation incididunt duis commodo culpa tempor aliquip.
            </motion.p>
            {/* button section */}
            <motion.div
            variants={FadeUp(1.1)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">  
                  Download the App 
              </button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
          initial={{ opacity: 0, x:200, rotate: 75 }} 
          whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
          transition={{ duration:2, delay: 0.2 }} 
          viewport={{ once: true }} 
          src={BannerPng} 
          alt="" 
          className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
