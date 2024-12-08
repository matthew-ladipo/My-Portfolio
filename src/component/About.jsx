import React from "react";

const About = () => {
  const skills = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Reactjs" },
    { name: "Nextjs" },
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "Nodejs" },
    { name: "UI Libraries - (Material UI, Shadcn UI, React Bootstrap)" },
    { name: "Version Control - (GIT, Github)" },
    { name: "Responsive Design, SEO" },
  ];

  return (
    <section
      id="about"
      className=" scroll-smoot bg-gray-100 text-gray-800 py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto">
        <div className="text-center py-10">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <span className="bg-blue-800 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
          <p className="text-gray-500 mb-10 px-[150px] text-[22px] leading-relaxed">
          Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* About Text */}
          <div className="md:w-2/3 md:pr-10 mb-10 md:mb-0">
            <h3 className="text-xl font-bold mb-5 text-gray-700">
              Get to Know Me
            </h3>
            <div className="text-gray-700 leading-7 text-justify pr-20">
              <p className="mb-6">
                Hi, I'm <span className="font-bold">Matthew Ladipo</span>, a
                passionate and dedicated frontend developer with a love for
                creating interactive and user-friendly web applications. My goal
                is to bring ideas to life through clean, efficient, and
                responsive code.
              </p>
              <p className="mb-6">
                With a strong foundation in HTML, CSS, JavaScript, and frameworks
                like React, I focus on building modern websites that work
                seamlessly across different devices. I'm continuously learning and
                staying updated with the latest technologies and trends in frontend
                development to deliver high-quality solutions.
              </p>
              <p className="text-lg">
                In my free time, I enjoy contributing to open-source projects,
                experimenting with new web technologies, and improving my skills.
                Let's connect and work together to build something amazing!
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-5 text-gray-700">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="py-2 px-4 bg-gray-200 text-gray-600 font-mono font-semibold text-sm rounded-lg hover:bg-gray-300 shadow-md transition-all"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
