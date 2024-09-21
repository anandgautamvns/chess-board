import React from 'react';
import { ConnectDragPreview, ConnectDragSource, DragSource, DragSourceMonitor } from 'react-dnd';

interface WithDraggableProps {
  connectDragSource: ConnectDragSource;
  connectDragPreview: ConnectDragPreview;
}

const withDraggable = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P & WithDraggableProps>,
  type: string,
) => {
  const Draggable: React.FC<P> = (props) => {
    const dragSource = {
      beginDrag: (monitor: DragSourceMonitor) => ({
        // Return any data that you want to associate with the drag event
        type,
      }),
      // You can add other methods here as needed
    };

    const collect = (connect: any, monitor: DragSourceMonitor) => ({
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    });

    const DragSourceComponent = DragSource(type, dragSource, collect)(WrappedComponent);

    return <DragSourceComponent {...(props as P)} />;
  };

  return Draggable;
};

export default withDraggable;
