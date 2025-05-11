import React from "react";
import Hero from "../components/Hero";
import MissionStatement from "../components/MissionStatement";
import ImageWithText from "../components/ImageWithText";
import CallToAction from "../components/CallToAction";
import Payment from "../components/Payment";
import landing_about from "../assets/landingPage/landing_about.webp"
import landing_teams from "../assets/landingPage/landing_teams.webp"
const HomePage = () => {
  // Placeholder data
  const aboutUsData = {
    subtitle: "ABOUT",
    title: "Why Choose Us?",
    description:
      "We’re not a typical coaching institute. We’re a learning ecosystem designed for self-driven aspirants. Whether you want to study alone, solve handpicked advanced problems, or just attend a few game-changing seminars — we give you the flexibility, focus, and mentorship that’s often missing in conventional coaching setups.",
    image: landing_about,
  };

  const teamData = {
    subtitle: "TEAM",
    title: "How Will We Help You Succeed?",
    description:
      "By offering challenge-driven learning, data-backed analytics, and optional mentor-led sessions—we make sure you focus on what actually matters. No distractions, no forced modules. Just a tailored journey toward your target B-school.",
    buttonText: "LEARN MORE",
    buttonLink: "/team",
    image: landing_teams,
  };

  return (
    <div className="min-h-screen">
      <Hero />

      <MissionStatement />

      <ImageWithText
        image={aboutUsData.image}
        title={aboutUsData.title}
        subtitle={aboutUsData.subtitle}
        description={aboutUsData.description}
        imageOnLeft={true}
      />

      <ImageWithText {...teamData} imageRight={true} />

      <CallToAction />

    </div>
  );
};

export default HomePage;
