import React from "react";
import Image from "next/image";

export const Meta = () => {
 return (
  <div className="">
   <Image
    src="/Meta.jpg"
    alt={"portfolio"}
    width={1000}
    height={1000}
    className="w-full h-[25rem] sm:h-[40rem] object-center object-cover"
   />
   <div className="p-4 sm:px-44">
    <div className="space-y-12 sm:space-y-20 my-10 sm:my-28">
     <h1 className="text-3xl sm:text-5xl font-medium text-center">
      Meta Incident Management
     </h1>
     <div className="sm:my-32 space-y-16">
      <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
       <div className="space-y-3">
        <div className="">
         <h1>Tasks</h1>
         <p>UX, UI, Research, Product strategy, Process design</p>
        </div>
        <div className="">
         <h1>Team</h1>
         <p>1 Designer, 4 Engineers</p>
        </div>
        <div className="">
         <h1>Time</h1>
         <p>1 Year, 8 months</p>
        </div>
       </div>
       <div className="">
        I lead design and product initiatives building tools and introduced systems
        that helped software engineers record incidents, and efficiently collaborate
        to quickly mitigate system failures. <br />
        <br />
        Created designs and processes to successfully decreased the average time to
        report an incident from <strong>8 minutes to 3 minutes</strong>, with
        improved data capture quality. This meant Incident alerts were sent out
        quicker, leading to better mitigation.
       </div>
      </div>
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Context</div>
     <div className="">
      A SEV is a ticket created when a product incident occurs. It documents the
      issue, alerts relevant teams, and helps coordinate mitigation. After
      resolution, a review identifies the root cause, extracts learnings, and assigns
      follow-up tasks to prevent recurrence. <br />
      <br />
      The SEV review process faces significant inefficiencies, with{" "}
      <strong>72% of SEVs remaining unreviewed after 30 days</strong> , leading to
      missed learnings and recurring incidents.
      <br />
      <br />
      This issue stems from a <strong>
       fragmented and non-intuitive system
      </strong>{" "}
      that was developed without design input. Users must navigate multiple tools to
      complete a review, creating unnecessary complexity. As the company has grown,
      these inefficiencies have scaled, making it increasingly difficult for multiple
      large teams to review SEVs effectively.
      <br />
      <br />
      Given the company's reliance on SEVs, addressing these challenges became a
      critical priority.
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
     <div className="text-4xl font-medium">Goals</div>
     <div className="">
      <p>
       The objective was to improve incident reviews and reduce recurrence, with a
       target of decreasing the percentage of SEVs unreviewed after 30 days from{" "}
       <strong>72% to 30%.</strong> <br />
       <br />
       Develop a seamless end-to-end review tool that allows users to easily find
       SEVs needing review, assign them to the right meeting, and schedule regular
       review sessions efficiently. <br />
       <br />
       This would be achieved by:
      </p>
      <br />
      <ul className="list-disc">
       <li>
        <strong>Streamlining workflows</strong> into a single tool, SEV Review Series
       </li>
       <li>
        <strong>Automating processes</strong> and pre-populating data based on Series
        configurations
       </li>{" "}
       <strong>Integrating with existing tools</strong>
       <li> (email, calendar, team chat) for seamless communication</li>
      </ul>
     </div>
    </div>

    <div className="my-32">
     <div className="text-center">Our strategy</div>
     <div className="flex flex-col gap-4 sm:grid grid-cols-3 sm:gap-6 my-12">
      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Standardise data</strong>
       </p>
       <p>
        Improve and standardise data capture to reduce SEV creation TIME, and to
        allow for automation.{" "}
       </p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Automate processes</strong>
       </p>
       <p>
        Use data models to automate admin tasks across multiple teams to prepare for
        review meetings
       </p>
      </article>

      <article className="bg-white rounded-lg p-6 space-y-3">
       <p>
        <strong>Proactive reporting </strong>
       </p>
       <p>
        Foster a proactive culture of reporting incidences early without Increasing
        workload associated with SEVs.
       </p>
      </article>
     </div>
    </div>
   </div>
  </div>
 );
};
