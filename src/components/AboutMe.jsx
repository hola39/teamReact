import React, { useState } from 'react';
import DeveloperDetail from './DeveloperDetail';
import '../styles/AboutMe.css';
//import profile1 from '../images/profile1.jpg';

const profileData = [
  {
    id: 1,
    imgSrc: "https://avatars.githubusercontent.com/u/164981501?s=400&u=469700f930205fddd2e2305e6619335e96c88363&v=4",
    name: "김영욱",
    description: "안녕하세요! 저는 김영욱입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python","Git & GitHub"],
    email: "2401340041@office.kopo.ac.kr",
    github: "https://github.com/ai-comic",

  },
  {
    id: 2,
    imgSrc: "https://png.pngtree.com/png-vector/20240421/ourlarge/pngtree-stitch-illustration-png-image_12307079.png",
    name: "류경민",
    description: "안녕하세요! 저는 류경민입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python"],
    email: "2401340039@office.kopo.ac.kr",
    github: "생성중",
  },
  {
    id: 3,
    imgSrc: "https://cdn.openart.ai/uploads/image_kHHFC3OX_1733113844726_raw.jpg",
    name: "김소평",
    description: "안녕하세요! 저는 김소평입니다.",
    techStack: ["HTML", "CSS", "JavaScript (React, Node.js)", "Python, JAVA (SpringMVC, Springboot), GitHub"],
    email: "2401340096@office.kopo.ac.kr",
    github: "https://github.com/so-pyeong",
  },
];

const AboutMe = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);

  const handleDeveloperClick = (developer) => {
    setSelectedDeveloper(developer);
  };

  return (
    <div className="AboutMe">
      {!selectedDeveloper ? (
        <>
          <h2>About Me</h2>
          <div className="profile-list">
            {profileData.map((profile) => (
              <div
                key={profile.id}
                className="profile-card"
                onClick={() => handleDeveloperClick(profile)}
              >
                <img src={profile.imgSrc} alt={profile.name} className="profile-image" />
                <h3>{profile.name}</h3>
                <p>{profile.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <DeveloperDetail developer={selectedDeveloper} onBack={() => setSelectedDeveloper(null)} />
      )}
    </div>
  );
};

export default AboutMe;