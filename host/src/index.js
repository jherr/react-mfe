import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
    <div>
      {components.Header ? <components.Header count={count} /> : null}
      <div>
        Hi there, I'm React from React.
      </div>
      <div>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
