import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Typography, Button } from 'material-ui';

const App = () => {
  const [components, setComponents] = useState({});
  const [count, setCount] = useState(1);

  import(/* webpackIgnore: true */ 'http://localhost:2000/header.js')
    .then(mod => {
      setComponents({ Header: mod.default });
    });

  const addToCart = () => {
    setCount(count + 1);
  };

  return (
    <Container fixed>
      {components.Header ? <components.Header count={count} /> : null}
      <Typography>
        Hi there, I'm React from React.
      </Typography>
      <Button onClick={addToCart}>Add to cart</Button>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
