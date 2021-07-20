import React from 'react';

export default (props: any) => {

  const handleDragEnd = (event) => {
    props.graph.addNode({
      width: 60,
      height: 60,
      x: event.clientX - 95,
      y: event.clientY - 90,
      label: '',
    });
  }

  return <i className="iconfont icon-square" onDragEnd={handleDragEnd}/>
};