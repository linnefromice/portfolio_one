import React from 'react';
import './App.scss';
import Device from './component/device';
import Content from './component/content';

const App: React.FC = props => {
  /*
  const portfolioStyle = {
    position: "absolute",
    top: 0,
    left: 0,  
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  const dummyContent = () => (
    <div style={portfolioStyle}>
      <h1>Portfolio</h1>
    </div>
  );
  */

  return (
    <Container>
      <Device>
        <Content/>
      </Device>
    </Container>
  );
}

const Container: React.FC = props => {
  return (
    <div className="Container">
      {props.children}
    </div>
  );
}

export default App;
