import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import LightningWidget from "../.";

const App = () => {
  return (
    <div>
      <LightningWidget
        name="René Aaron"
        accent="#20c997"
        to="reneaaron@getalby.com"
        image="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
