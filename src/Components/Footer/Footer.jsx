import Container from "../Shared/Container";

const Footer = () => {

  return (
    <>
      <Container>
        <footer className="grid grid-cols-12 py-10 mt-20">
        <div className="col-span-5">
          <img src="/src/assets/logo 2.png" alt="" />
          <p className="text-[#78847D] text-xl py-5 leading-8">Marketing is a company that focus on developing company’s strategy for increase digital marketing</p>
          <div className="flex gap-6">
            <img src="/src/assets/fb.png" alt="" />
            <img src="/src/assets/twitter.png" alt="" />
            <img src="/src/assets/instagram.png" alt="" />
          </div>
        </div>
        <div className="col-span-2 col-start-7">
          <p className="font-bold text-[#253D32] text-xl">Menu</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Home</a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Features </a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Pricing </a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Contact Us </a>
            </li>

            
          </ul>
        </div>

        <div className="col-span-2">
          <p className="font-bold text-[#253D32] text-xl">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75">Content Strategy</a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Content Development </a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75">Content Creation </a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Content Optimaization </a>
            </li>

            
          </ul>
        </div>
        <div className="col-span-2">
          <p className="font-bold text-[#253D32] text-xl">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
 

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Terms of Use</a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75"> Privacy Notice </a>
            </li>

            <li>
              <a href="#" className="text-[#78847D] text-[16px] transition hover:opacity-75">  </a>
            </li>

            
          </ul>
        </div>
        </footer>
        <div>
          <h1 className="text-[#78847D] text-center text-lg pt-8 pb-14 border-t-2 border-gray-300">&copy; Copyright Markethink. All right reserved</h1>
        </div>
      </Container>
    </>
  );
};

export default Footer;