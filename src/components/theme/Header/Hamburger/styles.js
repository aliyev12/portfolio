import styled from 'styled-components';
import { styles } from 'utils';

export const HamburgerWrapper = styled.div`
  z-index: 5;
  top: 2rem;
  right: 2rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: 960px) {
    display: block;
  }

  ${({ sidebar }) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 35%;
			}
		
			@media (max-width: 600px) {
				right: 65%;
			}
	`}
`;

export const Bar = styled.div`
	background-color: ${styles.colors.mainBlack};
	transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91),
	opacity 500ms,
	box-shadow 250ms,
	background-color 500ms;
	width: 3rem;
    height: 0.5rem;
    border-radius: 0.2rem;
    margin-bottom: 0.5rem;

	/* @media (max-width: 600px){
		width: 1.6rem;
	} */

	${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(13px) rotate(-135deg);
	`}

	${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-7px) rotate(-45deg);
	`}
`;
