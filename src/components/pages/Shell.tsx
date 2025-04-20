import React from "react";
import Image from "next/image";

export const Shell = () => {
 return (
  <div className="">
   <Image
    src="/shell+EA.jpg"
    alt={"portfolio"}
    width={1000}
    height={1000}
    className="w-full h-[25rem] sm:h-[40rem] object-center object-cover"
   />
   <div className="p-4 sm:px-44">
    <div className="space-y-12 sm:space-y-20 my-10 sm:my-28">
     <h1 className="text-3xl sm:text-5xl font-medium text-center">
      Shell Energy Assistant
     </h1>
     <div className="grid grid-cols-[1.5fr_2fr]">
      <div className="space-y-3">
       <div className="">
        <h1>Tasks</h1>
        <p>UX, UI, Research, Design system, Product launch</p>
       </div>
       <div className="">
        <h1>Time</h1>
        <p>1 Year, 8 months</p>
       </div>
       <div className="">
        <h1>Time</h1>
        <p>Nov 2021 – March 2023</p>
       </div>
      </div>
      <div className="">
       Energy Assistant is a digital service exclusively for the German market, that
       assists consumers to understand potentials for cleaner & more efficient energy
       usage. Energy Assistant is part of Shell’s decarbonisation initiatives towards
       they Net Zero goal. <br />
       <br />
       Energy Assistant is an app that works with a meter reading hardware that plugs
       into the user’s electricity meter to surface consumption data. Using machine
       learning and algorithms the hardware is able to detect which household
       appliance is in use. This makes the data we surface actionable for the user to
       reduce consumption.
      </div>
     </div>
    </div>

    <div className="my-32 space-y-16">
     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
      <div className="text-4xl font-medium">Context</div>
      <div className="">
       As part of Shell’s target to Net Zero, they need to get users to consume
       energy in a more efficient way. At a time when energy prices are very high and
       rising, customers also have a great desire to reduce both bill costs and their
       environmental impact, and they want guidance on how to to do this. Currently
       consumers don’t have the data about how they use their energy at home, they
       need education and actionable insights on how to optimise their <br />
       They find it hard to understand what actions make a difference without data,
       and visibility on household electrical items. Customers are also interested in
       technologies that can help them reach their goals, however new technologies
       such as Solar Panels can be daunting, especially with such large upfront costs
      </div>
     </div>
     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
      <div className="text-4xl font-medium">Business opportunity</div>
      <div className="">
       Provide simplified data insights on household energy consumption daily,
       including granular data down to each household product. <br />
       <br />
       Set and track achievable efficiency goals. Customers consuming less energy is
       vital for Shell’s Net Zero goal. <br />
       <br />
       Challenges & rewards for energy efficiency improvements & sustainable
       behaviour. <br />
       <br />
       Virtual solar experience, a digital ‘try before you buy’ feature that uses
       data to simulate and show users how beneficial Solar panels could be for them.
       This can also result in making Solar panel sales
      </div>
     </div>
    </div>

    <div className="mx-auto text-center space-y-4 w-2/3">
     <p>User problem statement:</p>
     <h1 className="text-3xl font-medium">
      I want to use cleaner and more efficient energy for my home...but I am
      overwhelmed with where to start...and I am afraid to make big investments that
      I will regret later-on
     </h1>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-40">
     <div className="text-4xl font-medium">KPI’s</div>
     <div className="">
      Create a competitive advantage for Shell Energy Retail in the consumer market{" "}
      <br />
      <br />
      Increase customer retention through by creating value <br />
      <br /> Enable data-driven sales to other solutions within the Shell Portfolio
     </div>
    </div>

    <div className="my-40">
     <Image
      src="/Persona1.png"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="w-full h-full object-center object-cover"
     />
    </div>

    <div className="">
     <div className="text-4xl font-medium text-center">Workshops</div>
     <div className="flex flex-col gap-4 sm:grid grid-cols-2 my-20 sm:gap-2">
      <Image
       src="/Group+2838+1.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-cover"
      />
      <Image
       src="/Group+2837+1.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-cover"
      />
     </div>
    </div>

    <div className="space-y-28 my-20">
     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
      <div className="text-4xl font-medium">Product vision</div>
      <div className="space-y-6">
       <div className="space-y-2">
        <p>
         <strong>Energy insights</strong>
        </p>
        <p>
         To be able to provide real-time data for a user’s household, both on a total
         and an appliance-level. This is to provide trust transparency & control.
        </p>
       </div>
       <div className="space-y-2">
        <p>
         <strong>Try-before-buy services</strong>
        </p>
        <p>
         This is a simulation engine using real data that would give users a chance
         to try out products such as solar panels, helping to provide decision
         guidance before a big purchase.
        </p>
       </div>
       <div className="space-y-2">
        <p>
         <strong>Challenges & rewards</strong>
        </p>
        <p>
         A engagement feature that would motivate continued usage of the app, with
         potential rewards to recognise positive behaviour changes.
        </p>
       </div>
      </div>
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-28">
      <div className="text-4xl font-medium">Software & Hardware installation</div>
      <div className="space-y-6">
       <p>
        In order to gain customer electricity data they had to install a hardware
        device on their meter that linked to the app via bluetooth and wifi. This
        allowed us to convert the data into understandable information on the
        application. <br />
        <br />
        This setup was complex, and had many opportunities for error. The journey had
        to be user-friendly to reduce errors during installation. We designed a
        comprehensive user flow for the hardware setup to ensure smooth guidance for
        users throughout the process and surfaced simplified information to
        troubleshoot errors.
       </p>
      </div>
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-2 sm:gap-3 my-28">
      <Image
       src="/installation+1.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
      <Image
       src="/Screenshot.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
      <div className="text-4xl font-medium">Main features</div>
      <div className="space-y-6">
       <p>
        The app had 3 main features. Each feature went through a 12 week design
        process where we produced a design solution and tested a prototype with a
        small segment of customers. This allowed us to gain feedback and measure user
        behaviour against kpi’s. We followed a gradual release approach, introducing
        them to our users over time to ensure they were thoroughly tested and
        optimized before full implementation.
       </p>
      </div>
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-3 sm:gap-6">
      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Try-before-buy services</strong>
       </p>
       <p>
        Provides real-time data for a user’s household, both on a total and an
        appliance-level. This is to provide trust transparency & control.{" "}
       </p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Try-before-buy services</strong>
       </p>
       <p>
        Provides real-time data for a user’s household, both on a total and an
        appliance-level. This is to provide trust transparency & control.{" "}
       </p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Try-before-buy services</strong>
       </p>
       <p>
        Provides real-time data for a user’s household, both on a total and an
        appliance-level. This is to provide trust transparency & control.{" "}
       </p>
      </article>
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
      <div className="text-4xl font-medium">User testing</div>
      <div className="space-y-6">
       <p>
        We conducted weekly qualitative user tests, both moderated and unmoderated,
        to validate features and itterate designs based on feedback. <br />
        <br />
        From the tests we learnt that different users had distinct preferences
        regarding how they wished to view data, such as preferring to see their usage
        in kWh rather than Euros. Continuous testing allowed us to itterate and
        ensure that complex data was effectively communicated through simplified
        graphs and charts, with key insights highlighted.
       </p>
      </div>
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-2 sm:ap-3 my-28">
      <Image
       src="/Screenshot2.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
      <Image
       src="/Screenshot3.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
     </div>

     <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-32">
      <div className="text-4xl font-medium">Final designs</div>
      <div className="space-y-6">
       <p>
        We developed a new comprehensive design system for this new app, by working
        closely with the Shell Energy Marketing team and adaptimg the brand
        guidelines. This included crafting new bespoke components and establishing
        design principles which led to a streamlined development workflow. <br />
        <br />
        The app was launched as an alpha test to 50 Shell Energy Germany customers,
        yielding valuable feedback regarding its value proposition within the Shell
        energy portfolio along with learnings on usability and features.
       </p>
      </div>
     </div>

     <div className="my-24">
      <Image
       src="/Frame+2387i.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
     </div>
    </div>
   </div>
  </div>
 );
};
