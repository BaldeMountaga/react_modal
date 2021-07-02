import React from 'react';
// import './App.css';
import './index.css'
import { Container } from './Container';

const App = () => {

  const triggerText = 'Create Directory';

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  return (
    <div className="App">
      <Container triggerText={triggerText} onSubmit={onSubmit} />
    </div>
  );
};

export default App;