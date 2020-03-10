import React from 'react';

const ToolBar = props => {
  return (
    <div className='toolbar'>
      {props.text}
      <i onClick={props.onClick} className={props.icon}></i>
    </div>
  );
};

export default ToolBar;
