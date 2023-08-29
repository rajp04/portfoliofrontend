import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Raj Ghodasara</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            MERN Stack Developer
          </h4>
          <button className="btn-primary mt-8"><a href="#contact">Contact Me</a></button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5 ">
            <div className="text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all">
              <a href="https://www.linkedin.com/in/raj-ghodasara-610704209/" target="_blank"><ion-icon name='logo-linkedin'></ion-icon></a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all">
              <a href="https://github.com/rajp04" target="_blank"><ion-icon name='logo-github'></ion-icon></a>
            </div>
            <div className="text-gray-600 hover:text-white cursor-pointer hover:scale-125 transition-all">
              <a href="https://www.instagram.com/raj_patel_04/" target="_blank"><ion-icon name='logo-instagram'></ion-icon></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
