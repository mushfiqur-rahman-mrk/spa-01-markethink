import socialImg from '/src/assets/social.png'


const SocialReach = () => {

  return (
    <>
       <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-delay="300" className="grid grid-cols-2 gap-20 my-24">
        <div><img src={socialImg} alt="" /></div>
        <div>
            <h1 className="text-[#253D32] font-bold leading-[65px] text-[42px]">Increase Business on Social Media Reach</h1>
            <p className="text-[#78847D] text-[22px]">Using our network of industry influencers, we help promote your content</p>
            <button className="bg-gradient-to-t from-[#98AA28]  to-[#D6FF7E] text-white text-xl font-semibold px-[60px] py-[25px] rounded-full mt-12">
              Get Started
            </button>
        </div>
       </div>
    </>
  );
};

export default SocialReach;