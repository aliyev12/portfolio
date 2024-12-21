---
name:
  required: Name is required
  minLength: Name has to be at least 2 characters long
  maxLength: Name has to be less than 100 characters
email:
  required: Email address is required
  pattern: Invalid email address
  maxLength: Email has to be less than 64 characters long
message:
  required: Message is required
  minLength: Message has to be at least 20 characters long
  maxLength: Message has to be less than 500 characters
recaptcha:
  required: ReCAPTCHA token is required
  maxLength: ReCAPTCHA token has to be less than 5000 characters
alert:
  recaptcha:
    required: Please complete the CAPTCHA before submitting.
  sendError: Failed to send the message. Please try again.
  sendSuccess: Your message has been sent successfully!
thanks:
  title: Thank you for reaching out!
  body: I'll get back to you as soon as I can.
slug: contact-form
---
