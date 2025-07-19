
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Laxmi Devi Institute of Engineering and Technology",
      duration: "2021 - 2025",
      grade: "CGPA: 9.58/10",
      description: "Specialized in Data Structures, Algorithms, Database Management, and Software Engineering. Active member of the Programming Club."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Mount Litera Zee School",
      duration: "2020 - 2021",
      grade: "Percentage: 75%",
      description: "Mathematics, Physics, Chemistry . Participated in various coding competitions and science fairs."
    },
    {
      degree: "Secondary School Certificate",
      institution: "Mount Litera Zee School",
      duration: "2018 - 2019",
      grade: "Percentage: 84.4%",
      description: "All subjects with distinction. Class representative and active participant in technical events."
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20 bg-slate-800/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200">
                  <GraduationCap size={24} className="text-white" />
                </div>
                {index < educationData.length - 1 && (
                  <div className="w-0.5 h-24 bg-slate-600 mt-4"></div>
                )}
              </div>
              
              <div className="flex-1 bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700 group-hover:bg-slate-800/70 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-blue-400 font-semibold">{item.duration}</span>
                </div>
                <p className="text-purple-400 font-semibold mb-2">{item.institution}</p>
                <p className="text-green-400 font-semibold mb-3">{item.grade}</p>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
