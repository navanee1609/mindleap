import React from 'react';

const Work = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work</h2>

        {/* Paragraph */}
        <p className="text-gray-600 mb-12 text-center mx-auto max-w-2xl">
          We create innovative solutions to help individuals maintain their mental health, well-being, and emotional balance through modern technology. Our tools are designed to provide guidance, support, and mindfulness techniques.
        </p>

        {/* Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="relative bg-white text-black w-[250px] h-[200px] rounded-lg shadow-md hover:bg-heroBg hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center p-6"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-heroBg transition-all duration-300 ease-in-out">
                {num}
              </div>

              {/* Box Content */}
              {num === 1 && (
                <div>
                  <h3 className="text-lg font-medium">Mindfulness Tracker</h3>
                  <p className="text-sm mt-2">Track your mood and mindfulness habits to ensure a balanced mental state.</p>
                </div>
              )}
              {num === 2 && (
                <div>
                  <h3 className="text-lg font-medium">Meditation Sessions</h3>
                  <p className="text-sm mt-2">Engage in guided meditation sessions designed to reduce stress and increase clarity.</p>
                </div>
              )}
              {num === 3 && (
                <div>
                  <h3 className="text-lg font-medium">Therapeutic Conversations</h3>
                  <p className="text-sm mt-2">Connect with certified therapists for personalized mental health support through secure conversations.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
