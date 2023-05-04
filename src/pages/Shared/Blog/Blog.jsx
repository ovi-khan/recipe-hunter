import React from "react";

const Blog = () => {
  return (
    <div className="mx-20 my-20">
      <h2 className="text-2xl text-red-600 font-semibold mb-2">
        1. Tell us the differences between uncontrolled and controlled
        components?
      </h2>
      <p className="text-green-900 mb-5">
        managed internally by the component itself. The component handles its
        own state, and updates to the component's state are not reflected
        outside of the component. For example, a form input element such as is
        an uncontrolled component because its value is managed by the DOM, not
        by React. When a user types into the input field, the DOM updates its
        own value property, and the React component does not have access to this
        value until it is submitted.
      </p>
      <h2 className="text-2xl text-red-600 font-semibold mb-2">
        2. How to validate React props using PropTypes?
      </h2>
      <p className="text-green-900 mb-5">
        React provides a utility called PropTypes for validating the types of
        props passed to a component. It helps to ensure that the correct types
        of data are being passed as props, which can catch bugs early in the
        development process. To use PropTypes, you need to import it from the
        prop-types package. When a prop fails validation, React will print a
        console warning with a detailed message about the error. This can help
        you to catch and fix errors early in the development process.
      </p>
      <h2 className="text-2xl text-red-600 font-semibold mb-2">
        3. Tell us the difference between nodejs and express js?
      </h2>
      <p className="text-green-900 mb-5">
        Node.js is a server-side JavaScript runtime that allows developers to
        build server-side applications in JavaScript. It is built on the Chrome
        V8 engine and provides a platform for building scalable,
        high-performance applications. Express.js, on the other hand, is a
        popular web application framework for Node.js that simplifies the
        development of web applications by providing a set of robust features
        and tools. Express.js is built on top of Node.js and provides a
        higher-level abstraction for building web applications, making it easier
        to build web servers, APIs, and web applications.
      </p>
      <h2 className="text-2xl text-red-600 font-semibold mb-2">
        4. What is a custom hook, and why will you create a custom hook?
      </h2>
      <p className="text-green-900 mb-5">
        A custom hook can be created for any logic that needs to be reused, such
        as fetching data from an API, handling form input, managing state, and
        more. By creating a custom hook, developers can abstract away complex
        logic and reuse it in multiple components, reducing the amount of code
        they need to write and maintain. Custom hooks can also improve the
        readability and organization of code by separating concerns and making
        it easier to understand what each component is responsible for. They can
        also make testing easier by allowing developers to test logic in
        isolation.
      </p>
    </div>
  );
};

export default Blog;
