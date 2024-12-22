import sanitizeHtml from "sanitize-html";
import type { IDynamicVal } from "./constants";

// Format date to a string
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter
export function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sanitizeInput(input: string): string {
  // Use sanitize-html to remove unwanted tags or attributes
  return sanitizeHtml(input, {
    allowedTags: [], // No HTML tags allowed
    allowedAttributes: {}, // No attributes allowed
  }).trim(); // Trim whitespace
}

export function placeDynamicValues(str: string, dynamicVals: IDynamicVal[]) {
  let result = str;

  dynamicVals.forEach(({ placeholder, value }) => {
    result = result.replaceAll(`{${placeholder}}`, value);
  });

  return result;
}

export function getCurrentFormattedDate() {
  const date = new Date();

  // Format the date in "Month Day, Year" format
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedDate = dateFormatter.format(date);

  // Format the time in "HH:mm" format
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "America/New_York", // Adjust this to your preferred timezone
  });
  const formattedTime = timeFormatter.format(date);

  // Add timezone abbreviation (ET for Eastern Time, for example)
  const timezone = "ET"; // Adjust to match your preferred timezone abbreviation

  return `${formattedDate} ${formattedTime} ${timezone}`;
}
