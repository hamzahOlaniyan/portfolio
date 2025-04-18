import Link from "next/link";
import Work from "../components/Work/Work";
import * as motion from "motion/react-client"

const data = [
    {title:'Strategic Design Expertise',content:'Conducting product discovery, to help define and execute a design strategy that supports your business goals. Tackling complex challenges, and delivering seamless user experiences.'},
    {title:'Product Validation ',content:'Validating design ideas to ensure they resonates with your target audience. Using data driven rapid prototyping to  reduce the risk in launching ideas.'},
    {title:'AI, Growth and Data Design ',content:'Whether you want to uncover how AI can add value to your product, or grow your customer base, it all starts with data. Leverage your data to supercharge your goals'},
    {title:'End To End Design',content:'For 0-1 Products and growing teams. From research and ideation to execution and iteration, building scalable design systems for faster and more effectively  delivery.'}]

export default function Home() {
  return (
      <div className="px-4 sm:px-28">
          <div className="mb-14 sm:grid grid-cols-[2fr_1.5fr] sm:py-24 sm:gap-24">
            <div className="">
              <div className="my-3">
                <motion.h2
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                         duration: .8,
                         ease:'easeIn',
                         type:{type:'inertia'}
                     }}
                className="text-3xl sm:text-[44px] font-medium">Hi! I'm ?????????, pronounced chilli 🌶 Your strategic design and growth partner.</motion.h2>
              </div>
              <div className="space-y-3">
                <p>I use design strategies to solve complex challenges, and drive business growth.  With over 9 years of creating digital solutions, I can help you create an exceptional experience for your users that increase revenue and reduce operational costs. </p>
                <p>Whether you are a founding or growing team, I help lean teams to reduce uncertainty and avoid costly financial mistakes, by ensuring market fit with product ideas.</p>
                <p>I specialise in product validation, data driven rapid prototyping, and design strategy alignment. </p>
              </div>
            </div>

            <div className="my-4">
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{
                     duration: .8,
                     ease:'easeIn',
                     type:{type:'inertia'}
                 }}
                className="w-full h-48 sm:h-full bg-sky-500 rounded-xl"></motion.div>
            </div>
          </div>

          <div className="">
            <h2 className="text-3xl sm:text-4xl font-medium capitalize">How i can help you</h2>
            <div className="my-4 flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-24 sm:my-24 sm:gap-y-12">
              {data.map((item:{title:string,content:string}, idx:number)=>(
                <motion.article
                    initial={{ opacity: 0, y: 40,scale:.90 }}
                    whileInView={{ opacity: 1, y: 0,scale:1 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    key={idx} className="space-y-4 bg-neutral-50 rounded-xl border border-neutral-200 p-4 sm:p-8">
                  <h1 className="text-lg sm:text-2xl font-medium">{item.title}</h1>
                  <p>{item.content}</p>
                </motion.article>
              ))}
            </div>
          </div>
          <div className="my-20 flex flex-col">
            <Work perView={2}/>
            <Link href={'/work'} className=" block capitalize text-xl font-medium text-blue-200 hover:bg-neutral-700 bg-neutral-800 p-3 rounded-md self-center">view more work</Link>
          </div>
      </div>
  );
}
