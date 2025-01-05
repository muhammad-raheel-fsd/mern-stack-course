import Logo from "../../../assets/icons/Logo";
import Anchor from "../Anchor/Index";
import Button from "../Button/Index";

const NavigationMenu = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-10 items-center">
        <Anchor href="#homepage">Home</Anchor>
        <Anchor href="#find-a-home">Find a home</Anchor>
        <Anchor href="#our-mission">Our Mission</Anchor>
        <Anchor href="#testimonials">Testimonials</Anchor>
        <Anchor href="#why-choose-us">Why choose us</Anchor>
        <Button>Work with us</Button>
      </div>
    </div>
  );
};

export default NavigationMenu;
