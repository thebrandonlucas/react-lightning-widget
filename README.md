# React Lightning Widget ⚡

A beautiful widget for accepting Bitcoin in React projects. This is a "Reactified" version of [@reneaaron's awesome web component widget](https://github.com/reneaaron/lightning-widget). Check out his [project website](https://widgets.twentyuno.net/) or that [project repo](https://github.com/reneaaron/lightning-widget) for more details.

## Quick start

`npm install react-lightning-widget`

Usage:

```jsx
import LightningWidget from "react-lightning-widget";

function App() {
  return (
    <div className="App">
      <LightningWidget
        name="René Aaron"
        accent="#20c997"
        to="reneaaron@getalby.com"
        image="https://secure.gravatar.com/avatar/07e22939e7672b38c56615068c4c715f?size=200"
      />
    </div>
  );
}

export default App;
```

See [the project page](https://github.com/reneaaron/lightning-widget#configuration-options) for all props