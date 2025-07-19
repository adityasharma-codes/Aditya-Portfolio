
import { ExternalLink } from 'lucide-react';

const Profile = () => {
  const profileData = [
    {
      platform: "CodeChef",
      username: "@aadityasharmaa",
      rating: "1250+ (1★)",
      description: "Competitive programming enthusiast with 250+ problems solved",
      url: "https://www.codechef.com/users/aadityasharmaa",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10 border-yellow-500/30"
    },
    {
      platform: "HackerRank",
      username: "@adityaomsharma21",
      rating: "Java 4★ Python 3★ SQL 2★",
      description: "Certified in Problem Solving, Algorithms, and Data Structures",
      url: "https://www.hackerrank.com/profile/adityaomsharma21",
      color: "from-green-400 to-teal-500",
      bgColor: "bg-green-500/10 border-green-500/30"
    },
    {
      platform: "LinkedIn",
      username: "Aditya Sharma",
      rating: "500+ Connections",
      description: "Professional network and career updates",
      url: "https://www.linkedin.com/in/adityasharma0001/",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    },
    {
      platform: "GitHub",
      username: "@adityasharma-codes",
      rating: "100+ Repositories",
      description: "Open source contributions and personal projects",
      url: "https://github.com/adityasharma-codes",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-500/10 border-gray-500/30"
    },
    {
      platform: "LeetCode",
      username: "@adityaomsharma2004",
      rating: "200+ Problems",
      description: "Daily problem solving and contest participation",
      url: "https://leetcode.com/u/adityaomsharma2004/",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-500/10 border-orange-500/30"
    },
    {
      platform: "Codeforces",
      username: "@adityaomsharma2004",
      rating: "Specialist (800+)",
      description: "Regular contest participant with growing rating",
      url: "https://codeforces.com/profile/adityaomsharma2004",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10 border-purple-500/30"
    }
    ,
    {
      platform: "CodeStudio",
      username: "@aadisharma",
      rating: "55+ Daily Challenges",
      description: "Daily coding challenges and contests and learning resources",
      url: "https://www.naukri.com/code360/profile/aadisharma",
      color: "from-orange-400 to-blue-500",
      bgColor: "bg-blue-500/10 border-blue-500/30"
    },
    {
      platform: "GeeksforGeeks",
      username: "@adityaomsharma2004",
      rating: "200+ Problems",
      description: "Daily problem solving and contest participation",
      url: "https://www.geeksforgeeks.org/user/adityaomsharma2004/",
      color: "from-cyan-400 to-green-500",
      bgColor: "bg-cyan-500/10 border-green-500/30"
    },
    {
      platform: "Codolio",
      username: "@adityaomsharma2004",
      rating: "Top 4800 in India",
      description: "Daily Track of my coding journey and DSA Sheet Progress",
      url: "https://codolio.com/profile/AdityaSharma_",
      color: "from-yellow-400 to-red-500",
      bgColor: "bg-red-500/10 border-red-500/30"
    }
  ];

  return (
    <section id="profile" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">Coding Profiles</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with me on various coding platforms where I showcase my problem-solving skills 
            and contribute to the developer community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profileData.map((profile, index) => (
            <div
              key={index}
              className={`${profile.bgColor} p-6 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 group cursor-pointer`}
              onClick={() => window.open(profile.url, '_blank')}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.platform}
                </h3>
                <ExternalLink 
                  size={20} 
                  className="text-gray-400 group-hover:text-white transition-colors duration-200" 
                />
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-white font-semibold">{profile.username}</p>
                <p className={`font-medium bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.rating}
                </p>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {profile.description}
              </p>
              
              <div className="mt-4 flex justify-end">
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                  Click to visit →
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm border border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Competitive Programming Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">2000+</div>
                <div className="text-sm text-gray-300">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-300">Contests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">8+</div>
                <div className="text-sm text-gray-300">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">1+</div>
                <div className="text-sm text-gray-300">Years Active</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
