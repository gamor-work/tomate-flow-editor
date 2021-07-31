import React from 'react';
// import { Menu } from 'antd';
import type { FlowEditorHeaderType } from '../../types/data.d';
import './index.less';

export default ({
  title
}: FlowEditorHeaderType) => {
  return (
    <div className='flow-editor-header'>
      <h3 className='flow-editor-header-title'>
        <i className="logo iconfont icon-flow" />
        {title}
      </h3>
    </div>
  )
};