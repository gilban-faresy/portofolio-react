import React from "react";

export default function Profile(){
    return <div id="profile" className="section">
        <div className=" container mx-auto max-w-[1200px] overflow-hidden p-3">
            <div className=" font-secondary text-center font-bold mb-12">
            <h4 className=" text-secondary mb-3">My Skill</h4>
            <h2 className=" text-gradient font-primary max-w-[700px] mx-auto text-[24px]">I specialize in web development, with a strong foundation in HTML, CSS, and PHP. My expertise extends to building robust and efficient applications using the Laravel framework.</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-start justify-between">
                <div className=" text-center w-full max-w-[400px] mx-auto mb-[50px]">
                    <div className=" min-w-[250px]  pt-[45px] overflow-hidden">
                        <img src="/images/faresy.jpg" alt="" />
                    </div>
                    <h2 className=" text-gradient text-[47px] mt-[10px]">Muhammad ikmal Gilban Faresy</h2>
                </div>
                <div className=" w-full lg:pt-[50px] lg:ml-[50px]">
                    <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                        <div className=" w-full">
                            <div className=" bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                            <img src="/images/4.png" alt="" />
                            <div className=" absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 
                            group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                <div className=" text-center w-full text-white">
                                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                    <h4 className=" text-gradient">
                                        HTML
                                    </h4>
                                    </div>
                                    <p>Hypertext Markup Language </p>
                                    <br />
                                    <a href="https://www.w3schools.com/html/" className=" text-gradient">learn more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className=" bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                            <img src="/images/3.png" alt="" />
                            <div className=" absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 
                            group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                <div className=" text-center w-full text-white">
                                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                    <h4 className=" text-gradient">
                                        CSS
                                    </h4>
                                    </div>
                                    <p>Cascading Style Sheets</p>
                                    <br />
                                    <a href="https://www.w3schools.com/css/" className=" text-gradient">learn more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className=" bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                            <img src="/images/5.png" alt="" />
                            <div className=" absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 
                            group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                <div className=" text-center w-full text-white">
                                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                    <h4 className=" text-gradient">
                                        Laravel  
                                    </h4>
                                    </div>
                                    <p>PHP web application framework</p>
                                    <a href="https://laravel.com/" className=" text-gradient">learn more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className=" w-full">
                            <div className=" bg-white h-full justify-center items-center flex rounded-lg overflow-hidden relative p-5 group">
                            <img src="/images/7.png" alt="" />
                            <div className=" absolute p-5 backdrop-blur-xl bg-primary w-full h-full flex items-center opacity-0 scale-0 
                            group-hover:scale-100 group-hover:opacity-100 transition ease-linear">
                                <div className=" text-center w-full text-white">
                                    <div className="bg-white rounded-full px-5 py-2 inline-block mb-2">
                                    <h4 className=" text-gradient">
                                        React JS 
                                    </h4>
                                    </div>
                                    <p>Relating, Experiencing, Applying, Cooperating, Transferring</p>
                                    <a href="https://react.dev/" className=" text-gradient">learn more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
