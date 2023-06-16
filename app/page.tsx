"use client";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed inset-0 z-10 h-1 bg-white "
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <ScrollProgress />
      <section className=" flex flex-col justify-center min-h-screen p-24 md:p-0 bg-[#667985]">
        <Div className="text-[#ced9bf]">
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
        </Div>
      </section>
      <section className="flex flex-col justify-center min-h-screen bg-[#c09576]">
        <Div className="text-[#43424b]">
          私は <br className="md:hidden" /> Ezra
          <br className="md:hidden" /> です
          <span className="text-red-500">.</span>
        </Div>
      </section>
      <section className="flex flex-col justify-center min-h-screen bg-[#b94429]">
        <Div className="text-[#fdda7d]">
          <div className="">
            あなた
            <br className="md:hidden" />の
            <br className="md:hidden" />
            彼氏
            <br className="md:hidden" />
            <span className="">🥰</span>
          </div>
        </Div>
      </section>
    </main>
  );
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

function Div({ children, className }: Props) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
      className={`font-black md:p-24 text-center md:text-left text-8xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
