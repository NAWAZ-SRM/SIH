import React from 'react';

const OurAim = () => {
  return (
    <section className="mt-52 w-full max-w-[1354px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdc50c5ffb1fe934f960d6b77f5e957844675e58b2dfeaca9c9351083a07c98e?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Freight X platform visualization" className="object-contain grow w-full aspect-[1.35] rounded-[30px_0px_0px_30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="grow px-8 py-5 w-full text-3xl text-white bg-cyan-800 rounded-none shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
            <h2 className="text-8xl text-white">OUR AIM</h2>
            <p>
              With advanced features like real-time bidding, escrow-secured payments, and verification mechanisms, our platform ensures seamless and fraud-free operations, empowering clients to select the best offers while enabling freight forwarders to compete on a level playing field. Join us in optimizing logistics, reducing costs, and enhancing the efficiency of global trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAim;
