import React from 'react';
import { withFormik, FastField, ErrorMessage } from 'formik';
import Recaptcha from 'react-google-recaptcha';
import * as Yup from 'yup';
import { StyledForm } from './styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Alert from '@material-ui/lab/Alert';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ContactForm = props => {
  const {
    setFieldValue,
    isSubmitting,
    values,
    errors,
    touched,
    isValid,
    submitCount,
  } = props;
  const [displaySuccessMsg, setDisplaySuccessMsg] = React.useState(false);
  const [theme, setTheme] = React.useState();

  React.useEffect(() => {
    if (submitCount > 0) {
      setDisplaySuccessMsg(true);
      setTimeout(() => {
        setDisplaySuccessMsg(false);
      }, 20000);
    }
  }, [submitCount]);

  // This component is only for extracting theme object from styled-components and using its props
  const ThemeExtractor = styled.span`
    ${({ theme }) => theme && setTheme(theme)}
  `;

  return (
    <StyledForm
      name="abdul-aliyev-portfolio"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
    >
      {displaySuccessMsg === true ? (
        <Alert severity="success" id="success-message">
          Thank you! Your message has been successfully sent, I will get back to
          you ASAP!
        </Alert>
      ) : null}

      <FormControl component="fieldset">
        <FastField
          label="Full Name"
          name="name"
          aria-label="name"
          type="text"
          fullWidth
          variant="outlined"
          className="contact-form-input"
          maxLength="100"
          component={TextField}
          error={touched.name && errors.name}
        />
        <FastField
          label="Email"
          name="email"
          aria-label="email"
          type="email"
          fullWidth
          variant="outlined"
          className="contact-form-input"
          maxLength="200"
          component={TextField}
          error={touched.email && errors.email}
        />
        <FastField
          label="Message"
          name="message"
          aria-label="message"
          rows="4"
          multiline
          fullWidth
          variant="outlined"
          className="contact-form-input"
          maxLength="2000"
          component={TextField}
          error={touched.message && errors.message}
        />
        {/* All that ThemeExtractor does is extracting theme object from styled-components global theme */}
        <ThemeExtractor />
        {values.name && values.email && values.message && (
          <FastField
            component={Recaptcha}
            sitekey={process.env.GATSBY_SITE_KEY}
            name="recaptcha"
            className="contact-form-input google-captcha"
            size="compact"
            theme={theme && theme.name ? theme.name : 'dark'}
            onChange={value => setFieldValue('recaptcha', value)}
          />
        )}
      </FormControl>
      {values.success && (
        <FormHelperText>
          Thank you! Your message has been successfully sent, I will get back to
          you ASAP!
        </FormHelperText>
      )}
      <div className="submit-btn-container">
        <Button
          type="submit"
          disabled={isSubmitting || !isValid}
          variant="outlined"
        >
          Send
        </Button>
      </div>
    </StyledForm>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
    recaptcha: '',
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      name: Yup.string()
        .max(100, 'Sorry, your name can only be up to 100 characters long.')
        .required('Please, provide your name.'),
      email: Yup.string()
        .email(`Oops, email doesn't seem to be in a right format`)
        .max(200, 'Sorry, your email can only be up to 200 characters long.')
        .required('Please, specify your email address.'),
      message: Yup.string()
        .max(
          2000,
          'Sorry, your message can only be up to 2000 characters long.'
        )
        .required('Please, provide a message.'),
      recaptcha: Yup.string().required(
        'Sorry, something went wrong. Please reload the page and try again.'
      ),
    }),
  handleSubmit: async (
    { name, email, message, recaptcha },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const encode = data => {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&');
      };
      await fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'abdul-aliyev-portfolio',
          name,
          email,
          message,
          'g-recaptcha-response': recaptcha,
        }),
      });
      await setSubmitting(false);
      await setFieldValue('success', true);
      const successMessageElement = document.getElementById('success-message');
      if (successMessageElement) {
        successMessageElement.scrollIntoView({ behavior: 'smooth' });
      }
      await resetForm();
      // setTimeout(() => resetForm(), 3000);
    } catch (err) {
      setSubmitting(false);
      setFieldValue('success', false);
      alert(
        'Sorry, something went wrong. Please reload the page and try again.'
      ); // eslint-disable-line
    }
  },
})(ContactForm);
