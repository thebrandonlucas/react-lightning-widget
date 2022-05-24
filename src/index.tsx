import React, { DOMAttributes, useEffect } from "react";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ["lightning-widget"]: CustomElement<LightningWidgetProps>;
    }
  }
}

export type LightningWidgetProps = {
  name: string;
  to: string;

  // Style
  image: string;
  accent?: string;
  buttonText: string;
  backgroundImage?: string;

  // Debugging purposes only
  debug?: false;
  initialStep?: string;
};

const defaultProps = {
  name: "Brandon Lucas",
  image:
    "https://pbs.twimg.com/profile_images/1521937468563537925/UV3WAnF5_400x400.jpg",
  to: "bslucas@getalby.com",
  accent: "#20C997",
  buttonText: "Donate sats",
  debug: false,
  initialStep: "start"
};

export default function LightningWidget({
  name,
  image,
  to,
  accent,
  buttonText,
  debug,
  initialStep
}: LightningWidgetProps) {
  // retrieve widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.twentyuno.net/js/app.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <lightning-widget
      name={name}
      image={image}
      to={to}
      accent={accent}
      buttonText={buttonText}
      debug={debug}
      initialStep={initialStep}
    ></lightning-widget>
  );
}

LightningWidget.defaultProps = defaultProps;
