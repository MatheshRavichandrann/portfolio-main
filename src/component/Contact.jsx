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
      <div className="flex items-center justify-center  h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="mathesh1907@gmail.com"
        revealText="      +91 9360599740"
      >
        <TextRevealCardTitle className={'font-popins'}>
         Contact Me
        </TextRevealCardTitle>
        <TextRevealCardDescription className={'font-popins'}>
        we're committed to providing timely and helpful responses to all inquiries. Don't hesitate to get in touch – we're here to help !
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    <div className="flex items-center justify-center w-screen endofera" >
        <ul className="flex">
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFQ0m7lTYS_8wAAAZGtDaAIXvUow_3JB62dhdIqp4jFpDWzu2GRYoD8hLIUNu74iBqxG3itb9SEMpIQh1NmpIL7aRKfy7hHUviMmJJxDMfy9Lc04OFkckBc98OsttIzL6WPNVo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmathesh-ravichandravelu-429a4b240%2F"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://github.com/MatheshRavichandrann"><i class="fa-brands fa-github"></i></a></li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="mailto:mathesh1907@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
          <li className="project-textp md:text-3xl sm:text-xl mx-8 my-4 ease-in duration-200 hover:my-1"><a href="https://leetcode.com/u/Mathesh-Ravichandran/"><i class="fa-brands fa-code"></i></a></li>
        </ul>
    </div>
    </div>
  )
}
