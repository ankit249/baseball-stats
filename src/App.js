import React from 'react';
import { FaPhone, FaTshirt, FaUsers, FaCalendarAlt, FaGraduationCap, FaBaseballBall, FaUniversity, FaStar, FaTachometerAlt, FaTrophy, FaVideo, FaLink, FaIdCard } from 'react-icons/fa';
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
    document.title = "Anya Shah Softball Stats | Class of 2028 RHP | Lady Magic Munoz 16U";
  }, []);
  const teams = [
    {
      name: "Lady Magic Munoz 16u",
      seasons: "Summer 2026",
      jersey: "#48",
      coach: "Ernie Munoz | Joe Jaquez",
      phone: "",
      headerColor: "bg-[#8B2E23]",
      stats: {
        IP: 50.2,
        ERA: 2.90,
        Strikeouts: 41,
        Record: "8-4",
        Hits: 52,
        RunsAllowed: 25,
        EarnedRuns: 21,
        BattersBB: 10,
      }
    },
    {
      name: "Lady Magic Munoz 16u",
      seasons: "Fall 2025",
      jersey: "#48",
      coach: "Larry Asia",
      phone: "208-482-4506",
      headerColor: "bg-[#8B2E23]",
      stats: {
        IP: 48,
        ERA: 3.10,
        Strikeouts: 46,
        Record: "6-3",
        Hits: 43,
        RunsAllowed: 26,
        EarnedRuns: 24,
        BattersBB: 15,
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
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <FaBaseballBall className="inline mr-3 text-yellow-300" aria-hidden="true" />Anya Shah Softball Stats
          </h1>
          <p className="text-xl font-medium text-blue-100 flex items-center justify-center">
            <FaGraduationCap className="inline mr-2" aria-hidden="true" />Class of 2028 Right-Handed Pitcher
          </p>
          <a href="https://www.ladymagicsoftball.org/copy-of-lady-magic-munoz-2" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-yellow-200 mb-2 mt-2 flex items-center justify-center hover:text-yellow-300 transition-colors duration-300" aria-label="Visit Lady Magic Munoz 16U team page">
            <FaStar className="mr-2" aria-hidden="true" />Lady Magic Munoz 16U
          </a>
          <div className="text-xl font-medium text-blue-100 flex items-center justify-center mt-2">
            <FaUniversity className="inline mr-2" aria-hidden="true" />Archbishop Mitty High School, CA
          </div>
        </div>
      </header>

      {/* Main content section */}
      <main role="main">
        <section aria-labelledby="team-stats-heading" className="mb-8">
          <h2 id="team-stats-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaUsers className="inline mr-3 text-blue-600" aria-hidden="true" />Season-by-Season Team Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Team statistics and performance history">
          {teams.map((team, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" itemScope itemType="https://schema.org/SportsTeam">
              <div className={`p-6 text-white ${team.headerColor} relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2" itemProp="name"><FaUsers className="inline mr-3 text-yellow-300" aria-hidden="true" />{team.name}</h3>
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
          </div>
        </section>

        <section aria-labelledby="player-info-heading" className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100" itemScope itemType="https://schema.org/Person">
          <h2 id="player-info-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaIdCard className="inline mr-3 text-blue-600" aria-hidden="true" />Player Information</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li itemProp="name">Anya Shah</li>
            <li>Class of 2028</li>
            <li itemProp="jobTitle">Right-Handed Pitcher</li>
            <li itemProp="alumniOf">Archbishop Mitty High School, CA</li>
            <li itemProp="memberOf">Lady Magic Munoz 16U</li>
            <li>GPA: 4.45</li>
            <li>
              Player Profile: <a href="https://linktr.ee/anya_shah_48" target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className="text-blue-600 hover:underline">https://linktr.ee/anya_shah_48</a>
            </li>
            <li>
              Twitter/X: <a href="https://twitter.com/anya_shah_2028" target="_blank" rel="noopener noreferrer me" itemProp="sameAs" className="text-blue-600 hover:underline">anya_shah_2028</a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="velocity-heading" className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <h2 id="velocity-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaTachometerAlt className="inline mr-3 text-blue-600" aria-hidden="true" />Pitching Velocity</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Fastball: 63 MPH</li>
            <li>Riseball: 61 MPH</li>
            <li>Curveball: 58 MPH</li>
            <li>Changeup: 50 MPH</li>
          </ul>
        </section>

        <section aria-labelledby="tournament-heading" className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <h2 id="tournament-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaTrophy className="inline mr-3 text-blue-600" aria-hidden="true" />TCS Colorado Tournament Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>TCS P5 Patriot Games 16U: Finished tied for 5th</li>
            <li>TCS Sparkler National Power Pool 16U: Finished tied for 9th</li>
          </ul>
        </section>

        <section aria-labelledby="video-heading" className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <h2 id="video-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaVideo className="inline mr-3 text-blue-600" aria-hidden="true" />Video Playlists</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>
              <a href="https://my.sportsrecruits.com/athlete/anya_shah4?playlist=174893" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TCS P5 Patriot Games 16U Playlist</a>
              <p className="text-sm text-gray-500 mt-1">Video playlist of Anya Shah's pitching and game footage from the TCS P5 Patriot Games 16U tournament.</p>
            </li>
            <li>
              <a href="https://my.sportsrecruits.com/athlete/anya_shah4?playlist=190505" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TCS Sparkler National Power Pool 16U Playlist</a>
              <p className="text-sm text-gray-500 mt-1">Video playlist of Anya Shah's pitching and game footage from the TCS Sparkler National Power Pool 16U tournament.</p>
            </li>
            <li>
              <a href="https://youtu.be/4XitREunHuM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AZ Last Blast Strikeout Clips, January 2026</a>
              <p className="text-sm text-gray-500 mt-1">Strikeout highlight clips of Anya Shah from the AZ Last Blast tournament, January 2026.</p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="recruiting-heading" className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          <h2 id="recruiting-heading" className="text-2xl font-bold mb-4 text-gray-800 flex items-center"><FaLink className="inline mr-3 text-blue-600" aria-hidden="true" />Recruiting Summary</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Anya Shah is a Class of 2028 right-handed pitcher from Archbishop Mitty High School in California. She plays travel softball for Lady Magic Munoz 16U. Her pitching velocity includes a 63 MPH fastball, 61 MPH riseball, 58 MPH curveball, and 50 MPH changeup. She recently competed in the TCS Colorado tournaments, including the P5 Patriot Games 16U and Sparkler National Power Pool 16U.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BaseballStatsDashboard;
