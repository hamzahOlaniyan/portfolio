import * as motion from "motion/react-client";
import React from "react";
import Image from "next/image";

const page = () => {
   return (
      <div className="p-4 sm:px-28">
         <div className="sm:h-[75vh] sm:grid sm:grid-cols-2 sm:gap-24 sm:items-center sm:justify-center sm:p-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.8,
                  ease: "easeIn",
                  type: { type: "inertia" },
               }}
               className="w-full h-60 sm:h-96 bg-sky-500 mb-6 rounded-2xl"
            >
               <Image
                  src={"/profile_pic.jpeg"}
                  alt="profile"
                  width={1000}
                  height={1000}
                  className="w-full h-full sm:h-ful rounded-xl"
               />
            </motion.div>
            <motion.h2
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.8,
                  ease: "easeIn",
                  type: { type: "inertia" },
               }}
               className="text-3xl font-medium sm:text-4xl sm:leading-11"
            >
               I am a Product designer, educator & speaker, with a passion for building meaningful
               experiences and connecting with people
            </motion.h2>
         </div>

         <div className="my-12 sm:px-40">
            <div className="space-y-3 my-12">
               <h1 className="text-2xl font-semibold">🎨 Who I Am Hi</h1>
               <p>
                  A passionate UX/UI designer with a love for crafting intuitive and impactful
                  digital experiences. My work sits at the intersection of creativity and usability
                  — turning complex problems into elegant, human-centered solutions.
               </p>
            </div>
            <div className="space-y-3 my-12">
               <h1 className="text-2xl font-semibold">🛠 What I Do</h1>
               <p>
                  I specialize in designing seamless user interfaces that not only look beautiful
                  but also function flawlessly. From wireframes and user flows to high-fidelity
                  prototypes, I focus on delivering designs that solve real user needs while
                  aligning with business goals. <br />
                  <br />
                  Whether it's a web app, mobile experience, or brand system, I approach every
                  project with curiosity, empathy, and a detail-oriented mindset.
               </p>
            </div>
            <div className="space-y-3 my-12">
               <h1 className="text-2xl font-semibold">🧠 My Approach</h1>
               <ul className="list-disc left-3 relative">
                  <li>
                     <strong>Research first:</strong> I believe great design starts with
                     understanding. I dig deep into user behavior, needs, and pain points.
                  </li>
                  <li>
                     <strong>Iterate fast:</strong> I embrace feedback and rapid prototyping to
                     quickly evolve ideas into user-validated solutions.
                  </li>
                  <li>
                     <strong>Design with purpose:</strong> Every pixel has a reason — nothing is
                     accidental. I aim for clarity, simplicity, and consistency.
                  </li>
               </ul>
            </div>
            <div className="space-y-3 my-12">
               <h1 className="text-2xl font-semibold">🚀 Tools I Use</h1>
               <p>
                  Figma, Adobe XD, Sketch, Photoshop, Illustrator, InVision, Webflow, Notion, and a
                  growing list of design systems and prototyping tools.
               </p>
               <div className="flex flex-wrap gap-2 justify-center my-16">
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
                     className="w-24 h-24"
                  />
                  <img
                     src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
                     className="w-24 h-24"
                  />
               </div>
            </div>
            <div className="space-y-3 my-20">
               <h1 className="text-2xl font-bold text-center">🤝 Let’s Collaborate</h1>
               <p className="text-2xl sm:text-4xl font-bold text-center">
                  I’m always excited to work on new ideas and build meaningful products. Whether
                  you're a startup, agency, or team looking to elevate your digital experience —
                  let’s create something great together.
               </p>
            </div>
         </div>
      </div>
   );
};

export default page;
