# React UI Component Library

A collection of reusable React UI components.

## Usage

Run `npm i --save webpack_uilb_test` in your project root (that contains the `package.json` file) to get started.

## Theming

You need to insert the values for the _ThemeContext.Provider_. For now there is just 4 values:
-primaryColor: string (required)
-secundaryColor:string (required)
-CTAColor: string (required)
-lightBg?:string (optional)

## Context Theme

```javascript
import { ThemeContext } from 'webpack_uilb_test'
...
// Set or import theming values
const NewValues = {
  primaryColor: "red",
  secundaryColor: "#8b96ad",
  CTAColor:
    "linear-gradient(-147deg,rgba(244, 132, 39, 1) 2%,rgba(238, 62, 150, 1) 86%)",
  lightBg: "#e8f1ff",
};
// wrapp your app with the context
function App() {
  return (
    <>
      <ThemeContext.Provider value={NewValues}>
        <Layout />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
```

## ExampleComponent

```javascript
import { Button } from 'webpack_uilb_test'
...
// A simple button with just mandatory lable
// all other props take default values

<Button label="Can't click Me" size = 'md' isDisabled="true" btnType="personalized"/>

// A customised button with values provided for optional props
<Button
    label = 'Hello World'
    size = 'lg'
    btnType = 'primary'
    onClick = { onClickHandler }
/>
```
