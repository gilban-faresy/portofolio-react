import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Banner(){
    return <div id="home"
    className=" section container mx-auto max-w-[1200px] px-3 items-center">
        <div className=" w-full">
        <div className=" block text-center font-secondary font-black text-[30px]">
            hello everyone
            <div>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FrontEnd Developer',
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        'frontend developer',
        3000,
        'FRONTEND DEVELOPER',
        3000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
    //   speed={50}
    //   style={{ fontSize: '2em' }}
      cursor={true}
      repeat={Infinity}
      className=" ml-3 text-secondary"
    />
    </div>
    </div>
    <div className=" max-w-[750px] text-center mx-auto mt-5">my name is Muhammad Ikmal Gilban Faresy. Born in Bogor on April 20 2007. I am the second child of three brothers. I study at Wikrama Vocational School majoring in PPLG.</div>
        </div>
        </div>
}
