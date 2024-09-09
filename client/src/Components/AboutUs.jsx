import React from 'react';

const AboutUs = () => {
  return (
    <section className="mt-96 w-full max-w-[1354px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-2.5 text-white max-md:mt-10 max-md:max-w-full">
            <h2 className="self-start text-8xl max-md:text-4xl">About Us</h2>
            <p className="mt-5 text-3xl tracking-wider max-md:max-w-full">
              Welcome to <span className="">Freight x</span>, a revolutionary digital marketplace designed to transform the logistics industry. Our platform bridges the gap between clients and freight forwarders, offering a secure, transparent, and competitive bidding environment for shipping needs. By streamlining the cargo bidding process, we eliminate inefficiencies and ensure fair competition, fostering trust and transparency across all transactions.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c5433f7b02693e548ddd1d60fd39b0a9b8bd75670092c03680df887d703e9f7?placeholderIfAbsent=true&apiKey=78e38421974242f189e269164ea93cd8" alt="Freight X marketplace illustration" className="object-contain grow w-full aspect-[1.25] rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-9 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
