import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <a
            href="https://developers.facebook.com/docs/graph-api/overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
          >
            <svg
              className="w-3 h-3 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Facebook API Token
          </a>
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
            Pan Poster
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Pan Poster is a tool that allows you to post a single message to
            multiple Facebook groups you're an admin of. To use Pan Poster, you
            will need to generate an access token with the necessary permissions
            from the Facebook API.
          </p>
          <a
            href="https://developers.facebook.com/docs/facebook-login/access-tokens/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get Access Token
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              How to get your Access Token? 
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              To use Pan Poster, you will need to generate an access token from
              the Facebook API. The access token will grant Pan Poster the
              necessary permissions to post on your behalf.
            </p>
            <a
              href="https://developers.facebook.com/docs/facebook-login/access-tokens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Learn more about Access Tokens
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              Admin of Facebook Groups
            </h2>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
              To post to multiple Facebook groups using Pan Poster, you need to
              be an admin of those groups. This is required to ensure that only
              authorized users can post on behalf of the group.
            </p>
            <a
              href="https://www.facebook.com/help/187316341316631/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
            >
              Learn more about Facebook Groups
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="container mx-auto">
<div className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
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
</div> */
}
