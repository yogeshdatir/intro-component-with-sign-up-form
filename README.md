# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
    - [`yarn build`](#yarn-build)
    - [`yarn eject`](#yarn-eject)
  - [Learn More](#learn-more)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Desktop Screenshot](./src/images/Desktop%20SS.png)

![Desktop Error Screenshot](./src/images/Desktop%20Error%20SS.png)

![Mobile Screenshot](./src/images/Mobile%20SS.png)

### Links

- [Solution](https://github.com/yogeshdatir/intro-component-with-sign-up-form)
- [Live Site](https://chakra-form.netlify.app/)

## My process

### Built with

- Flexbox
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - for type checking
- [Chakra-UI](https://chakra-ui.com/) - component library

### What I learned

Used this project to learn about Chakra-UI. Also, used this opportunity to create a strongly typed components.

My Learnings from this project are:

1. How change global styles in Chakra-UI
2. How to extend themes in Chakra-UI
3. Types for different React Events
4. Error: When accessing an object property with a variable value, type assertion is needed to be used.

```jsx
// Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IFormErrorState'. ts(7053)
// code responsible:
delete newState[name];

// correct code:
delete newState[name as keyof IFormErrorState];
```

[This is the resource](https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression#:~:text=The%20error%20%22Element%20implicitly%20has,one%20of%20the%20object's%20keys.) for this error resolution which talks about the error in details.

### Continued development

I will be consistently working on ways to make code with Chakra-UI and Typescript better. One thing that I will be researching is how can reuse code with Chakra-UI.

### Useful resources

- [Global Styles with Chakra-UI](https://chakra-ui.com/docs/styled-system/global-styles) - This helped me for to adjust global styles.
- [Responsive styled with Chakra-UI](https://chakra-ui.com/docs/styled-system/responsive-styles) - This is a helpful part of documentation which helped me to add responsiveness to the components with ease.

## Author

- [My Github](https://github.com/yogeshdatir)
- Frontend Mentor - [@YogeshD

---

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
