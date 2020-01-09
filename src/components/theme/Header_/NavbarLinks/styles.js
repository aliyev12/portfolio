import styled from 'styled-components';
import { styles } from 'utils';

const desktopStyles = `
	@media (max-width: ${styles.breakpoints.md}) {
		display: none;
	}

	.menu-item {
		margin-right: 1rem;

		&:last-child {
				margin-right: unset;
		}
	}
`;

const mobileStyles = `
	padding: 3rem;
	display: flex;
	flex-direction: column;

	.menu-item {
		margin-bottom: 1rem;

		&:last-child {
			margin-bottom: unset;
		}
	}
`;

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ desktop }) => (desktop ? desktopStyles : mobileStyles)}
`;

export const MenuItem = styled.div`
  .nav-link {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    text-transform: capitalize;
    transition: ${styles.transition};
  }
`;

// background: ${({ theme }) => theme.body};
