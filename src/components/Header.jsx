import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Header() {
    return (
        <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
            <div className="flex justify-between py-5 items-center">
                <div
                    className="text-gradient font-secondary"
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    data-aos-delay="0">
                    <a href="/">
                        <h1 className="text-[30px] leading-none font-bold">Gilban</h1>
                        <h4 className="font-normal leading-none">Faresy</h4>
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    <a
                        href="https://drive.google.com/file/d/1ubnmah6A_g-TtLVHe3Gj3Qos5ygc8XhB/view?usp=sharing"
                        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md transition-all duration-300 hover:bg-blue-700">
                        CV
                    </a>
                    <div
                        className="flex items-center space-x-3"
                        data-aos="fade-left"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        data-aos-delay="0"
                    >
                        <a href="https://github.com/gilban-faresy">
                            <BsGithub className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/migfaresy/">
                            <BsLinkedin className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
