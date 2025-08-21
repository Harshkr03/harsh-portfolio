import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-neon-green bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-neon-green hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Multithreaded Chat Server</h3>
              <p className="text-gray-400 mb-4">
                Scalable chat platform supporting real-time messaging, presence, and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C++", "Multithreading", "Mutex Locks", "Socket Programming"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-neon-green/10 text-neon-green py-1 px-3 rounded-full text-sm hover:bg-neon-green/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Harshkr03/Multithreaded-Chat-Server"
                  target="_blank"
                  className="text-neon-green hover:text-neon-green transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-neon-green
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Location Based File Sharing Application</h3>
              <p className="text-gray-400 mb-4">
                Mobile app designed to enable seamless and intuitive sharing of files between users based on their physical proximity
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Firebase", "Google OAuth2", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-neon-green/10 text-neon-green py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-neon-green/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-neon-green hover:text-neon-green transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-neon-green
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">E-Commerce Web App</h3>
              <p className="text-gray-400 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-neon-green/10 text-neon-green py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-neon-green/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-neon-green hover:text-neon-green transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-neon-green
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Contact Manager Application</h3>
              <p className="text-gray-400 mb-4">
                Secure and scalable backend for managing over 1000 contacts with user authentication, authorization, and modular architecture.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Express", "RESTful API", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-neon-green/10 text-neon-green py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-neon-green/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-neon-green hover:text-neon-green transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
