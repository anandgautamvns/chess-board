import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';

interface DraggableProps {
  id: unknown; // Unique identifier for the item being dragged
  type: string; // Type of the draggable item
}

const DraggableComponent = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Draggable: React.FC<P & DraggableProps> = ({ id, type, ...props }) => {
    const [{ isDragging }, drag, dragPreview] = useDrag<unknown, unknown, { isDragging: boolean }>(
      () => ({
        type,
        item: { id },
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, type]
    );

    return isDragging
? (
      <div ref={dragPreview} />
    )
: (
      <div ref={drag} {...props}>
        <WrappedComponent {...(props as any)} />
      </div>
    );
  };

  return Draggable;
};

export default DraggableComponent;
