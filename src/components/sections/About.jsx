import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express.js", "SQL(MySQL, PostgresSQL)", "MongoDB", "RESTful API design"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-neon-green to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate software developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-neon-green/10 text-neon-green py-1 px-3 rounded-full text-sm hover:bg-neon-green/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-neon-green/10 text-neon-green py-1 px-3 rounded-full text-sm hover:bg-neon-green/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li >
                  <strong> B.Tech in Electronics & Communications Engineering </strong> - Indian Institute of Technology Roorkee
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, Object Oriented Programming
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer Intern at GreyOrange (Jan 2025 - April 2025){" "}
                  </h4>
                  <p>
                     Developed a Path Visualizer tool to debug and analyze autonomous butler paths, ensuring optimal and collision-free
                     navigation using visual feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </RevealOnScroll>
    </section>
  );
};
