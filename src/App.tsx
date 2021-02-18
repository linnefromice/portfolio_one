import React, { FC } from 'react';
import './App.scss';
import Device from './component/device';
import Content from './component/content';

const App: FC = () => {
  return (
    <Container>
      <Device>
        <Content/>
      </Device>
    </Container>
  );
}

const Container: FC = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  );
}

export default App;
