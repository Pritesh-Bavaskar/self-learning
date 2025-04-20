import React from "react";
import Button from "./Button";

const ImageWithText = ({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  imageOnLeft = true,
  subtitle = "",
}) => {
  const imageElement = (
    <div className="w-full lg:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover"
      />
    </div>
  );

  const contentElement = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-12">
      {subtitle && (
        <p className="uppercase text-gray-500 tracking-wider text-sm mb-2">
          {subtitle}
        </p>
      )}
      <h3 className="text-3xl font-semibold mb-6">{title}</h3>
      <p className="text-gray-600 mb-8">{description}</p>

      {buttonText && (
        <div>
          <Button text={buttonText} link={buttonLink} variant="dark" />
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {imageOnLeft ? (
            <>
              {imageElement}
              {contentElement}
            </>
          ) : (
            <>
              {contentElement}
              {imageElement}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
