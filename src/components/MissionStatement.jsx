import React from "react";

const MissionStatement = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="uppercase text-gray-500 tracking-wider text-sm mb-8">
            OUR MISSION: GUIDING SELF-LEARNERS TO B-SCHOOL SUCCESS
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mx-auto max-w-4xl leading-tight">
            Cracking CAT & OMETs isn’t just about hard work — it’s about making
            the right moves.{" "}
            {/* <span className="font-bold">right approach</span>. Our goal is to
            give you a <span className="font-bold">smarter, data-driven</span>,
            and <span className="font-bold">mentor-backed</span>
            study plan that adapts to your needs, ensuring you reach your full
            potential */}
            With <span className="font-bold">targeted practice</span>,{" "}
            <span className="font-bold">selective mentorship</span>, and{" "}
            <span className="font-bold">flexible learning </span>, we help
            driven learners like you reach top B-schools without the fluff of
            full-time coaching.
          </h2>
        </div>

        <div className="mt-20 border-t border-gray-200 max-w-4xl mx-auto"></div>
      </div>
    </section>
  );
};

export default MissionStatement;
