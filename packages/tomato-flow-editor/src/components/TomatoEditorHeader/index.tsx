import React from 'react';
import type { FlowEditorHeaderType } from '../../types/data.d';
import './index.less';

export default ({
  title
}: FlowEditorHeaderType) => {
  return (
    <div className='flow-editor-header'>
      <h3 className='flow-editor-header-title'>{title}</h3>
    </div>
  )
};