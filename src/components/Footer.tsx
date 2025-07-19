
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Aditya Sharma. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              Back to Top
            </a>
          </div>
        </div>
        
        {/* <div className="mt-6 pt-6 border-t border-slate-700">
          <p className="text-center text-gray-500 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
