import React, { useEffect, useState } from 'react';
import { Graph } from '@antv/X6';
import TomatoEditorHeader from './components/TomatoEditorHeader';
import EditorTools from './components/EditorTools';
import type { FlowEditorType } from './types/data.d';
import Toolbar from './components/Toolbar';
import MenuItem from './components/MenuItem';
import './index.less';

const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40,       // Number，必选，节点位置的 x 值
      y: 40,       // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160,      // Number，必选，节点位置的 x 值
      y: 180,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
};

export default (props: FlowEditorType) => {
  const {
    title = '流程设计器',
    source = {}
  } = props;
  const [graph, setGraph] = useState<any>(null);

  // 初始化画布
  const init = () => {
    // 通过 useState 建造一个单例模式的对象
    setGraph(new Graph({
      // @ts-ignore
      container: document.getElementById('tomato-g6-editor'),
      width: document.body.clientWidth - 65,
      height: document.body.clientHeight - 60,
      clipboard: true,
      grid: {
        size: 10,
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#E7E8EA',
            thickness: 1,
          },
          {
            color: '#CBCED3',
            thickness: 1,
            factor: 5,
          },
        ],
      },
      panning: true,
      selecting: true,
    }));
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <section className='tomato-flow-editor'>
      <TomatoEditorHeader
        title={title}
      />
      <div className='tomato-flow-editor-container'>
        <EditorTools graph={graph} />
        <Toolbar />
        <div id='tomato-g6-editor' />
      </div>
    </section>
  );
}