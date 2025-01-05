"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../component/text-reveal-card";
export const Contact = () => {
  return (
    <div className="overflow-hidden"  id="end">
      <div id="stars3"></div>
      <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-screen ">
      <TextRevealCard
        text="mathesh1907@gmail.com"
        // revealText="guna.asin06@gmail.com"
        revealText="  +91 9360599740"
      >
        <TextRevealCardTitle className={'font-popins'}>
         Contact 
        </TextRevealCardTitle>
        <TextRevealCardDescription className={'font-popins'}>
        we're committed to providing timely and helpful responses to all inquiries. Don't hesitate to get in touch :)
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
          <div className="flex items-center justify-center w-screen endofera">
        <ul className="flex">
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1">
            <a href="https://www.linkedin.com/in/mathesh-ravichandravelu-429a4b240/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1">
            <a href="https://github.com/MatheshRavichandrann">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1">
            <a href="mailto:mathesh1907@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1">
            <a href="https://leetcode.com/u/Mathesh-Ravichandran/">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" 
                alt="LeetCode" 
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}
