import React, { FC } from 'react';
// import './device.scss';

const Device: FC = ({ children }) => {
  return (
    <div className="device">
      <LeftButton/>
      <Screen>
        {children}
      </Screen>
      <RightButton/>
    </div>
  )
}

const Screen: FC = ({ children }) => (
  <div className="screen">
    <div
      className="screen-content back-stream-top"
      style={{ backgroundImage: "url('./contents/stream_top.svg')" }}
    >
      <div
        className="screen-content back-stream-bottom"
        style={{ backgroundImage: "url('./contents/stream_bottom.svg'})" }}
      />
    </div>
    <div className="screen-content">
      {children}
    </div>
  </div>
)

const LeftButton: FC = () => (
  <div
    className="left-button"
    style={{ backgroundImage: "url('./contents/button_left.svg')" }}
  />
);

const RightButton: FC = () => (
  <div
    className="right-button"
    style={{ backgroundImage: "url('./contents/button_right.svg')" }}
  />
);


export default Device;
