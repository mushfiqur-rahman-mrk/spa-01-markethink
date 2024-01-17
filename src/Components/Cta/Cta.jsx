import Container from "../Shared/Container";
import cta1 from "/src/assets/cta 1.png";
import cta2 from "/src/assets/cta 2.png";

const Cta = () => {
  return (
    <>
      <Container>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="600"
          data-aos-delay="400"
          className="relative p-20 bg-[url('/src/assets/bannerImg1.png')] "
        >
          <img
            src={cta1}
            className="absolute bottom-[-18px] right-[-65px] h-[300px] "
            alt=""
          />
          <img src={cta2} className="absolute top-0 left-0" alt="" />

          <h1 className="text-white text-[32px] font-medium leading-[55px] max-w-[660px]">
            Subscribe to get information, latest news and other interesting
            offers about{" "}
          </h1>
          <img src="/src/assets/logo1.png" className="py-5" alt="" />
          <div className="flex gap-8 max-w-[560px] mt-5 justify-center items-center ">
            <input
              type="text"
              id="first_name"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pl-5 font-semibold "
              placeholder="Your email"
              required
            />
            <button className="bg-gradient-to-t from-[#98AA28]  to-[#D6FF7E] text-white text-xl font-semibold px-[60px] py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cta;
