import React, { useState, useEffect } from "react";
import "./styles/experience.css"; // Ensure corresponding CSS file exists
import experience from "../data/experience";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

const Experience = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);
      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  return (
    <div className="experience-page">
      <NavBar active="experience" />

      <div className="experience-logo-container">
        <div className="experience-logo">
          <Logo width={logoSize} link={false} />
        </div>
      </div>

      <h1 className="experience-title">Experience</h1>

      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="experience-card">
            <img
								src={job.logo}
								alt="Florida State University"
								className="work-image"
							/>
            <h2 className="job-title">{job.title}</h2>
            <h3 className="company-name">{job.company}</h3>
            <p className="job-duration">{job.duration}</p>

            <ul className="responsibilities">
              {job.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>

            <div className="technologies">
              <strong>Technologies:</strong> {job.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Experience;