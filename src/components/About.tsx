const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack and modern web technologies. I love turning complex problems
              into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              As a Full Stack Developer, I enjoy working across the entire
              development lifecycle—from crafting responsive user interfaces
              with modern frontend frameworks to designing robust backend
              systems.
            </p>
          
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in both frontend and backend development,
              I enjoy creating end-to-end solutions that not only look great but
              also perform exceptionally well.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me solving algorithmic
              challenges on competitive programming platforms or exploring new
              technologies to stay at the forefront of development.
            </p>{" "}
            <p className="text-lg text-gray-300 leading-relaxed">
              I consistently strive to write clean, maintainable code and follow
              best practices in data structures, algorithms, and design patterns
              to build efficient applications.
            </p>
              <p className="text-lg text-gray-300 leading-relaxed">
              My passion for problem-solving and continuous improvement drives
              me to participate in coding contests, contribute to open-source,
              and always seek opportunities to learn and grow.
            </p>
          </div>
          {/* Tech Stack Icons */}
          {/* Tech Stack Icons */}
          <div className="space-y-6">
            {/* Tech Skills Block */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                Tech Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                <img
                  src="https://api.iconify.design/vscode-icons:file-type-html.svg"
                  alt="HTML5"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/vscode-icons:file-type-css.svg"
                  alt="CSS3"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/vscode-icons:file-type-js-official.svg"
                  alt="JavaScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/vscode-icons:file-type-typescript-official.svg"
                  alt="TypeScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:nodejs-icon.svg"
                  alt="Node.js"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:react.svg"
                  alt="React"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:aws.svg"
                  alt="AWS"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:redux.svg"
                  alt="Redux"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/vscode-icons:file-type-sql.svg"
                  alt="SQL"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:docker-icon.svg"
                  alt="Docker"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  className="w-7 h-7"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="C++"
                  className="w-7 h-7"
                />
                {/* New Icons */}
                <img
                  src="https://api.iconify.design/fluent:brain-circuit-24-filled.svg"
                  alt="AI/ML"
                  title="AI/ML"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:kubernetes.svg"
                  alt="Kubernetes"
                  title="Kubernetes"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:pandas.svg"
                  alt="Data Analytics"
                  title="Data Analytics"
                  className="w-8 h-8"
                />
                <img
                  src="https://api.iconify.design/logos:spring-icon.svg"
                  alt="Spring Boot"
                  title="Spring Boot"
                  className="w-8 h-8"
                />

                <img
                  src="https://api.iconify.design/logos:mongodb-icon.svg"
                  alt="MongoDB"
                  title="MongoDB"
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* Stats Grid (unchanged) */}
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

            {/* DSA & Programming Block */}
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-bold text-green-400 mb-4">
                DSA & Programming
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Arrays
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Strings
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  HashMaps
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  LinkedList
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Stack
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Queue
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Tree
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Graph
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  DP
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Greedy
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Two Pointers
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Sliding Window
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Backtracking
                </span>
                <span className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  Recursion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
