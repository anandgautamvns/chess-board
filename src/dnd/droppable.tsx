import React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import Overlay from '../pages/boardSquare/overlay';

interface DroppableProps {
  accept: string | string[];
  item: unknown
}

const DroppableComponent = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Droppable: React.FC<P & DroppableProps> = ({ accept, ...props }) => {
    const [{ isOver, canDrop }, drop] = useDrop<
      { id: unknown }, // Type of the dragged item
      unknown, // Type of the drop result (can be `undefined`)
      { isOver: boolean; canDrop: boolean }
    >(() => ({
      accept,
      drop: (item, monitor) => {
        // Handle drop logic here if needed
        console.log('Item dropped:', {item, monitor});
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }), [accept]);

    return (
      <div ref={drop} style={{ position: 'relative' }}>
        <WrappedComponent {...(props as any)} />
        {/* {isOver && canDrop && <div style={{ position: 'absolute', top: 0, left: 0 }}>Drop here!</div>} */}
        {isOver && !canDrop && <Overlay color="red" />}
        {!isOver && canDrop && <Overlay color="yellow" />}
        {isOver && canDrop && <Overlay color="green" />}
      </div>
    );
  };

  return Droppable;
};

export default DroppableComponent;
