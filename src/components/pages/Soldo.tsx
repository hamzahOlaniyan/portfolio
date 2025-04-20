import React from "react";
import Image from "next/image";

export const Soldo = () => {
 return (
  <div className="">
   <Image
    src="/Solldo.jpg"
    alt={"portfolio"}
    width={1000}
    height={1000}
    className="w-full h-[25rem] sm:h-[40rem] object-center object-cover"
   />
   <div className="p-4 sm:px-44">
    <div className="space-y-12 sm:space-y-20 my-10 sm:my-28">
     <h1 className="text-3xl sm:text-5xl font-medium text-center">Soldo</h1>
     <div className="sm:my-32 space-y-16">
      <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
       <div className="space-y-3">
        <div className="">
         <h1>Tasks</h1>
         <p>UI, UX, Redesign, Design system</p>
        </div>
        <div className="">
         <h1>Time</h1>
         <p>June 2017 – Jan 2018</p>
        </div>
       </div>
       <div className="">
        I developed concepts and solutions to create innovative products for managing
        personal and business finances. With the smartest financial and payments
        technology Soldo seamlessly attaches receipts, tags and categorises all
        spending made using a virtual or plastic Mastercard. It also integrates to
        most accounting software. This can be managed on an intuitive admin
        dashboard, that works seamlessly with mobile apps for employees and personal
        use.
       </div>
      </div>
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Transaction Details</div>
     <div className="">
      From research we discovered that it slowed down the users' workflow and created
      friction when checking multiple transactions. With the old design the user
      would select a transaction from a list, the details would then be shown on a
      page that overlaid the list of transaction. We also wanted to create a way for
      users to report problems with a transaction in a scalable way. Currently
      customers phone customer services, which isn't efficient as the business is
      growing.{" "}
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_2fr] sm:gap-16 my-32">
     <div className="space-y-6">
      <div className="text-xl font-medium">Old design</div>
      <div className="">
       The old design created friction in user’s workflow due to the overlay design
       of the feature to view transaction details. Users were not able to quickly
       navigate between transaction due to the design and loading{" "}
      </div>
      <div className="text-xl font-medium">Goal</div>
      <p>
       Improve user journey and experience when reviewing transactions. <br />
       <br />
       Allow admin to move seamlessly between transactions <br />
       <br />
       Help users to solve and report problems regarding transactions
      </p>
     </div>
     <Image
      src="/ama.png"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full h-full object-center object-cover"
     />
    </div>

    <div className="space-y-12 my-24">
     <div className="text-2xl font-medium text-center">New design</div>
     <Image
      src="/SoldoTransactions3.jpg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full h-full object-center object-cover"
     />
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Card permissions</div>
     <div className="">
      Permissions are used to control and restrict spending activities. The current
      structure was built for then Soldo family product, how ever they are not
      refined enough for business use. The employee app can edit these permissions,
      similarly to the parent app, but it can also be controlled from the admin
      dashboard. This creates a conflict, the admin Dashboard and the employee app
      need to work cohesively, allowing the admin dashboard to be able to set
      controls.{" "}
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Goal</div>
     <div className="">
      To establish permission rules and create a visual language that best conveys to
      the app user the restrictions applied and whether they have capabilities to
      change the restriction.{" "}
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_2fr] sm:gap-16 my-32">
     <div className="space-y-6">
      <div className="text-xl font-medium">Old design</div>
      <div className="">
       The app designs mirrored the dashboard with no clear way to communicate
       different permission levels that have been applied by the admin.
      </div>
     </div>
     <Image
      src="/Soldo_Cardpermisions2i.jpg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full h-full object-center object-cover"
     />
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Design concepts</div>
     <div className="">
      Concept A is a combination of toggle buttons and text. The text conveys that
      the permission cannot be changed as it doesn’t appear to be clickable. <br />
      <br />
      Concept B uses mainly toggle buttons, the ones that cannot be changed are
      disabled.{" "}
     </div>
    </div>

    <Image
     src="/Frame+3466318.jpg"
     alt={"portfolio"}
     width={1000}
     height={1000}
     className="mx-auto w-1/2 h-full object-center object-cover"
    />

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">User testing</div>
     <div className="">
      We tested the Deisgns on 6 users, giving each users two scenarios. Our aim was
      to understand how users would make sense of the designs in relation to the
      spending scenarios they were given. By using the scenarios, we were able to see
      how this would be used in a real life context, the user is most likely to use
      this page when investigating the possible reasons a transaction didn't go
      through. This could be at the till in a shop, where they are holding up the
      queue. We will address the first point of information by using a banner,
      depending on the user's notification settings, it is possible that they may
      miss the notification. We need to make sure the feature works without the
      banner.
     </div>
    </div>

    <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] my-16 ">
     <div className="text-4xl font-medium">Design system</div>
     <div className="">
      We explored looking at how to convey to the user the state of the restriction
      and whether they had the ability to change it. For the first design we used a
      combination of text and the toggle icon. Our hypothesis is that by using text
      the user would realise that it is not possible to change the state. In the
      second design we showed this by making the element slightly transparent.{" "}
     </div>
    </div>

    <div className="mb-24">
     <Image
      src="/Soldo_Cardpermisions4.jpeg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full mb-3 h-full object-center object-cover"
     />
     <Image
      src="/Soldo_Cardpermisions4i.jpeg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full mb-3 h-full object-center object-cover"
     />
     <Image
      src="/Soldo_Cardpermisions4ii.jpeg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-full mb-3 h-full object-center object-cover"
     />
     <Image
      src="/Soldo_Cardpermisions5.jpg"
      alt={"portfolio"}
      width={1000}
      height={1000}
      className="mx-auto w-1/2 mb-3 h-full object-center object-cover"
     />
    </div>
   </div>
  </div>
 );
};
