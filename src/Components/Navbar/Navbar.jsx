import Container from "../Shared/Container";
import navLogo from "/src/assets/logo1.png";

const Navbar = () => {
  return (
    <>
      <Container>
        <nav className="flex justify-between items-center pt-5">
          <img src={navLogo} alt="" />
          <ul className="flex gap-12 text-white text-[16px]">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <button className="font-medium text-[16px] text-white px-8 py-4 rounded-full border-[#EDFF81] border-[1px] border-opacity-40 bg-white bg-opacity-10">Free Trial</button>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
