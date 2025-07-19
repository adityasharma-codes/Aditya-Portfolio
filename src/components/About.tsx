
const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN stack and modern web technologies. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development, I enjoy creating 
              end-to-end solutions that not only look great but also perform exceptionally well.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me solving algorithmic challenges on competitive 
              programming platforms or exploring new technologies to stay at the forefront of development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">30+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">1+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">1000+</h3>
              <p className="text-gray-300">Problems Solved</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-2xl font-bold text-green-400 mb-2">15+</h3>
              <p className="text-gray-300">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
