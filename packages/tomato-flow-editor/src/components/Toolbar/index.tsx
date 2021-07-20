import React from 'react';
import { Toolbar } from '@antv/x6-react-components';
import { ZoomInOutlined, ZoomOutOutlined, UndoOutlined, RedoOutlined, DeleteOutlined } from '@ant-design/icons';

import '@antv/x6-react-components/es/menu/style/index.css';
import '@antv/x6-react-components/es/toolbar/style/index.css';
import './index.less';

const Item = Toolbar.Item;
const Group = Toolbar.Group;

export default () => {

  return (
    <Toolbar>
      <Group>
        {/* 放大 */}
        <Item name="zoomIn" tooltip="Zoom In (Cmd +)" icon={<ZoomInOutlined />} />
        {/* 缩小 */}
        <Item name="zoomOut" tooltip="Zoom Out (Cmd -)" icon={<ZoomOutOutlined />} />
      </Group>
      <Group>
        <Item name="undo" tooltip="Undo (Cmd + Z)" icon={<UndoOutlined />} />
        <Item name="redo" tooltip="Redo (Cmd + Shift + Z)" icon={<RedoOutlined />} />
      </Group>
      <Group>
        <Item name="delete" icon={<DeleteOutlined />} tooltip="Delete (Delete)" />
      </Group>
    </Toolbar>
  )
}