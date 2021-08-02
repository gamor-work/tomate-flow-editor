import React, { useEffect, useState } from 'react';
import { Addon } from '@antv/X6'
import './index.less';

export default (props: any) => {
  const { graph } = props;
  const [dnd, setDnd] = useState<any>(null);

  const initShape = () => {
    if (graph) {
      setDnd(new Addon.Stencil({
        title: '流程设计器',
        target: graph,
        collapsable: true,
        stencilGraphWidth: 228,
        stencilGraphHeight: document.body.offsetHeight - 105,
        layoutOptions: {
          columns: 2,
          columnWidth: 110,
          // rowHeight: 40,
          marginY: 30,
        },
        getDropNode(node) {
          const size = node.size()
          return node.clone().size(size.width, size.height)
        },
      }));
    }
  }

  useEffect(() => {
    initShape();
  }, [graph]);

  useEffect(() => {
    if (dnd) {
      const stencilContainer = document.querySelector('#flow-editor-tools');
      stencilContainer?.appendChild(dnd.container);

      const shape = graph.createNode({
        width: 80,
        height: 40,
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
          },
        },
      });

      const ellipse = graph.createNode({
        width: 80,
        height: 40,
        shape: 'ellipse',
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
          },
        },
      });

      const rect = graph.createNode({
        width: 80,
        height: 40,
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
            rx: 5,
            ry: 5,
          },
        },
      });

      const polyline = graph.createNode({
        shape: 'polyline',
        width: 60,
        height: 60,
        points: [
          { x: 0, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 10 },
          { x: 10, y: 0 },
        ],
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
          },
        },
      });

      const cylinder = graph.createNode({
        shape: 'cylinder',
        width: 60,
        height: 60,
        attrs: {
          top: {
            fill: '#efdbff',
            stroke: '#9254de',
            fillOpacity: 0.5,
          },
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
            fillOpacity: 0.8,
          },
        },
      });

      const circle = graph.createNode({
        shape: 'circle',
        width: 40,
        height: 40,
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            strokeWidth: 2,
          },
        },
      });

      const polygon = graph.createNode({
        shape: 'polygon',
        x: 40,
        y: 40,
        width: 80,
        height: 60,
        attrs: {
          body: {
            fill: '#efdbff',
            stroke: '#9254de',
            // 指定 refPoints 属性，多边形顶点随图形大小自动缩放
            // https://x6.antv.vision/zh/docs/api/registry/attr#refpointsresetoffset
            refPoints: '0,10 10,0 20,10 10,20',
          },
        },
      });

      dnd.load([shape, ellipse, rect, circle, polyline, cylinder, polygon])
    }
  }, [dnd]);

  return (
    <div id='flow-editor-tools'>
      {/* TODO */}
    </div>
  );
}