import React from "react";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-semibold mb-6">Grow your business.</h2>
        <p className="text-lg text-gray-600 mb-10">
          Today is the day to build the business of your dreams. Share your
          mission with the world — and blow your customers away.
        </p>
        <Button text="START NOW" link="/signup" variant="dark" />
      </div>
    </section>
  );
};

export default CallToAction;
