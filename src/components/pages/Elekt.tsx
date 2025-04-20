import React from "react";
import Image from "next/image";

export const Elekt = () => {
 return (
  <div className="">
   <Image
    src="/Elekt11.jpg"
    alt={"portfolio"}
    width={1000}
    height={1000}
    className="w-full h-[25rem] sm:h-[40rem] object-center object-cover"
   />
   <div className="p-4 sm:px-44">
    <div className="space-y-12 sm:space-y-20 my-10 sm:my-28">
     <h1 className="text-3xl sm:text-5xl font-medium text-center">
      Elekt – Product Strategy
     </h1>
     <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[1.5fr_2fr]">
      <div className="space-y-3">
       <div className="">
        <h1>Tasks</h1>
        <p>Strategy, Growth, Monetisation, Design system,</p>
       </div>
       <div className="">
        <h1>Time</h1>
        <p>6 Months</p>
       </div>
      </div>
      <div className="">
       Working in collaboration with the Head of Product to create a vision and
       strategy that will result in subscription and revenue growth. <br />
       <br /> Using rapid prototyping and growth design techniques to validate
       features that meet user needs and foster growth. <br />
       <br />
       Creating a strong onboarding and learning journey to help our 150k active
       users unlock value in the app and increase subscription by over 500%.
      </div>
     </div>
    </div>

    <div className="my-32 space-y-16">
     <div className="flex flex-col gap-3 sm:grid grid-cols-[1.5fr_2fr] ">
      <div className="text-4xl font-medium">Context</div>
      <div className="">
       Elekt is a Norwegian platform that helps customers in the Scandinavian region
       master their electricity usage. At a time when electricity prices are high,
       Elekt aims to help users understand their usage data, pricing structures and
       provide insights and practical steps to reducing energy costs. <br />
       <br />
       In Scandinavian countries it is common practice to check electricity spot
       prices for the day, as you would the weather everyday. However users do not
       know how to use this data to practically reduce their bill costs, especially
       when raw spot prices are not a true representation of what they are paying to
       their energy provider.{" "}
      </div>
     </div>
     <div className="flex flex-col gap-3 sm:grid grid-cols-[1.5fr_2fr]">
      <div className="text-4xl font-medium">Business opportunity</div>
      <div className="">
       Elekt had amassed an impressive <strong>150k active users</strong> a month.
       However they only had 15 active subscriptions. The main goal was to understand
       user needs in order to increase subscriptions by providing value.
      </div>
     </div>
    </div>

    <div className="mx-auto text-center space-y-4 sm:w-2/3">
     <p>Business Vision</p>
     <h1 className="text-3xl font-medium">
      “Our vision is to transform our extensive insights and over a million downloads
      into a valuable product that empowers users and is worth paying for.”
     </h1>
    </div>

    <div className="my-32">
     <div className="text-center">Our strategy</div>
     <div className="flex flex-col sm:gap-3 sm:grid grid-cols-3 gap-6 my-12">
      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Simplify data</strong>
       </p>
       <p>Make energy usage and data easy to understand for users.</p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Insights</strong>
       </p>
       <p>Provide simple actionable steps to help users lower their costs.</p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Feedback </strong>
       </p>
       <p>
        Surface data that shows users how their usage affects their final bill.{" "}
       </p>
      </article>
     </div>
    </div>

    <div className="flex flex-col sm:gap-3 sm:grid grid-cols-[1fr_2fr] gap-24 my-32">
     <div className="space-y-6">
      <p>Research & understanding</p>
      <div className="text-4xl font-medium">UX Audit</div>
      <p>
       The current app did not have an appealing design. This is important as good
       design that user friendly, creates trust with users, which is important for
       monetisation. Too much raw data is being surfaced, which is complex to
       understand for a user. The data lacks insights, making it difficult for users
       to take actionable steps to lower energy costs. <br />
       The screens look very similar, even though they are communicating different
       datapoints The current app did not have an appealing design and lacks cohesive
       branding. This was detrimental as good design creates trust with users, which
       is important for monetisation.
      </p>
     </div>
     <div className="space-y-6">
      <Image
       src="/elekt1.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-[33rem] object-center object-cover"
      />
     </div>
    </div>

    <div className="">
     <div className="text-center">Data we have access to</div>
     <div className="flex flex-col sm:gap-3 sm:grid grid-cols-4 gap-6 my-12">
      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Spot prices</strong>
       </p>
       <p>Graph showing the market price of electricity each hour.</p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Energy consumption</strong>
       </p>
       <p>Live costs and kWh of electricity consumed by the user.</p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Grid insight </strong>
       </p>
       <p>
        Break down of how electricity is charged based on day & night tariff,
        capacity and taxes.
       </p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Bill buster </strong>
       </p>
       <p>
        Electricity deal checker, to see how your deal compares to others on the
        market.
       </p>
      </article>
     </div>
    </div>

    <div className="mx-auto text-center space-y-6 sm:w-2/3 my-32">
     <p>Our users</p>
     <h1 className="text-3xl font-medium">
      “ I check the spot prices everyday, but don’t know what to do with that
      information ”
     </h1>
    </div>

    <Image
     src="/Personas.png"
     alt={"portfolio"}
     width={1000}
     height={1000}
     className="w-full h-full object-center object-contain my-20"
    />

    <div className="flex flex-col sm:gap-3 sm:grid grid-cols-[1fr_2fr] gap-14 my-32">
     <div className="space-y-6">
      <p className="text-xl font-medium">Understanding the purpose of the data</p>
      <p>
       I conducted workshops with domain experts to understand the purpose of each
       data type. <br />
       <br />
       Why do we need so many data points?
       <br />
       <br />
       How do the different data points work together/ affect each other?
       <br />
       <br />
       How does usage affect price?
       <br />
       <br />
       We listed out informations goals for the data that was being surfaced and
       aligned them to customer needs.
      </p>
     </div>
     <div className="space-y-6">
      <Image
       src="/elekt3.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="w-full h-full object-center object-contain"
      />
     </div>
    </div>

    <article className="bg-white rounded-lg p-8 space-y-3 mx-auto sm:w-1/2">
     <p className="text-xl font-medium">How might we…</p>
     <p>
      Use energy and price data, to <strong>provide value</strong> to users through
      actionable insights and <strong>increase subscription</strong> .
     </p>
    </article>

    <div className="my-32 space-y-16">
     <div className="flex flex-col gap-3 sm:grid grid-cols-[1.5fr_2fr]">
      <div className="text-4xl font-medium">Hypothesis </div>
      <div className="">
       We believe that we can <strong>increase subscriptions</strong> by providing
       customers actionable insights about spot prices that are guaranteed to reduce
       their electricity bills. We plan to do this by: <br />
       <br />
       Simplifying the data we surface to help users understand how electricity is
       charged.
       <br />
       <br />
       Live feedback of their usage and how it will affect their final bill.
       <br />
       <br />
       Providing actionable steps that users can measure to see their progress.
       <br />
       <br />
       Redesigning features and the app, to better surface data and improve brand
       identity, customer trust and navigation around the app.
       <br />
       <br />
       Introducing free trials so users can experience the value of the improved
       features, and be enticed to subscribe.
      </div>
     </div>
    </div>

    <div className="mb-32 space-y-16">
     <div className="flex flex-col gap-3 sm:grid grid-cols-[1.5fr_2fr]">
      <div className="text-4xl font-medium">KPI’s</div>
      <div className="">
       Increase the number of users who grant access to consumption data <br />
       <br />
       Increase number of users granting access to invoice <br />
       <br />
       Increase number of users who start free trials <br />
       <br />
       Increase number of users who convert from trial to subscription
      </div>
     </div>
    </div>

    <div className="">
     <p className="text-xl font-medium text-center">Roadmap of key initiatives</p>
     <Image
      src="/roadmap.png"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="h-full object-center object-contain my-16 w-3/4 mx-auto"
     />
    </div>

    <div className="my-32 space-y-16">
     <div className="flex flex-col gap-3 sm:grid grid-cols-[1.5fr_2fr]">
      <div className="text-4xl font-medium">Validation testing </div>
      <div className="">
       Each feature went through a 2 week design process where we produced a design
       solution, created a live prototype and released it live to a small segment of
       customers. This allowed us to gain feedback and measure user behaviour against
       kpi’s. We also tested some features with users to gain qualitative feedback
      </div>
     </div>
    </div>

    <Image
     src="/ee.png"
     alt={"portfolio"}
     width={1000}
     height={1000}
     className="h-full object-center object-contain my-24 w-2/4 mx-auto"
    />

    <Image
     src="/elekt4.png"
     alt={"portfolio"}
     width={1000}
     height={1000}
     className="h-full object-center object-contain my-16 w-full mx-auto"
    />

    <div className="my-32 space-y-16">
     <div className="flex flex-col sm:gap-3 sm:grid grid-cols-[1.5fr_2fr] gap-24">
      <div className="space-y-6">
       <h1 className="text-4xl font-medium">Design system</h1>
       <div className="">
        The aim was to modernise the visual aesthetic of the app, while keeping the
        vibrant electric colours. After conducting a thorough audit of the existing
        components, working with the marketing team, we established design
        principles, and patterns that aligned to the brand. The resulting system
        prioritised visual harmony, and data that was easy to read, a strong brand
        identity and lead to a streamlined development workflow.
       </div>
      </div>
      <Image
       src="/Design+system2.png"
       alt={"portfolio"}
       width={1000}
       height={1000}
       className="h-full object-center object-cover w-full"
      />
     </div>
    </div>

    <div className="my-16 space-y-16">
     <div className="flex flex-col sm:gap-3 sm:grid grid-cols-[1.5fr_2fr] gap-24">
      <h1 className="text-4xl font-medium">Over 200+ new subscribers</h1>
      <p>
       With each feature, we measured the live test results against KPI’s over a
       period of 2 weeks. We then decided if the feature was a success. Over a period
       of 3 months, with a new feature launching every few weeks, we managed to
       achieve 200+ active subscriptions.
      </p>
     </div>
    </div>
   </div>
   <Image
    src="/asaacds.png"
    alt={"portfolio"}
    width={1000}
    height={1000}
    className="h-full object-center object-cover w-full my-16"
   />
  </div>
 );
};
