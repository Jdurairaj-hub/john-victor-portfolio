import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import newImage from "../../assets/images/linkedin_profile_portfolio.png";


export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text="Resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div 
            className="greeting-image-div" 
            style={{ 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center", 
              marginTop: "-50px", 
              padding: "10px"  
            }}
          >
            <img
              alt="profile"
              src={newImage}
              style={{
                width: "350px",  // Adjust width as needed
                height: "350px", // Adjust height as needed
                borderRadius: "50%", // Makes the image round
                objectFit: "cover",  // Ensures the image covers the entire area
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",  // Optional: Adds a shadow
              }}
            />
          </div>



        </div>
      </div>
    </Fade>
  );
}
