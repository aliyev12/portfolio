import { atom } from "nanostores";

export const pageAlert = atom<{
  show: boolean;
  type?: "info" | "success" | "error";
  message?: string;
}>({ show: false, type: "info", message: "" });
