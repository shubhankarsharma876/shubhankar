import React from 'react'
import { skills } from "./data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import GFG from "../assets/gfg.png";
import Leetcode from "../assets/leetcode.png"



function Contest() {
    const projects = [
        {
          img: Leetcode,
          title: "LeetCode Profile",
          desc: " Accomplished over 300+ problem-solving challenges on LeetCode, enhancing proficiency in Data Structures and Algorithms. Consistently tackling 'Problem of the Day' to foster a disciplined problem-solving mindset.",
          Profile: "https://leetcode.com/Shubhankar_22/",
          
        },
        {
          img: GFG,
          title: "Password Keeper",
          desc: "Tackled 180+ Data Structure and Algorithm questions. Committed to daily 'Problem of the Day' challenges for over 100 days to consistently sharpen DSA expertise. Ranked among the top 30(College) on the platform.",
          Profile: "https://auth.geeksforgeeks.org/user/shubhankarsharma22",
          
        },

      ];
  return (
    <section className="bg-primary text-white px-5 py-32" id="contest">
        <div className="container px-5 py-10 mx-auto">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Platforms
          </h2>

          <p className="pb-5">
            
          </p>
        </div>
        <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
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
                    href={project.Profile}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Profile
                  </a>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
</div>

    </section>
    
  )
}

export default Contest;