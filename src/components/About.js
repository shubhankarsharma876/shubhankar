import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My name is Shubhankar Sharma. I am a an undergraduate Computer Science and Engineering student from India. I build beautifull websites with React and Tailwind CSS.
          </p>
          <p className="pb-5">
            I am using  React.js, Axios, Tailwind CSS, Css3 and Frontend skills for Frontend skills.
          </p>

          <p>In backend using Node.js, Express.js, MongoDB, MySQL, Firestore.</p>

          <p>For deployment currently using Vercel, Firebase, Netlify, GitHub.</p>

          <p>
            In my spare time I use to enjoy the Chess ♟ matches, reading Biographies and Autobiographies as well.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt=""
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    
  );
};

export default About;
