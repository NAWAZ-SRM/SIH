import React from 'react';

const Footer = () => {
  const socialLinks = ['Facebook', 'Instagram', 'Twitter'];

  return (
    <footer className="flex flex-col justify-center items-center self-stretch px-16 py-16 mt-72 w-full bg-slate-600 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="w-full max-w-[1219px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-5xl max-md:text-4xl">FREIGHT X</h2>
              <p className="mt-3.5 text-2xl tracking-wide leading-9 max-md:max-w-full">
                Streamlining global logistics with secure, transparent bidding—empowering businesses to move smarter and faster
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start text-2xl text-white max-md:mt-10">
                    <h3 className="text-2xl tracking-widest border border-white border-solid">Contact</h3>
                    <address className="self-stretch mt-6 not-italic">
                      Address: <br /> 123 Town Street, India
                    </address>
                    <p className="mt-6">
                      Phone: <br /> +00 123 456 789
                    </p>
                    <p className="mt-6">
                      Email: <br /> freightx@.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start text-2xl text-white max-md:mt-10">
                    <h3 className="self-stretch text-2xl tracking-widest border border-white border-solid">Social Media Links</h3>
                    {socialLinks.map((link, index) => (
                      <a href={`#${link.toLowerCase()}`} key={index} className="mt-6 hover:underline">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
