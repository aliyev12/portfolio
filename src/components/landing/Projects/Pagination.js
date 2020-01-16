import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowLeft from '@material-ui/icons/ArrowBackIosRounded';
import ArrowRight from '@material-ui/icons/ArrowForwardIosRounded';
import styled from 'styled-components';
import { styles } from 'utils';

const PaginationWrapper = styled.nav`
  display: ${({ numPages }) => (numPages > 1 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  .button-group {
    .page-btn,
    .prev-page,
    .next-page {
      border-color: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.text};

      &:disabled {
        background-color: ${({ theme }) => theme.colors.lightGrey};
        color: ${({ theme }) => theme.text};
      }
    }

    .prev-page {
    }

    .page-btn {
      &.active {
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
      }
    }

    .next-page {
    }
  }
`;

const Pagination = ({ numPages, currentPage, handlePageClick }) => {
  return (
    <PaginationWrapper numPages={numPages}>
      <ButtonGroup
        className="button-group"
        size="small"
        aria-label="small outlined button group"
      >
        {Array.from({ length: numPages + 2 }).map((_, i) => {
          if (i === 0) {
            return (
              <Button
                key={i}
                title={`Go to previous page`}
                disabled={currentPage === 0}
                className="prev-page"
                onClick={() =>
                  handlePageClick(
                    currentPage > 0 ? currentPage - 1 : currentPage
                  )
                }
              >
                <span className="visually-hidden">Previous Page</span>
                <ArrowLeft />
              </Button>
            );
          } else if (i === numPages + 1) {
            return (
              <Button
                key={i}
                title={`Go to next page`}
                disabled={currentPage === numPages - 1}
                className="next-page"
                onClick={() =>
                  handlePageClick(
                    currentPage < numPages - 1 ? currentPage + 1 : currentPage
                  )
                }
              >
                <span className="visually-hidden">Next Page</span>
                <ArrowRight />
              </Button>
            );
          } else {
            return (
              <Button
                key={i}
                title={`Go to page ${i}`}
                onClick={() => currentPage !== i - 1 && handlePageClick(i - 1)}
                disabled={currentPage === i - 1}
                className={`page-btn ${currentPage === i - 1 ? 'active' : ''}`}
              >
                {console.log('i = ', i)}
                {i}
              </Button>
            );
          }
        })}
      </ButtonGroup>
    </PaginationWrapper>
  );
};

export default Pagination;
