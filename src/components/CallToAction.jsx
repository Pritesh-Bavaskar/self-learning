import React from "react";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-semibold mb-6">
          Start your journey to the top B-schools.
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Today is the day to take control of your prep. Learn at your pace,
          solve challenges that matter, and seek help only when you need it —
          not when you're told to.
        </p>
        <Button text="START NOW" link="/signup" variant="dark" />
      </div>
    </section>
  );
};

export default CallToAction;
