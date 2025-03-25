import React from "react";
import Hero from "../components/Hero";
import MissionStatement from "../components/MissionStatement";
import ImageWithText from "../components/ImageWithText";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const HomePage = () => {
  // Placeholder data
  const aboutUsData = {
    subtitle: "ABOUT",
    title: "Why choose us?",
    description:
      "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
    image: "/api/placeholder/400/320",
  };

  const teamData = {
    subtitle: "TEAM",
    title: "How we will help you to succeed?",
    description:
      "Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.",
    buttonText: "LEARN MORE",
    buttonLink: "/team",
    image: "/api/placeholder/400/320",
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

      <ImageWithText
        image={teamData.image}
        title={teamData.title}
        subtitle={teamData.subtitle}
        description={teamData.description}
        buttonText={teamData.buttonText}
        buttonLink={teamData.buttonLink}
        imageOnLeft={false}
      />

      <CallToAction />

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
