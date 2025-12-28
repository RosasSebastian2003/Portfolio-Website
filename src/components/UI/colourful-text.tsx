"use client";
import React from "react";
import { motion } from "motion/react";

export default function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
    "rgb(3, 61, 252)",
  ];

  const [currentColors, ] = React.useState(colors);
  const [count, ] = React.useState(0);


  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
  
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
