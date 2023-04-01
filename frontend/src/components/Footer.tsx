import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 rounded-lg shadow text-white m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-center">
          <a
            href="https://github.com/Dexeraz"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://i.ibb.co/QFX6TC3/pngwing-com-2.png"
              className="h-8 mr-3"
              alt="Github Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Github
            </span>
          </a>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2023{" "}
          <a href="https://github.com/Dexeraz" className="hover:underline">
            Michał Bilik
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
