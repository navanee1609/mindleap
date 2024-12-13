import React from 'react';

const Contact = () => {
  return (
    <section className="py-10 bg-heroBg sm:py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
          <div className="flex flex-col justify-between lg:py-5">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                Prioritize Your Mental Wellbeing Today!
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                Your mental health matters. Take the first step towards a more balanced and peaceful mind.
              </p>
            </div>

            <div className="hidden md:mt-auto md:block">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-6 h-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed text-white">
                  "Reaching out has never been easier. This platform helped me regain my peace of mind effortlessly."
                </p>
              </blockquote>

              <div className="flex items-center mt-8">
                <img
                  className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg"
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-semibold text-white">Alex Johnson</p>
                  <p className="mt-px text-sm text-gray-400">Mental Health Advocate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="overflow-hidden bg-white rounded-md">
              <div className="p-6 sm:p-10">
                <h3 className="text-3xl font-semibold text-black">Get Support Now</h3>
                <p className="mt-4 text-base text-gray-600">
                  Share your concerns with us. We're here to help.
                </p>

                <form action="#" method="POST" className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="text-base font-medium text-gray-900">
                        Your Name
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary focus:border-primary caret-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-base font-medium text-gray-900">
                        Email Address
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-primary focus:border-primary caret-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="brief" className="text-base font-medium text-gray-900">
                        How Can We Help?
                      </label>
                      <div className="mt-2.5 relative">
                        <textarea
                          name="brief"
                          id="brief"
                          placeholder="Tell us about your concerns or needs"
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-primary focus:border-primary caret-primary"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-primary-dark focus:bg-primary-dark"
                      >
                        Get Support
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
