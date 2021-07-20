import React from 'react';
import Circular from './../../shapes/circular';
import Line from './../../shapes/line';
import Square from './../../shapes/square';
import './index.less';

export default (props: any) => {
  return (
    <div className='flow-editor-tools'>
      <Circular {...props} />
      <Square {...props} />
      <Line {...props} />
    </div>
  );
}