import React from "react";
import CallToAction from "../components/CallToAction";
import about_us_banner from "../assets/aboutUsPage/about_us_banner.webp";

const AboutPage = () => {
  const services = [
    {
      title: "Doubt Support",
      description:
        "Get your questions answered by mentors from IIMs, but only when you need them — no hand-holding, just clarity.",
    },
    {
      title: "Strategic Preparation",
      description:
        "We help you focus on what matters: topic-wise challenge sets, past patterns, and time-efficient problem-solving.",
    },
    {
      title: "Progress Tracking",
      description:
        "Visual dashboards and smart analytics to track your strengths, weaknesses, and weekly goals.",
    },
    {
      title: "Mentorship Seminars",
      description:
        "Weekly mentor-led sessions focused on problem-solving techniques, exam hacks, and strategy deep dives.",
    },
    {
      title: "Curated Question Bank",
      description:
        "High-quality CAT & OMET-level questions designed for serious learners — no fluff, just depth.",
    },
    {
      title: "Flexible Learning",
      description:
        "Study at your pace, unlock new challenges weekly, and build consistency without the chaos of traditional coaching.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section
        className="relative py-32 md:py-40 bg-gray-900 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${about_us_banner})`,
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We’re a team of passionate learners, mentors, and builders —
              helping serious aspirants crack CAT & OMETs their own way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 mb-8">
                We believe self-learners deserve better tools, better
                challenges, and better guidance — without the burden of
                full-time coaching.
              </p>

              <div className="space-y-6 text-gray-600">
                <p>
                  Our mission is to create a focused learning environment for
                  CAT & OMET aspirants who want to take control of their prep.
                  We combine high-quality practice sets, selective mentor
                  support, and live problem-solving seminars — so you only get
                  help when you need it.
                </p>
                <p>
                  You don’t need 5-hour classes or endless modules. You need
                  curated questions, analytical insights, and a push from the
                  right mentor at the right moment. That’s what we deliver — in
                  a lean, effective format.
                </p>
                <p>
                  We’re not just educators — we’re fellow aspirants, engineers,
                  and dreamers who’ve walked this road. Whether you’re aiming
                  for the IIMs or top OMET schools, we’re here to guide and
                  challenge you — on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              WHAT WE ARE BEST AT
            </h2>
            <p className="text-xl text-gray-600">Our Services</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />
      {/* <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Grow your business.
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Today is the day to build the business of your dreams. Share your
              mission with the world — and blow your customers away.
            </p>
            <Button
              text="START NOW"
              link="/signup"
              variant="dark"
              className="px-8 py-3 text-lg"
            />
            <p className="mt-12 text-gray-500 text-sm">Powered by Webflow</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
