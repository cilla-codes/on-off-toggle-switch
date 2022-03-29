import { GlobalStyles } from './styles/Global';
import { Container, Switch, Slider } from './styles/Styles';
import React, { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <Switch onClick={onToggle} toggle={toggle}>
          <Slider toggle={toggle}></Slider>
        </Switch>
      </Container>
    </>
  );
}

export default App;
