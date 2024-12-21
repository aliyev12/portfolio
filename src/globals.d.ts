interface ImportMetaEnv {
  readonly RECAPTCHA_SITE_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  interface Window {
    enableSubmit: () => void;
    disableSubmit: () => void;
    location: any;
    grecaptcha: any;
    scrollTo: (options?: ScrollToOptions) => void;
  }
}

export {};
