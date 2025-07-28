
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projectsData = [
    {
      title: "Sooshma - URL Shortener",
      description: "A web application that allows users to shorten long URLs, track click analytics, and manage custom short links with authentication.",
      technologies: ["SupaBase", "Express.js", "React", "Node.js", "Shadcn UI", "Tailwind CSS"],
      features: ["URL Shortening", "Click Analytics", "Custom Short Links", "User Authentication"],
      image: "/images/sooshma.png",
      liveUrl: "https://sooshma.vercel.app/",
      codeUrl: "https://github.com/adityasharma-codes/Sooshma"
    },
    {
      title: "Shakti-Path - Fitness App",
      description: "A fitness application designed to help users track workouts, set fitness goals, monitor progress, and access personalized training plans.",
      technologies: ["React", "TypeScript", "Next.js", "Socket.io", "Groq AI", "API", "Tailwind CSS"],
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Analytics"],
      image: "/images/Shaktipath.png",
      liveUrl: "https://sakhtipath-workoutplanner.vercel.app/",
      codeUrl: "https://github.com/adityasharma-codes/Shakti-Path"
    },
    {
      title: "Smwaad - Chat Application",
      description: "A real-time chat application with user authentication, group messaging, and real-time notifications.",
      technologies: ["React", "TypeScript","Express.js", "Node.js", "FastAPI", "Redis", "Socket.io"],
      features: ["Group Messaging", "User Authentication", "Real-time Notifications", "Private Chat"],
      image: "/images/smwaad.png",
      liveUrl: "https://smwaad-chat-app.vercel.app/",
      codeUrl: "https://github.com/adityasharma-codes/Smwaad-Chat_APP"
    },
    {
      title: "E-Commerce MERN Application",
      description: "A full-stack e-commerce platform with user authentication, payment integration, admin dashboard, and real-time inventory management.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Stripe API", "JWT"],
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "Inventory Management"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveUrl: "https://github.com/adityasharma-codes/Ecommerce_Nodejs",
      codeUrl: "https://github.com/adityasharma-codes/Ecommerce_Nodejs"
    },
    {
      title: "File Share Url Basic",
      description: "A simple file sharing application that allows users to upload files and generate shareable download links for easy access.",
      technologies: ["React", "JavaScript", "Node.js"],
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Analytics"],
      image: "/images/fileshare.png",
      liveUrl: "https://fileshare-ajfv.onrender.com/",
      codeUrl: "https://github.com/adityasharma-codes/fileshare"
    },
    {
      title: "Pravesh - Login/Signup Interface",
      description: "Login and signup interface for user authentication with social media integration.",
      technologies: ["React", "NodeJs", "Express", "Tailwind CSS"],
      features: ["Social Media Login", "Email/Password Authentication", "Responsive Design"],
      image: "/images/pravesh.png",
      liveUrl: "https://pravesh-ui.vercel.app/login",
      codeUrl: "https://github.com/adityasharma-codes/Pravesh"
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 bg-slate-800/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-slate-700 group hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-slate-700 text-green-300 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700 text-blue-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded transition-colors duration-200 text-sm font-medium"
                  >
                    <Code size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
