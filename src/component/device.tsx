import React, { FC, ReactNode } from 'react';
// import './device.scss';

type Props = {
  children: ReactNode;
}
const Device: FC<Props> = ({ children }) => {
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

const Screen: FC<Props> = ({ children }) => (
  <div className="screen">
    <div
      className="screen_content back_stream_top"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/contents/stream_top.svg'})` 
      }}
    >
      <div
        className="screen_content back_stream_bottom"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/contents/stream_bottom.svg'})` 
        }}
      ></div>
    </div>
    <div className="screen_content">
      {children}
    </div>
  </div>
)

const LeftButton: FC = () => (
  <div
    className="left_button"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/contents/button_left.svg'})` 
    }}
  ></div>
);

const RightButton: FC = () => (
  <div
    className="right_button"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/contents/button_right.svg'})` 
    }}
  ></div>
);


export default Device;