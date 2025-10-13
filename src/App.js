import React from 'react';
import { FaPhone, FaTshirt, FaUsers, FaCalendarAlt, FaGraduationCap, FaBaseballBall, FaUniversity, FaStar } from 'react-icons/fa';
import { GiWhistle } from 'react-icons/gi'; // Using a whistle icon as a proxy for referee/strikeout

const StatCard = ({ title, value }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
      {title === 'Strikeouts' ? <span><GiWhistle className="inline mr-1 text-blue-500" />{title}</span> : formatTitle(title)}
    </h3>
    <p className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{value}</p>
  </div>
);

const formatTitle = (title) => {
  switch (title) {
    case 'BattersBB':
      return 'Batters BB';
    case 'RunsAllowed':
      return 'Runs Allowed';
    case 'EarnedRuns':
      return 'Earned Runs';
    case 'IP':
      return 'IP';
    case 'ERA':
      return 'ERA';
    default:
      return title; // Default case to handle unexpected titles properly
  }
};

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return null;
};

const BaseballStatsDashboard = () => {
  // Add document title for SEO
  React.useEffect(() => {
    document.title = "Anya Shah - Softball Pitcher | Archbishop Mitty | Lady Magic Munoz-Asia 16U | Class of 2028 Stats";
  }, []);
  const teams = [
    {
      name: "Lady Magic Munoz/Asia [16u]",
      seasons: "Fall 2025",
      jersey: "#48",
      coach: "Larry Asia",
      phone: "2094824506",
      headerColor: "bg-[#8B2E23]",
      stats: {
        IP: 15,
        ERA: 0.933,
        Strikeouts: 12,
        Record: "3-0",
        Hits: 9,
        RunsAllowed: 2,
        EarnedRuns: 2,
        BattersBB: 4,
      }
    },
    {
      name: "Sorcerer Gold Hamilton [14u]",
      seasons: "Summer 2025",
      jersey: "#48",
      coach: "Mike Hamilton",
      phone: "9255888657",
      headerColor: "bg-blue-800",
      stats: {
        IP: 53.0,
        ERA: 2.812,
        Strikeouts: 51,
        Record: "6-3",
        Hits: 73,
        RunsAllowed: 40,
        EarnedRuns: 24,
        BattersBB: 9,
      }
    },
    {
      name: "Notre Dame San Jose Highschool Varsity",
      seasons: "Spring 2025 [Freshman]: Notre Dame Varsity Regents",
      jersey: "#7 (Varsity Captain)",
      coach: "Jose Contreas",
      phone: "6504921621",
      headerColor: "bg-blue-400", // Light blue color for Notre Dame matching the provided image
      stats: {
        IP: 97,
        ERA: 1.44,
        Strikeouts: 168,
        Record: "12-2",
        Hits: 74,
        RunsAllowed: 35,
        EarnedRuns: 20,
        BattersBB: 7,
      }
    },
    {
      name: "Sorcerer Gold Hamilton [14u]",
      seasons: "Fall 2024",
      jersey: "#48",
      coach: "Mike Hamilton",
      phone: "9255888657",
      headerColor: "bg-blue-800",
      stats: {
        IP: 57.0,
        ERA: 1.960,
        Strikeouts: 63,
        Record: "7-3",
        Hits: 45,
        RunsAllowed: 29,
        EarnedRuns: 16,
        BattersBB: 12,
      }
    },
    {
      name: "Sorcerer Premiere 2010 [14u]",
      seasons: "Spring 2024, Summer 2024",
      jersey: "#48",
      coach: "Mike Hamilton",
      phone: "9255888657",
      headerColor: "bg-blue-800",
      stats: {
        IP: 129,
        ERA: 2.925,
        Strikeouts: 102,
        Record: "23-8",
        Hits: 149,
        RunsAllowed: 93,
        EarnedRuns: 56,
        BattersBB: 33,
      }
    },
    {
      name: "Cal Nuggets Woods [14u]",
      seasons: "Fall 2023",
      coach: "Kris Caldwell",
      phone: "4158584593",
      jersey: "#48",
      headerColor: "bg-yellow-500",
      stats: {
        IP: 22.2,
        ERA: 3.44,
        Strikeouts: 16,
        Record: "4-3",
        Hits: 32,
        RunsAllowed: 14,
        EarnedRuns: 12,
        BattersBB: 4,
      }
    },
    {
      name: "Cal Nuggets Woods [12u]",
      seasons: "Spring 2023, Summer 2023",
      jersey: "#48",
      coach: "Kris Caldwell",
      phone: "4158584593",
      headerColor: "bg-yellow-500",
      stats: {
        IP: 134.1,
        ERA: 2.241,
        Strikeouts: 116,
        Record: "20-5",
        Hits: 138,
        RunsAllowed: 70,
        EarnedRuns: 43,
        BattersBB: 20,
      }
    },
    {
      name: "Cal Nuggets Woods [12u]",
      seasons: "Fall 2022",
      jersey: "#48",
      coach: "Kris Caldwell",
      phone: "4158584593",
      headerColor: "bg-yellow-500",
      stats: {
        IP: 60.2,
        ERA: 3.34,
        Strikeouts: 58,
        Record: "12-7",
        Hits: 72,
        RunsAllowed: 45,
        EarnedRuns: 29,
        BattersBB: 13,
      }
    },
    {
      name: "Palo Alto Heat [12B]",
      seasons: "Spring 2022, Summer 2022",
      jersey: "#48",
      coach: "Mark Meltz",
      phone: "7876974143",
      headerColor: "bg-green-800",
      stats: {
        IP: 138,
        ERA: 2.18,
        Strikeouts: 181,
        Record: "22-2",
        Hits: 99,
        RunsAllowed: 65,
        EarnedRuns: 43,
        BattersBB: 37,
      }
    }
  ];

  return (
    <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* SEO-optimized header section */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-center rounded-xl shadow-2xl mb-8" role="banner">
        <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="flex items-center justify-center mb-3">
              <a href="https://linktr.ee/anya_shah_48" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-colors duration-300" aria-label="Visit Anya Shah's Linktree profile">
                <FaBaseballBall className="inline mr-3 text-yellow-300" aria-hidden="true" />Anya Shah, Softball Pitcher
              </a>
            </span>
            <div className="text-2xl font-semibold text-yellow-200 mb-2 flex items-center justify-center">
              <FaStar className="mr-2" aria-hidden="true" />Lady Magic Munoz-Asia 16U
            </div>
            <div className="text-xl font-medium text-blue-100 flex items-center justify-center">
              <FaUniversity className="inline mr-2" aria-hidden="true" />Archbishop Mitty HighSchool [Sophomore Transfer]
            </div>
            <div className="text-xl font-medium text-blue-100 flex items-center justify-center">
              <FaUniversity className="inline mr-2" aria-hidden="true" />Notre Dame HighSchool [Freshman]
            </div>
          </h1>
          <div className="text-lg text-gray-100 mt-4">
            <span><FaGraduationCap className="inline mr-2" aria-hidden="true" />Class of 2028</span>
          </div>
          {/* SEO-friendly hidden content */}
          <div className="sr-only">
            <p>Elite softball pitcher Anya Shah from Archbishop Mitty High School, playing for Lady Magic Munoz-Asia 16U travel softball team. Complete statistics, achievements, and recruiting information for Class of 2028 student-athlete.</p>
          </div>
        </div>
      </header>
      
      {/* Main content section */}
      <main role="main">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Team statistics and performance history">
        {teams.map((team, index) => (
          <article key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" itemScope itemType="https://schema.org/SportsTeam">
            <div className={`p-6 text-white ${team.headerColor} relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold mb-2" itemProp="name"><FaUsers className="inline mr-3 text-yellow-300" aria-hidden="true" />{team.name}</h2>
                <p className="text-sm opacity-90 mb-1"><FaCalendarAlt className="inline mr-2" aria-hidden="true" /><span itemProp="season">{team.seasons}</span></p>
                <p className="text-sm opacity-90 mb-2"><FaTshirt className="inline mr-2" aria-hidden="true" />Jersey: <span itemProp="identifier">{team.jersey}</span></p>
                {team.coach && (
                  <p className="text-sm opacity-90"><FaPhone className="inline mr-2" aria-hidden="true" />Coach: <span itemProp="coach">{team.coach}</span> <span itemProp="telephone">{formatPhoneNumber(team.phone)}</span></p>
                )}
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(team.stats).map(([stat, value]) => (
                  <StatCard key={stat} title={stat} value={value} />
                ))}
              </div>
            </div>
          </article>
        ))}
        </section>
      </main>
    </div>
  );
};

export default BaseballStatsDashboard;
