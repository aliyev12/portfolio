import { useStore } from "@nanostores/react";
import { pageAlert } from "@/store";
import React from "react";
import { AlertCircle, CheckCircle, Info } from "react-feather";

export const Alert = () => {
  const [alertContent, setAlertContent] = React.useState({
    show: false,
    type: "",
    message: "",
  });
  const $pageAlert = useStore(pageAlert);

  const alertRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if ($pageAlert.show) {
      if (alertRef?.current) {
        alertRef.current.style.maxHeight = "100px";
      }
      setAlertContent({
        show: $pageAlert.show,
        type: $pageAlert.type || "info",
        message: $pageAlert.message || "",
      });
      setTimeout(() => {
        if (alertRef?.current) {
          alertRef.current.style.maxHeight = "0px";
        }
        setAlertContent({
          show: false,
          type: "",
          message: "",
        });
      }, 5000);
    } else {
      if (alertRef?.current) {
        alertRef.current.style.maxHeight = "0px";
      }
      setTimeout(() => {
        setAlertContent({
          show: $pageAlert.show,
          type: "",
          message: "",
        });
      }, 300);
    }
  }, [$pageAlert]);

  //   if (!$pageAlert.show) return null;

  function getIcon() {
    if ($pageAlert.type === "info") {
      return <Info />;
    } else if ($pageAlert.type === "error") {
      return <AlertCircle />;
    } else if ($pageAlert.type === "success") {
      return <CheckCircle />;
    } else {
      return <Info />;
    }
  }

  function getColorClasses() {
    const alertTypeClasses = {
      info: "text-blue-800 border-blue-300  bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800",
      success:
        "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800",
      error:
        "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
    };

    return alertTypeClasses[$pageAlert.type || "info"];
  }
  console.log("alertContent = ", alertContent);
  return (
    <div className="space-y-5">
      <section
        ref={alertRef}
        style={{
          maxHeight: 0,
          transition: "max-height 300ms ease-in-out",
        }}
        className={`px-6 ${
          alertContent.show ? "flex" : "hidden"
        } overflow-hidden w-full md:max-w-screen-md container mx-auto max-w-screen-xl flex justify-center items-center my-8`}
      >
        <div
          className={`w-full flex items-center p-4 mb-4 text-sm rounded-lg border ${getColorClasses()}`}
          role="alert"
        >
          {getIcon()}
          <span className="sr-only">${alertContent.type}</span>
          <p className="ml-3 text-foreground">{alertContent.message}</p>
        </div>
      </section>
    </div>
  );
};
