import {
  Btn,
  HeaderContainer,
  Logo,
  LogoContainer,
  MenuBtn,
  MenuContainer,
  SubHeaderContainer,
} from "./styled";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export const Header = () => {
  return (
    <HeaderContainer>
      <SubHeaderContainer>
        <LogoContainer>
          <Logo src="/logo.png" alt="#" />
        </LogoContainer>
        <MenuContainer>
          {menuItems.map((item) => (
            <MenuBtn key={item.label} href={item.href}>
              {item.label}
            </MenuBtn>
          ))}
        </MenuContainer>
        <Btn>Contact Us</Btn>
      </SubHeaderContainer>
    </HeaderContainer>
  );
};

export default Header;
