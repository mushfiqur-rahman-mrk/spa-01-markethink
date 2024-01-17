import icon1 from '/src/assets/icon 1.png'
import icon2 from '/src/assets/icon 2.png'
import icon3 from '/src/assets/icon 3.png'
import icon4 from '/src/assets/icon 4.png'

const DigitalMarketing = () => {
  return (
    <>
      <div className=' grid grid-cols-2 gap-20 my-24'>
        <div>
          <h1 className='text-[#253D32] text-[42px] font-bold leading-[65px]'>We’re Strategic Digital Marketing Agency</h1>
          <p className='text-[#78847D] text-[22px] leading-[40px] my-[30px] max-w-[424px]'>
            We’ve created a full-stack structure for our working workflow
            processe, were from the funny the century initial all made, have
            spare to negatives{" "}
          </p>
          <a href="#" className='text-[#A3B938] font-medium text-2xl underline'>See More</a>
        </div>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <img src={icon1} alt="" />
            <h1 className='text-[#253D32] font-medium text-[24px] mt-10'>Content Strategy</h1>
            <p className='text-[#78847D] text-lg pt-6'>
              All our content marketing service packages include a custom
              content strategy
            </p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <h1 className='text-[#253D32] font-medium text-[22px] mt-10'>Content Development</h1>
            <p className='text-[#78847D] text-lg pt-6'>
              We create some content calendar for your company’s must-share
              content
            </p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <h1 className='text-[#253D32] font-medium text-[24px] mt-10'>Content Creation</h1>
            <p className='text-[#78847D] text-lg pt-6'>
              Experienced in copywriting and marketing team begins creating
              content
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h1 className='text-[#253D32] font-medium text-[24px] mt-10'>Content Optimization</h1>
            <p className='text-[#78847D] text-lg pt-6'>Your content marketing management services also include SEO</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketing;
