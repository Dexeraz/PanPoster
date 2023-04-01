import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="bg-gray-700 text-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Pan Poster
          </h1>
          <p className="text-lg mb-6">
            The Group Post Automator is a simple, easy-to-use tool that allows you
            to automatically post a message to multiple Facebook groups at once.
          </p>
          <p className="text-lg">
            Just provide your group IDs, access token, and the content of your
            message, and the Group Post Automator will take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
