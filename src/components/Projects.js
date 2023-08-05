import React from "react";
import ThoughtBubble from "../assets/ThoughtBubble.png";
import qrcode from "../assets/qrcode.png";
import delicious from "../assets/delicious.png";
import pigeon from "../assets/pigeon.png";
import passwordkeeper from "../assets/passwordkeeper.png"

const Projects = () => {
  const projects = [
    {
      img: pigeon,
      title: "Perfect Pigeon",
      desc: " Based on React.js, Node.js, express.js,and MongoDB. Just upload and forward the link . ",
      live: "https://perfectpigeon.vercel.app/",
      code: "https://github.com/shubhankarsharma876/pigeon",
    },
    {
      img: passwordkeeper,
      title: "Password Keeper",
      desc: " Based on React.js,Node.js, express.js,and MySQL. And password stored encryptedly. ",
      live: "https://github.com/shubhankarsharma876/Password-Manager/",
      code: "https://github.com/shubhankarsharma876/Password-Manager",
    },
    {
      img: ThoughtBubble,
      title: "Thought Bubble",
      desc: " Based on React.js and Firebase for authentication and Firestore for handling the posts. ",
      live: "https://blogging-website-azure.vercel.app/",
      code: "https://github.com/shubhankarsharma876/blogging-website",
    },
    {
      img: delicious,
      title: "Delicious- Recipy Book",
      desc: "Build on React.js, Axios, and spoonacular API for recipes.",
      live: "https://delicious-recipes-here.vercel.app/",
      code: "https://github.com/shubhankarsharma876/recipe",
    },
    {
      img: qrcode,
      title: "QR Code Generator",
      desc: "This is build on HTML, CSS, JavaScript. And is generating QR Code using QR SERVER API",
      live: "https://yourqrgenerator.vercel.app/",
      code: "https://github.com/shubhankarsharma876/QR-Code-Generator",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
