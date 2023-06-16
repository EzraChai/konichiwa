"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed inset-0 h-1 bg-white "
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ScrollProgress />
      <section className="flex flex-col justify-center min-h-screen p-24 md:p-0 bg-[#667985]">
        <motion.div
          style={{
            x: "-900px",
          }}
          whileInView={{
            transitionDuration: "1s",
            x: "0px",
          }}
          transition={{ type: "tween", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-9xl font-black md:p-24 text-center md:text-left text-[#ced9bf]"
        >
          こんにちは
          <p className="pl-4 mt-4 text-base font-normal tracking-wide text-neutral-200">
            {"Disclaimer: Only "}
            <Link
              rel="noopener norel"
              href={"https://en.wikipedia.org/wiki/Girl"}
              className="text-pink-200 transition-colors hover:text-pink-300"
            >
              girls
            </Link>
            {" are allowed to access this website."}
          </p>
        </motion.div>
      </section>
      <section className="flex flex-col justify-center min-h-screen bg-[#c09576]">
        <motion.div
          style={{
            x: "-900px",
          }}
          whileInView={{
            transitionDuration: "1s",
            x: "0px",
          }}
          transition={{ type: "tween", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-black md:p-24 text-[#43424b] text-center md:text-left text-8xl"
        >
          私は <br className="md:hidden" /> Ezra
          <br className="md:hidden" /> です
          <span className="text-red-500">.</span>
        </motion.div>
      </section>
      <section className="flex flex-col justify-center min-h-screen bg-[#b94429]">
        <motion.div
          style={{
            x: "-900px",
          }}
          whileInView={{
            transitionDuration: "1s",
            x: "0px",
          }}
          transition={{ type: "tween", ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-black md:p-24 text-center md:text-left text-[#fdda7d] text-8xl"
        >
          あなた
          <br className="md:hidden" />の
          <br className="md:hidden" />
          彼氏
          <br className="md:hidden" />
          <span className="">🥰</span>
        </motion.div>
      </section>
    </main>
  );
}
