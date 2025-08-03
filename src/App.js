import React from 'react';
import { FaPhone, FaTshirt, FaUsers, FaCalendarAlt, FaGraduationCap, FaBaseballBall } from 'react-icons/fa';
import { GiWhistle } from 'react-icons/gi'; // Using a whistle icon as a proxy for referee/strikeout

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-sm font-medium text-gray-500">
      {title === 'Strikeouts' ? <span><GiWhistle className="inline mr-1" />{title}</span> : formatTitle(title)}
    </h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
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
  const teams = [
    {
      name: "Sorcerer Gold Hamilton [14u]",
      seasons: "Summer 2024",
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
      name: "Notre Dame San Jose [Highschool Varsity]",
      seasons: "Spring 2025 [Freshman]: Notre Dame Varsity Regents",
      jersey: "#7 (Captain)",
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
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-gray-200 p-4 text-center">
        <h1 className="text-3xl font-bold">
	  <span>
	  <a href="https://linktr.ee/anya_shah_48" target="_blank" rel="noopener noreferrer">
	    <FaBaseballBall className="inline mr-1" />Anya Shah, Softball Pitcher
	  </a>
          </span>
          <br />
          <span><FaGraduationCap className="inline mr-1" />Class of 2028</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className={`p-4 text-white ${team.headerColor}`}>
              <h2 className="text-xl font-semibold"><FaUsers className="inline mr-2" />{team.name}</h2>
              <p className="text-sm"><FaCalendarAlt className="inline mr-2" />{team.seasons}</p>
              <p className="text-sm"><FaTshirt className="inline mr-2" />Jersey: {team.jersey}</p>
              {team.coach && (
                <p className="text-sm mt-1"><FaPhone className="inline mr-2" />Coach: {team.coach} {formatPhoneNumber(team.phone)}</p>
              )}
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries(team.stats).map(([stat, value]) => (
                  <StatCard key={stat} title={stat} value={value} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseballStatsDashboard;
