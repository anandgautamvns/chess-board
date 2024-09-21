import React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';

interface DroppableProps {
  accept: string | string[];
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
        console.log('Item dropped:', item);
      },
      collect: (monitor: DropTargetMonitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }), [accept]);

    return (
      <div ref={drop} style={{ position: 'relative' }}>
        <WrappedComponent {...(props as any)} />
        {isOver && canDrop && <div style={{ position: 'absolute', top: 0, left: 0 }}>Drop here!</div>}
      </div>
    );
  };

  return Droppable;
};

export default DroppableComponent;
