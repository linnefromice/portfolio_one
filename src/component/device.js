import React from 'react';
import './device.scss';

const Device = props => {
  return (
    <div className="device">
      <LeftButton/>
        <Screen>
          {props.children}
        </Screen>
      <RightButton/>
    </div>
  )
}

const Screen = props => (
  <div className="screen">
    <div className="screen_content back_stream_top">
      <div className="screen_content back_stream_bottom"></div>
    </div>
    <div className="screen_content">
      {props.children}
    </div>
  </div>
)

const LeftButton = () => (
  <div className="left_button"></div>
);

const RightButton = () => (
  <div className="right_button"></div>
);


export default Device;