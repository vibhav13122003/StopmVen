import React from "react";

const RiskSection = () => {
  return (
    <section className='bg-gray-900 text-white py-20 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight leading-tight'>
              The Difference Between <span className='text-cyan-400'>70%</span>{" "}
              and <span className='text-red-500'>10%</span>.
            </h2>
            <p className='mt-6 text-lg text-gray-400 max-w-xl mx-auto md:mx-0'>
              Sudden Cardiac Arrest strikes 1–2 in every 100,000 young athletes.
              Every second of response time is critical. Waiting for a sign is
              too late.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-8 justify-center'>
            <div className='text-center p-6 border border-gray-700 rounded-xl bg-gray-800'>
              <p className='text-7xl font-extrabold text-cyan-400'>~70%</p>
              <p className='mt-2 text-gray-300'>
                Survival rate with <br />
                immediate CPR/AED.
              </p>
            </div>
            <div className='text-center p-6 border border-gray-700 rounded-xl bg-gray-800'>
              <p className='text-7xl font-extrabold text-red-500'>~10%</p>
              <p className='mt-2 text-gray-300'>
                Survival rate without <br />
                rapid intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskSection;
