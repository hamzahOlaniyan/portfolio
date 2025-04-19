import React from 'react'
import Image from 'next/image'


export const Accuport = () => {
  return (
    <div>
       <Image src='/shell.jpg' alt={'portfolio'} width={1000} height={1000} className='w-full h-[25rem] sm:h-[40rem] object-center object-cover'/>
       <div className='p-4 sm:px-44'>
            <div className="space-y-12 sm:space-y-20 my-10 sm:my-28">
                <h1 className='text-3xl sm:text-5xl font-medium text-center'>Shell Accuport</h1>
                <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
                    <div className="space-y-3">
                        <div className="">
                            <h1>Tasks</h1>
                            <p>AI Design, Data, Research, Beta Product launch</p>
                        </div>
                        <div className="">
                            <h1>Time</h1>
                            <p>Aug 2018 – March 2020</p>
                        </div>
                    </div>
                    <div className="">Accuport is a digital platform helps shipping companies efficiently manage lubricants demand and optimise fleet performance for lubricants purchasing and consumption using AI. <br /><br />
                    Accuport began as an email prompting system powered by AI, where shipping companies received an email reminder that included products to place and order in time when a vessel was approaching a good port. This proved to be well received by customers, but they wanted the ability to customise order prompts, as well as a holistic overview of the vessels.</div>
                </div>
            </div>

            <div className="my-32 space-y-16">
                  <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
                    <div className="text-4xl font-medium">Challenge</div>
                    <div className="">Vessels engine lubricants are replenished infrequently in a year. This can often result in last minute and emergency orders, resulting in an expensive purchase and stressful experience. Some vessel types do not have a fixed voyage schedule, it is unpredictable due to trading markets. This makes it difficult to plan lubricant lifts, and making a stop outside of the commercial schedule costs the shipping companies a lot of money. <br /><br />
                    Users found the email promps useful but the process was still reactive.</div>
                  </div>
                  <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
                    <div className="text-4xl font-medium">Business opportunity</div>
                    <div className="">Provide promps for customers to ensure that orders are made on time, and to avoid customers going to competitors. Give users an interface to have a holistic view of reserve stocks on vessels. This would give them the ability to be proactive, and forecast future purchaces, rather than reacting to stock in need of replenishing. <br />
                    This collection of data Shell to be able to fulfil orders efficiently and to use data to better forecast stock at ports, which ensures enough stock is available at busy ports and reduces waste at less busy ports. </div>
                  </div>
            </div>

            <div className="my-32">
                <div className="text-center">Our strategy</div>
                  <div className="flex flex-col gap-4 sm:grid grid-cols-3 sm:gap-6 my-12">
                    <article className='bg-white rounded-lg p-6 space-y-3'>
                      <p><strong>Provide visibility</strong></p>
                      <p>Provide simulated data using AI of stock levels on board. Giving users a holistic view of vessel needs.</p>
                    </article>

                    <article className='bg-white rounded-lg p-6 space-y-3'>
                      <p><strong>AI Predictions</strong></p>
                      <p>Tools to help users forecast and plan purchases, especially for vessels with unpredictable schedules.</p>
                    </article>

                    <article className='bg-white rounded-lg p-6 space-y-3'>
                      <p><strong>Insights and feedback</strong></p>
                      <p>Using data to understand purchasing patterns and provide insights to be more efficient.</p>
                    </article>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_2fr] sm:gap-24 my-32">
                <div className="space-y-6">
                  <h1 className="text-4xl font-medium">The procurement process</h1>
                  <p>
                  I conducted research to understand current procurement workflows, how the AI order prompt solved pains, and areas where we could improve our product. <br /><br />
                  The main issue is a <strong>lack of visibility</strong> of stock for both Shell and clients. This causes a lot of delays within the process. Procurement operative relies on staff onboard ships to update them on stock reserves, and ask for orders, resulting in reactive workflows.  <br /><br />
                  There is also no live data of oil stock at ports, orders have to be checked manually before being accepted for clients to know if their order will be fulfilled.
                  </p>
                </div>
                <div className="space-y-6">
                  <Image src='/accu1.png' alt={'portfolio'} width={1000} height={1000} className='w-full h-full object-center object-cover' />
                </div>
              </div>

              <div className="mx-auto text-center space-y-6 my-32">
                    <p>Our users</p>
                    <Image src='/accuser.jpg' alt={'portfolio'} width={1000} height={1000} className='w-full h-full object-center object-cover mx-auto'/>
              </div>

              <div className="mx-auto text-center space-y-6 my-32">
                    <p className="text-4xl font-medium">Ideation Workshops</p>
                    <Image src='/accuidea.png' alt={'portfolio'} width={1000} height={1000} className='w-full h-full object-center object-cover'/>
              </div>

              <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_2fr] sm:gap-24 my-32">
                  <h1 className="text-4xl font-medium">AI Order Suggestions</h1>
                  <div className="">
                      <p>A vessel receives an automate Order Suggestion when there is oil that has low stock and is approaching a good port to lift. This was calculated based on previous purchase volumes, nautical miles travelled, and type of oil.
                      </p>
                       <br />
                      <p>The goal of the ML engines is to answer: </p>
                       <br />
                      <ul className='list-disc left-10 relative'>
                        <li>When to generate a prompt  </li>
                        <li>For what port – preferred only </li>
                        <li>What products to include </li>
                        <li>What quantities</li>
                      </ul>
                      <br />
                    <p>The user then able to review and edit the products and quantities, then submit an order quote. The user then uses their normal channels to place and confirm the order.</p>
                  </div>
              </div>

              <Image src='/Mask+group.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-3/4 h-full object-center object-cover'/>

              <div className="my-32 space-y-16">
                  <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr] ">
                    <div className="text-4xl font-medium">User testing</div>
                    <div className="">We worked with 5 shipping management companies who used the product within their procurement workflow during this co-creation process. We were able to gather data on how they used the product, and see the impact on their procurement process. <br /><br />
                    We conducted regular qualitative user tests with the customers, and often visited their offices. This allowed us to observe them using Accuport and get a deeper understanding of their working environment. </div>
                  </div>
                  <div className="flex flex-col gap-4 sm:grid grid-cols-[1.5fr_2fr]">
                    <div className="text-4xl font-medium">Lift insights</div>
                    <div className="">Using the data we have on previous orders, Lift Insights allows customers to understand their current lifting behaviour, and what affects it.
                    Insights on fleets historic behaviour helps customers to make informed lifting decisions in the future, and track them against performance benchmarks. <br /><br />
                    Using our research we highlighted data that users find most important when conducting analysis:<br /><br />
                    Type of products are ordered by the vessels, volumes and order frequency<br /><br />
                    Ports the vessels place orders – Preferred ports provide better value for money, and easier delivery services<br /><br />
                    When the vessels place rushed orders and how frequently – Rushed orders can have expensive delivery, and can highlight vessels that were in an emergency <br /><br />
                    Products frequently in rushed orders – This highlights products that are often forgotten in orders.</div>
                  </div>
             </div>

             <Image src='/Mask+group2.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-3/4 h-full object-center object-cover'/>

             <div className="grid grid-cols-2 my-12">
                  <Image src='/Mask+group11ii.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-full h-full object-center object-cover'/>
                  <Image src='/Mask+group22.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-full h-full object-center object-cover'/>
                  <Image src='/Mask+group33.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-full h-full object-center object-cover'/>
                  <Image src='/Mask+group33a.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-full h-full object-center object-cover'/>
             </div>

             <div className="flex flex-col gap-4 sm:grid grid-cols-[1fr_2fr] sms:gap-24 my-32">
                  <h1 className="text-4xl font-medium">Outcome</h1>
                  <div className="">
                      <p>By having access to this data, companies can work towards more efficient lifting behaviour:</p>
                       <br />
                      <ul className='list-disc left-10 relative'>
                        <li>More deliveries at a selection of agreed preferred ports</li>
                        <li>Minimise small and rushed orders</li>
                        <li>Minimise the overall number of deliveries</li>
                      </ul>
                      <br />
                    <p>This was not just a result of surfacing data, but also transforming the company working processed for Procurement operatives to take the lead in ensuring vessels are well stocked, instead of reacting to order requirements from the vessels. This also resulted in elevating work load for workers on the vessels.</p>
                  </div>
              </div>

              <Image src='/Hero-Ac.png' alt={'portfolio'} width={1000} height={1000} className='mx-auto w-full h-full object-center object-cover my-32'/>
              

       </div>
    </div>
  )
}
