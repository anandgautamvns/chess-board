import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

const House: React.FC<{ connectDragSource: any; connectDragPreview: any }> = ({
  connectDragSource,
  connectDragPreview,
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'house',
    item: { name: 'house' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  );
};





