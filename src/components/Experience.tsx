
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      position: "Web Application Developer Intern",
      company: "MitchinTag LLP",
      duration: "June 2024 - Aug 2024",
      type: "Internship",
      description: "Developing and maintaining web applications using React, Node.js, and MongoDB. Led a team of 3 developers to deliver a client project 2 weeks ahead of schedule.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript"]
    },
    {
      position: "Data Science AI/ML Intern",
      company: "Upflairs Pvt. Ltd.",
      duration: "May 2024 - June 2024",
      type: "Internship",
      description: "Built responsive user interfaces and collaborated with design teams to implement pixel-perfect designs. Improved website performance by 40% through optimization techniques.",
      technologies: ["React", "Flask", "Machine Learning Algo", "Python", "HTML", "CSS", "Git"]
    },
   
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-200">
                  <Briefcase size={24} className="text-white" />
                </div>
                {index < experienceData.length - 1 && (
                  <div className="w-0.5 h-32 bg-slate-600 mt-4"></div>
                )}
              </div>
              
              <div className="flex-1 bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:bg-slate-800/70 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{item.position}</h3>
                  <span className="text-blue-400 font-semibold">{item.duration}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <p className="text-purple-400 font-semibold">{item.company}</p>
                  <span className="text-teal-400 text-sm font-medium">{item.type}</span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
