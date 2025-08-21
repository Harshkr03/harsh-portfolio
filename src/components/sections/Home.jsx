import { RevealOnScroll } from "../RevealOnScroll";
import myImage from "../../assets/pic.jpg"

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex relative">
      <div className="flex-1 flex items-center justify-start ml-40">
        <RevealOnScroll>
          <div className="text-center z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-white bg-clip-text text-transparent leading-right">
              Hi I'm Harsh. <br />A{" "}
              <span className="bg-gradient-to-r from-neon-green to-greenish bg-clip-text text-transparent">
                Software Developer.
              </span>
            </h1>

            <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
              I'm passionate about building scalable and efficient full-stack
              web applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://drive.google.com/file/d/12MdiWnY1G82B3PiKG-hRY5x6Sgh_m1GG/view?usp=sharing"
                target="_blank"
                className="bg-neon-green text-dark py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Resume
              </a>

              <a
                href="#contact"
                className="border border-neon-green/50 text-neon-green py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className="flex-1 flex items-center justify-center mr-40">
        <div className="w-100 h-120 bg-blueish  shadow-lg flex flex-col items-center justify-start pt-8">
          <div className="w-50 h-50 rounded-full border-4 border-neon-green overflow-hidden mb-4">
            <img
              src={myImage}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-2">
            <strong i>
              <span className="block text-2xl font-bold">HARSH</span>
              <span className="block text-2xl font-bold">KUMAR</span>
              <hr className="my-4" />
              <span className="block text-2xl font-bold mb-6">
                SOFTWARE DEVELOPER
              </span>
              <div className="flex justify-center space-x-6 mt-3">
                <a href="https://www.linkedin.com/in/harsh-kumar-07a64929b/"  target="_blank">
                  <img
                src="https://cdn-icons-png.flaticon.com/128/61/61109.png"
                alt="Linkedin icon"
                width="20"
                height="20"
              />
                </a>
                <a href="https://github.com/Harshkr03" target="_blank">
                  <img
                src="data:image/png;base64,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"
                alt="Github icon"
                width="20"
                height="20"
              />
                </a>
              </div>
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
