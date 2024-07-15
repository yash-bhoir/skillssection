import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

// Define the prop types for MenuOverlay
interface MenuOverlayProps {
  open: boolean;
}

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: transparent;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white; // Set the logo text color to white
`;

const MenuButton = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  color: white; // Set the button icon color to white
`;

const MenuOverlay = styled.div<MenuOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const MenuItems = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 10px 0;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>Logo</Logo>
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
      </NavbarContainer>
      <MenuOverlay open={menuOpen}>
        <MenuItems>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuItems>
      </MenuOverlay>
    </>
  );
};

export default Navbar;
