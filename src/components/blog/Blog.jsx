import React from "react";
import {
  Container,
  Main,
  ArticleTitle,
  Section,
  Title,
  Text,
} from "./Blog.styles";

const Blog = () => {
  return (
    <Container>
      <Main>
        <ArticleTitle>BLOG</ArticleTitle>
        <Section>
          <Title>What is purpose of React Router?</Title>
          <Text>
            React Router, and dynamic, client-side routing, allows us to build a
            single-page web application with navigation without the page
            refreshing as the user navigates. React Router uses component
            structure to call components, which display the appropriate
            information.
          </Text>
          <Text>
            By preventing a page refresh, and using Router or Link, which is
            explained in more depth below, the flash of a white screen or blank
            page is prevented. This is one increasingly common way of having a
            more seamless user experience. React router also allows the user to
            utilize browser functionality like the back button and the refresh
            page while maintaining the correct view of the application.
          </Text>
        </Section>
        <Section>
          <Title>Wow does Context API works?</Title>
          <Text>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </Text>
          <Text>
            To create a context, we use React.createContext which creates a
            context object. You can pass in anything as an argument to
            React.createContext.
          </Text>
          <Text>
            To make this context available to all our React components, we have
            to use a Provider. Every context object comes with a Provider React
            component that allows consuming components to subscribe to context
            changes.
          </Text>
          <Text>
            Consuming context with functional components is easier and less
            tedious than doing so with class-based components. To consume
            context in a functional component, we will use a hook called
            useContext.
          </Text>
        </Section>
        <Section>
          <Title>What is useRef hook in React?</Title>
          <Text>
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component.
          </Text>
          <Text>
            The useRef Hook allows you to persist values between renders.
          </Text>
          <Text>
            It can be used to store a mutable value that does not cause a
            re-render when updated.
          </Text>
          <Text>It can be used to access a DOM element directly.</Text>
        </Section>
      </Main>
    </Container>
  );
};

export default Blog;
