import type { CollectionEntry } from "astro:content";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Send } from "react-feather";
import { pageAlert } from "@/store";
import { Spinner } from "@/components/common/Spinner";
import type { ZodIssue } from "zod";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type TField = "name" | "email" | "message";

interface IServerResponse {
  success: boolean;
  error?: string;
  details?: ZodIssue[];
}

const ContactForm: React.FC<{
  recaptchaSiteKey: string;
  validation: CollectionEntry<"validation">;
}> = ({ recaptchaSiteKey, validation }) => {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, touchedFields, dirtyFields },
  } = useForm<Inputs>({ mode: "onChange" });

  // Enable submit button dynamically
  useEffect(() => {
    const recaptchaResponse = window.grecaptcha?.getResponse();
    setIsSubmitDisabled(!(isValid && !!recaptchaResponse));
  }, [isValid]);

  useEffect(() => {
    // Load the reCAPTCHA script dynamically
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  window.enableSubmit = () => {
    const recaptchaResponse = window.grecaptcha.getResponse();
    setIsSubmitDisabled(!recaptchaResponse || !isValid);
  };

  // Disable the submit button when reCAPTCHA expires
  window.disableSubmit = () => {
    setIsSubmitDisabled(true);
  };

  const handleServerErrors = (result: IServerResponse) => {
    console.log("Error submitting form:", result.error);

    pageAlert.set({
      show: true,
      type: "error",
      message: validation.data.alert.sendError,
    });
    if (
      result.error &&
      result.details &&
      Array.isArray(result.details) &&
      result.details.length > 0
    ) {
      window.grecaptcha.reset();
      result.details.forEach((detail: ZodIssue) => {
        detail.path.forEach((field) => {
          setError(field as TField, {
            type: "server",
            message: detail.message,
          });
        });
      });
    }
  };

  const handleFormSubmit: SubmitHandler<Inputs> = async ({
    name,
    email,
    message,
  }) => {
    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      pageAlert.set({
        show: true,
        type: "error",
        message: validation.data.alert.recaptcha.required,
      });
      return;
    }

    if (!isValid) return;

    try {
      setIsLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message, recaptchaResponse }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      setIsLoading(false);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);

      if (result.success) {
        setFormSubmitted(true);
        window.grecaptcha.reset();
      } else {
        handleServerErrors(result);
      }
    } catch (error) {
      console.log("Error submitting form:", error);

      setIsLoading(false);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);

      reset();
      window.grecaptcha.reset();

      pageAlert.set({
        show: true,
        type: "error",
        message: validation.data.alert.sendError,
      });
    }
  };

  if (formSubmitted) {
    pageAlert.set({
      show: true,
      type: "success",
      message: validation.data.alert.sendSuccess,
    });
    setTimeout(() => {
      window.location.assign("/");
    }, 10000);
    return (
      <div className="flex flex-col items-center">
        <h2 className="mb-4">{validation.data.thanks.title}</h2>
        <p>{validation.data.thanks.body}</p>
      </div>
    );
  }
  const val = (field: TField) => {
    const data = { status: "", class: "invisible", msg: "" };
    const successfulFields = Object.keys(dirtyFields).filter(
      (field) => !(field in errors)
    );

    if (touchedFields[field] && errors[field]) {
      data.status = "error";
      data.class = "visible";
      data.msg = errors[field].message || "";
    } else if (successfulFields.includes(field)) {
      data.status = "success";
    } else {
      data.status = "";
      data.class = "invisible";
      data.msg = "";
    }

    return data;
  };

  return (
    <>
      <h1 className="mb-8">Get in Touch</h1>
      <div className="w-full md:max-w-md">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="label"
              data-status={val("name").status}
            >
              Name
            </label>
            <input
              data-status={val("name").status}
              type="text"
              id="name"
              className="text-input"
              required
              {...register("name", {
                required: validation.data.name.required,
                minLength: {
                  value: 2,
                  message: validation.data.name.minLength,
                },
                maxLength: {
                  value: 100,
                  message: validation.data.name.maxLength,
                },
              })}
            />
            <p
              className={`${
                val("name").class
              } mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`}
            >
              {val("name").msg}
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="label"
              data-status={val("email").status}
            >
              Email
            </label>
            <input
              data-status={val("email").status}
              type="email"
              id="email"
              className="text-input"
              required
              {...register("email", {
                required: validation.data.email.required,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: validation.data.email.pattern,
                },
                maxLength: {
                  value: 200,
                  message: validation.data.email.maxLength,
                },
              })}
            />
            <p
              className={`${
                val("email").class
              } mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`}
            >
              {val("email").msg}
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="message"
              className="label"
              data-status={val("message").status}
            >
              Message
            </label>
            <textarea
              data-status={val("message").status}
              className="textarea"
              id="message"
              placeholder="Hi there!"
              required
              rows={4}
              minLength={1}
              maxLength={500}
              {...register("message", {
                required: validation.data.message.required,
                minLength: {
                  value: 20,
                  message: validation.data.message.minLength,
                },
                maxLength: {
                  value: 500,
                  message: validation.data.message.maxLength,
                },
              })}
            ></textarea>
            <p
              className={`${
                val("message").class
              } mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`}
            >
              {val("message").msg}
            </p>
          </div>
          <div
            className={`mb-6 w-[304px] h-[78px] recaptcha-wrapper ${
              isValid ? "" : "recaptcha-disabled"
            }`}
          >
            <div
              className="g-recaptcha"
              data-sitekey={recaptchaSiteKey}
              data-callback="enableSubmit"
              data-expired-callback="disableSubmit"
              data-theme="dark"
            ></div>
          </div>

          <button className="button" type="submit" disabled={isSubmitDisabled}>
            <span className="mr-3">Send{isLoading && "ing"}</span>
            {isLoading ? <Spinner /> : <Send size={16} />}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
