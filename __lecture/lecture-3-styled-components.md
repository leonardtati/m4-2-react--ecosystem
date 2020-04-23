# 4.2.3 💅 `styled-components`

---

- Write your CSS from within your JS
- Every styled element gets its own component

---

```jsx
import styled from "styled-components";

const Button = styled.button`
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;
`;

ReactDOM.render(<Button>Hello World</Button>, document.querySelector("#root"));
```

---

### How does this work??

`styled-components` uses a modern JS feature called _tagged template literals_.

```js
const Button = styled.button`
  // styles here
`;

// It's similar to:
const Button = styled.button(`
  // styles here
`);
```

---

# Browser support

<img src='./assets/caniuse-template-literals.png' style=max-width:60vw' />

---

# Quiz

Despite the previous slide, our site _will_ still work in IE11.

Why is that?

---

### Hover styles

```jsx live=true
const Button = styled.button`
  background: blueviolet;
  border: none;
  padding: 16px 32px;
  color: white;
  font-size: 21px;
  border-radius: 2px;

  &:hover {
    transform: scale(1.1);
  }
`;

render(<Button>Hello world</Button>);
```

---

# Why?

Why would we do this, instead of having external stylesheets?

---

# Exercise:

Convert the following inline styles to styled-components

---

```css
.wrapper {
  margin: 0 auto;
  height: 300px;
}
```

```jsx
const StyledWrapper = styled.div`
  margin: 0 auto;
  heigth: 300px;
`;
function App(props) {
  return <StyledWrapper>Hello World</StyledWrapper>;
}
```

---

### Exercise #2

```css
.btn {
  color: tomato;
  font-weight: bold;
  padding: 20px;
}

.btn:hover,
.btn:focus {
  transform: translateY(-3px);
}

.icon {
  width: 32px;
  height: 32px;
}
```

```jsx

const StyledBtn = styled.button`
color: tomato;
  font-weight: bold;
  padding: 20px;

  &:hover, &:focus:{{
  transform: translateY(-3px);
}}
`
const StyledIcon = styled.i`
width: 32px;
height: 32px;
`
function IconButton(props) {
  return (
    <StyledBtn>
      <StyledIcon >
        {props.icon}
      </StyledIcon >
      {props.children}
    <StyledBtn>
  )
}
```

---

### Exercise 3

```css
.paragraph {
  font-size: 18px;
  line-height: 1.4;
  color: #333;
}

.paragraph strong {
  color: red;
}

.paragraph em {
  color: #666;
}
```

```jsx
const StyledParagraph = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: #333;

  > strong {
    color: red;
  }
  > em {
    color: #666;
  }
`;
function FantasticStory(props) {
  return (
    <div>
      <StyledParagraph>
        The <strong>quick</strong> red fox jumped over the <em>lazy</em> dog.
      </StyledParagraph>
      <StyledParagraph>The end.</StyleParagraph>
    </div>
  );
}
```

---

### Global styles

```jsx
import {createGlobalStyles} from 'styled-components';

const GlobalStyles = createGlobalStyles`
  * {
    font-family: 'Lato', sans-serif;
  }

  p {
    line-height: 1.3;
  }
`

// Used as a component
<GlobalStyles />
```

---

[Next lecture: React Router](../lecture-4-react-router)
