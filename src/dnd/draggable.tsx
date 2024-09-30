import React from "react";
import { DragSourceMonitor, useDrag } from "react-dnd";

interface DraggableProps {
  item: unknown; // Unique identifier for the item being dragged
  type: string; // Type of the draggable item
}

const DraggableComponent = <P extends Record<string, unknown>>(
WrappedComponent: React.ComponentType<P>, p0: { item: unknown; type: string; }) => {
  const Draggable: React.FC<P & DraggableProps> = ({ item, type, ...props }) => {
    const [{ isDragging }, drag, dragPreview] = useDrag<
      unknown,
      unknown,
      { isDragging: boolean }
    >(
      () => ({
        type,
        item: item,
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [item, type]
    );

    return isDragging ? (
      <div ref={dragPreview} />
    ) : (
      <div
        ref={drag}
        {...props}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <WrappedComponent {...(props as any)} />
      </div>
    );
  };

  return Draggable;
};

export default DraggableComponent;
