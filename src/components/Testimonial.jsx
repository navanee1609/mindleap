import React from 'react';

const Testimonial = () => {
  return (
    <section className="max-w-5xl mx-auto w-full px-10 my-5 bg-white dark:text-white">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">What Our Users Say</h2>
        <p className="text-2xl font-medium text-primary font-secondary">Real stories of transformation and growth</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        <div className="border p-7 rounded-xl  bg-heroBg drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">Life-Changing Support</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">"This app has truly transformed my mental health journey. The guided meditations and tools helped me find clarity and calm in my daily life."</p>
          </div>
          <div className="flex flex-col">
            <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Jane Cooper" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold">Jane Cooper</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">Teacher and Wellness Advocate</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl  bg-heroBg drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">Empowering Resources</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">"The app's resources on mindfulness and stress management have been a game-changer for me. I feel more equipped to handle daily challenges."</p>
          </div>
          <div className="flex flex-col">
            <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Emily Smith" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold">Emily Smith</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">Entrepreneur</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl bg-heroBg drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">A Calming Presence</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">"Whenever I feel overwhelmed, I turn to this app. Its calming exercises and insightful tips always help me regain balance."</p>
          </div>
          <div className="flex flex-col">
            <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Sarah Brown" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold">Sarah Brown</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">Freelance Designer</p>
          </div>
        </div>
        <div className="border p-7 rounded-xl  bg-heroBg drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
          <div className="flex flex-col gap-y-3.5">
            <p className="font-bold text-xl">Peace of Mind</p>
            <p className="font-medium text-slate-700/90 dark:text-gray-300">"This app has been a cornerstone of my self-care routine. It’s like having a personal coach in my pocket."</p>
          </div>
          <div className="flex flex-col">
            <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="James White" className="h-10 w-10" />
            <p className="pt-2 text-sm font-semibold">James White</p>
            <p className="text-sm font-medium text-slate-700/70 dark:text-gray-400">Life Coach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
