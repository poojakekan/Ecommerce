import React from "react";

const About = () => {
  return (
    <div className="md:mx-[10%] mx-[5%] lg:mx-[15%]">
      <div className="font-semibold font-metal-mania text-3xl text-center p-3">
        About
      </div>
      <div className="p-3  md:block flex flex-col gap-6">
        <div className="float-left flex flex-col justify-center items-center	m-4 p-2">
          <img
            src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
            alt="img"
            className="rounded-full  "
            height={200}
            width={200}
          />
          <div className="text-2xl text-center mt-2 font-bold">
           Pooja Kekan
          </div>
        </div>

        <p className="mt-4">
          🚀 **Passionate Frontend Developer | BTech in ENTC | Innovator &
          Problem Solver** Hello LinkedIn community! 👋 I'm Pooja Kekan, a
          dynamic Frontend Developer on a mission to blend innovation with
          technology. Armed with a BTech in ENTC, I'm dedicated to enhancing my
          skills and knowledge to make a meaningful impact. **💻 What I Bring:**
          - Expertise in Java, html, CSS React, JavaScript.
          - Proven track record in creating intuitive and seamless web
          applications. 
          
          **🤝 Let's Connect:** - 📧 Email: pooja.kekan01@gmail.com - [GitHub] ({" "}
          <a
            href="https://github.com/poojakekan"
            className="text-blue-800 font-semibold"
          >
            https://github.com/poojakekan
          </a>
          ) - [LinkedIn]({" "}
          <a
            href=" https://www.linkedin.com/in/poojakekan/"
            className="text-blue-800 font-semibold"
          >
            https://www.linkedin.com/in/poojakekan/
          </a>
          ) **🌟 Seeking Opportunities:** Eager to collaborate on exciting
          projects and contribute my skills to a forward-thinking organization.
          Let's connect, innovate, and build something amazing together! ---
          Feel free to modify this according to your preferences and add any
          additional details that you find relevant. Best of luck with your
          journey!
        </p>
      </div>
    </div>
  );
};

export default About;