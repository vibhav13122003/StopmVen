import React, { useState, useEffect, useRef } from "react";
import { cn } from "../utils/helpers";

 const WowFactorSection = () => {
   const [simulationState, setSimulationState] = useState("normal");
   const sectionRef = useRef(null);

   useEffect(() => {
     const handleScroll = () => {
       if (!sectionRef.current) return;
       const { top, height } = sectionRef.current.getBoundingClientRect();
       const scrollPercent = (window.innerHeight - top) / height;

       if (scrollPercent > 0.65) setSimulationState("details");
       else if (scrollPercent > 0.3) setSimulationState("alert");
       else setSimulationState("normal");
     };

     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const athletes = [
     { name: "CHLOE M.", status: "Normal" },
     { name: "JACOB S.", status: "Critical Alert" },
     { name: "LIAM P.", status: "Normal" },
     { name: "SOFIA R.", status: "Normal" },
   ];
   const isAlert = simulationState === "alert" || simulationState === "details";
   const showDetails = simulationState === "details";

   return (
     <section
       id='simulation'
       ref={sectionRef}
       className='bg-black text-white py-20 md:py-40 min-h-screen'
     >
       <div className='container mx-auto px-6 sticky top-20'>
         <div className='text-center mb-16'>
           <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
             See the Alert. Not the Emergency.
           </h2>
           <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
             This is how Guardian provides clarity in the most critical moments.
             Scroll to see it in action.
           </p>
         </div>
         <div className='bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-8 max-w-6xl mx-auto'>
           <div className='grid lg:grid-cols-2 gap-8 items-center'>
             <div
               className='bg-gray-800/80 rounded-lg p-4 space-y-3 transition-opacity duration-500'
               style={{ opacity: showDetails ? 0.3 : 1 }}
             >
               <h3 className='text-lg font-bold px-2 mb-2 text-white'>
                 TEAM ROSTER - LIVE VIEW
               </h3>
               {athletes.map((athlete, index) => {
                 const isJacob = athlete.name === "JACOB S.";
                 const isAlerting = isJacob && isAlert;
                 return (
                   <div
                     key={index}
                     className={cn(
                       "flex items-center justify-between p-3 rounded-md transition-all duration-500",
                       isAlerting
                         ? "bg-[#B00020]/50 ring-2 ring-[#B00020]"
                         : "bg-gray-700/70",
                       isAlert && !isJacob ? "opacity-40" : "opacity-100"
                     )}
                   >
                     <span className='font-medium text-white'>
                       {athlete.name}
                     </span>
                     <div className='flex items-center gap-2'>
                       <span
                         className={cn(
                           "text-sm font-bold",
                           isAlerting ? "text-[#FFD700]" : "text-green-400"
                         )}
                       >
                         {isAlerting ? "CRITICAL" : "NORMAL"}
                       </span>
                       <div
                         className={cn(
                           "w-3 h-3 rounded-full",
                           isAlerting
                             ? "bg-[#FFD700] animate-pulse"
                             : "bg-green-400"
                         )}
                       ></div>
                     </div>
                   </div>
                 );
               })}
             </div>
             <div
               className={cn(
                 "transition-all duration-700 ease-in-out transform",
                 showDetails
                   ? "opacity-100 translate-x-0"
                   : "opacity-0 -translate-x-10"
               )}
             >
               <div className='bg-gray-800/80 rounded-lg p-6'>
                 <div className='text-center border-b border-gray-600 pb-4 mb-4'>
                   <h3 className='text-2xl font-bold text-[#B00020] animate-pulse'>
                     CRITICAL ALERT: JACOB S.
                   </h3>
                   <p className='text-gray-300'>
                     High-Risk Arrhythmia Detected
                   </p>
                 </div>
                 <div className='grid grid-cols-2 gap-4'>
                   <div>
                     <p className='text-sm text-gray-400'>Location:</p>
                     <p className='font-bold text-lg text-white'>
                       45m mark, East Sideline
                     </p>
                     <img
                       src='https://placehold.co/400x300/111827/4B5563?text=Field+Map+View'
                       alt="Map showing athlete's location"
                       className='mt-2 rounded-md border-2 border-[#B00020]/50'
                       onError={(e) => {
                         e.target.onerror = null;
                         e.target.src =
                           "https://placehold.co/400x300/111827/FFFFFF?text=Map+Error";
                       }}
                     />
                   </div>
                   <div className='bg-gray-700/70 p-4 rounded-md'>
                     <p className='text-sm text-gray-400 mb-2'>Next Actions:</p>
                     <button className='w-full bg-[#A10D23] text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-[#C8102E] transition-colors'>
                       Show CPR Guide
                     </button>
                     <button className='w-full mt-2 bg-gray-600 text-white font-bold py-3 px-4 rounded-lg text-center hover:bg-gray-500 transition-colors'>
                       Contact EMS
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };

export default WowFactorSection;
