import React from 'react';
import { DragPreviewImage } from 'react-dnd';
import withDraggable from './index';

const House: React.FC<{ connectDragSource: any; connectDragPreview: any }> = ({
  connectDragSource,
  connectDragPreview,
}) => {
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  );
};

export default withDraggable(House, 'HOUSE');
