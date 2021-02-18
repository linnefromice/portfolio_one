import React, { FC, ReactNode } from 'react';
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

type Props = {
  children: ReactNode;
}
const Container: FC<Props> = ({ children }) => {
  return (
    <div className="Container">
      {children}
    </div>
  );
}

export default App;
