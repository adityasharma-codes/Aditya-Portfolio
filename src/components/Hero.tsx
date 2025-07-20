
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            Aditya Sharma
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer & Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications 
            with modern technologies. Always eager to learn and tackle new challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 font-semibold"
            >
              Learn More
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg transition-colors duration-200 font-semibold"
            >
              Get In Touch
            </button>
            <a
  href="https://drive.google.com/file/d/1bVXEm91fpkUDGCkkxUDREupurh8H7fsk/view"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-cyan-400 hover:text-black rounded-lg transition-colors duration-200 font-semibold text-center"
>
  Check Resume
</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
};

export default Hero;
