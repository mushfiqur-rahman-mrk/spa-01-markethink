import Navbar from "../Navbar/Navbar";
import Container from "../Shared/Container";
import bannerImg2 from "/src/assets/banner img 2.png";
import slack from '/src/assets/slack.png'
import amazon from '/src/assets/amazon.png'
import logitech from '/src/assets/logitech.png'
import google from '/src/assets/google.png'
import facebook from '/src/assets/facebook.png'

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/bannerImg1.png')] relative h-screen">
        <div>
          <Navbar />
        </div>
        <img
          className="absolute bottom-0 left-0"
          src={bannerImg2}
          alt=""
        />
        <Container>
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="600" className="flex flex-col justify-center relative items-center z-20 pt-20 ">
            <h3 className="text-white font-medium text-center text-3xl opacity-80 flex justify-center items-center gap-12">
              <hr className="bg-white w-[60px] h-[1px] opacity-40"></hr>
              The Best
              <hr className="bg-white w-[60px] h-[1px] opacity-40"></hr>
            </h3>
            <h1 className="text-white font-semibold  tracking-[3.6px] text-[90px] text-center relative w-[815px] mx-auto">
              <img
                className="absolute right-0 bottom-3"
                src="/src/assets/text underline.png"
                alt=""
              />
              Digital Marketing
            </h1>
            <p className="text-white opacity-60 leading-[40px] text-xl text-center max-w-[690px] mx-auto font-normal mt-6">
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
            </p>
            <button className="bg-gradient-to-t from-[#98AA28]  to-[#D6FF7E] text-white text-xl font-semibold px-[60px] py-[25px] rounded-full mt-16">
              Get Started
            </button>
          </div>
        </Container>
      </div>
      
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="600" className="flex bg-[#F6FBF9] py-[54px] justify-center items-center gap-28">
          <img src={slack} className="h-[32px]" alt="" />
          <img src={amazon} className="h-[32px]" alt="" />
          <img src={logitech} className="h-[32px]" alt="" />
          <img src={google} className="h-[32px]" alt="" />
          <img src={facebook} className="h-[32px]" alt="" />
        </div>
      
    </>
  );
};

export default Banner;
