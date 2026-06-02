/// <reference types="vite/client" />

interface Window {
  PaystackPop: {
    setup: (config: {
      key: string;
      email: string;
      amount: number;
      ref: string;
      onClose: () => void;
      onSuccess: (response: any) => void;
    }) => {
      openIframe: () => void;
    };
  };
}
