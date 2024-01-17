import Container from "../Shared/Container";
import seo from "/src/assets/seo.png";
import digital from '/src/assets/digital marketing.png'
import copy from '/src/assets/copy right.png'
import show from '/src/assets/Show.png'

const Blog = () => {
  return (
    <>
      <Container>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="600" data-aos-delay="400" className="grid grid-cols-2 items-end mb-12">
          <h1 className="text-[#253D32] text-[42px] font-bold leading-[65px]">Read More Articles From Our Blog</h1>
          <ul className="flex gap-16 text-center justify-center ">
            <li className="text-xl text-[#253D32] underline underline-offset-8">Content Writing</li>
            <li className="text-xl text-[#808371]">Content Marketing</li>
          </ul>
        </div>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="800" data-aos-delay="500" className="grid grid-cols-2 gap-12 mb-28">
          <div>
            <img src={seo} alt="" />
            <p className="text-[#808371] uppercase text-lg mt-6 mb-2">
              august 17,2021
            </p>
            <h1 className="text-xl font-medium leading-[36px] text-[#253D32]">
              10 Reasons to invest in SEO copywriting services
            </h1>
            <button className="text-[#98AA28] text-xl font-medium px-12 py-5 border-[1px] border-[#A3B938] rounded-full mt-10">
              Read More
            </button>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div>
                <img src={digital} alt="" />
                <p className="text-[#808371] text-[14px] pt-5 pb-1">AUGUST 17, 2021</p>
                <h1 className="text-[#253D32] font-medium text-xl leading-8
                ">How to get hired at a top Digital Marketing</h1>
                <p className="text-[#808371] text-lg pt-4">Agency life. We’ve all seen the photos posted on social media  the cool...</p>
                <div className="rounded-full p-5 border-[1px] border-[#A3B938] mt-10 w-1/4">
                    <img src={show}  alt="" />
                </div>
            </div>
            <div>
                <img src={copy} alt="" />
                <p className="text-[#808371] text-[14px] pt-5 pb-1">AUGUST 17, 2021</p>
                <h1 className="text-[#253D32] font-medium text-xl leading-8
                ">How to get hired at a top Digital Marketing</h1>
                <p className="text-[#808371] text-lg pt-4">Agency life. We’ve all seen the photos posted on social media  the cool...</p>
                <div className="rounded-full p-5 border-[1px] border-[#A3B938] mt-10 w-1/4">
                    <img src={show}  alt="" />
                </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
