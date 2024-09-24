'use client'
import React from "react";
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useTypewriter from "react-typewriter-hook";




const Roles = [
  "Digital Forensic Analyst",
  "VAPT Analyst",
  "Cyber Security Trainer (CEI)",
  "Technical Pre-sales Engineer" ,
  "Technical Implementation Engineer"
];
let index = 0;

function NamaAnimation() {
  const [Vname, setvname] = useState("Cyber Securiy Analyst");
  const intervalRef = useRef({});
  const name = useTypewriter(Vname);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        index = index > 5 ? 0 : ++index;
        setvname(Roles[index]);
      }, 7000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [Vname]
  );
  return (
    <div>
    
      <span className="animation-text">{name}</span>
    </div>
  );
}

export default NamaAnimation

