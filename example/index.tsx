import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import LightningWidget from "../.";

const App = () => {
  return (
    <div>
      <LightningWidget
        name={"Brandon Lucas"}
        image={
          "https://pbs.twimg.com/profile_images/1521937468563537925/UV3WAnF5_400x400.jpg"
        }
        to={"bslucas@getalby.com"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
