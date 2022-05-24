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
  name: "René Aaron",
  image:
    "https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200",
  to: "reneaaron@getalby.com",
  accent: "#20c997",
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
