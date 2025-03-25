import React from "react";
import Button from "../components/Button";

const AboutPage = () => {
  const services = [
    {
      title: "Support",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      title: "Strategy",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life",
    },
    {
      title: "Management",
      description:
        "Blind texts it is an almost unorthographic life One day however a small line of blind text by the name",
    },
    {
      title: "Training",
      description:
        "Blind texts it is an almost unorthographic life One day however a small line of blind text by the name",
    },
    {
      title: "Consulting",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    },
    {
      title: "Events",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="relative py-32 md:py-40 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We're a group of creative thinkers who have built a business to
              change the world.
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
                We're a group of creative thinkers who have built a business to
                change the world.
              </p>

              <div className="space-y-6 text-gray-600">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </p>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar. The Big Oxmox advised her
                  not to do so, because there were thousands of bad Commas, wild
                  Question Marks and devious Semikoli, but the Little Blind Text
                  didn't listen.
                </p>
                <p>
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way. When she reached the first hills
                  of the Italic Mountains, she had a last view back on the
                  skyline of her hometown Bookmarksgrove, the headline of
                  Alphabet Village and the subline of her own road, the Line
                  Lane.
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
      <section className="py-16 md:py-24 bg-gray-100">
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
      </section>
    </div>
  );
};

export default AboutPage;
