import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <div className="profile">
                <img 
                    src="https://avatars.githubusercontent.com/u/164981501?s=400&u=469700f930205fddd2e2305e6619335e96c88363&v=4" 
                    alt="Profile"
                    className="profile-image" 
                />
                <h1>안녕하세요! 저는 김영욱입니다.</h1>
                <p className="intro">개발자입니다. 새로운 것을 배우고, 다양한 프로젝트에 참여하며 성장하는 것을 즐깁니다.</p>
            </div>
            
            <div className="section">
                <h2>기술 스택</h2>
                <ul className="skills">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript (React, Node.js)</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>
            
            <div className="section">
                <h2>연락처</h2>
                <p>이메일: 2401340041@office.kopo.ac.kr</p>
                <p>GitHub: <a href="https://github.com/ai-comic" target="_blank" rel="noopener noreferrer">https://github.com/ai-comic</a></p>
            </div>
        </div>
    );
}

export default About;
