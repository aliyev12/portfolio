import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: transparent;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 4;	
	`}
`;

export const NavbarWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`;

export const SidebarWrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: #fff;
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active }) =>
    active &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;