import styled from 'styled-components';
import { Form } from 'formik';
import { styles } from 'utils';

export const StyledForm = styled(Form)`
  border: 2px solid ${styles.colors.mainBlue};
  padding: 3rem;
  border-radius: 5px;

  #contact-message {
    line-height: 1.5;
  }

  .MuiAlert-root {
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.colors.successGreen};
    .MuiAlert-message {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.text};
    }
  }

  fieldset {
    width: 100%;

    .contact-form-input {
      margin-bottom: 2rem;

      label,
      input,
      textarea {
        color: ${({ theme }) => theme.text};
        font-size: 1.5rem;
      }

      &.google-captcha {
        display: flex;
        justify-content: center;
      }

    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.inputBorders.main};
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.inputBorders.hover};
    }

    .MuiFormLabel-root.Mui-focused {
      color: ${styles.colors.mainBlue};
      /* color: ${({ theme }) => theme.text}; */
    }

    .MuiFormHelperText-root {
      font-size: 1.3rem;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${styles.colors.mainBlue};
    }
  }

  .submit-btn-container {
    button {
      color: ${({ theme }) => theme.text};
      font-size: 1.5rem;
      border: 1px solid ${({ theme }) => theme.inputBorders.main};
    }
  }
`;

// PrivateNotchedOutline-root-224
//  MuiOutlinedInput-notchedOutline
