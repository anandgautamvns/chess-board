import React from 'react';
import DragDropManagerComponent from './dragDropManager';

interface ExampleProps {
  dragDropManager: any; // Adjust type based on your needs
}

const Example: React.FC<ExampleProps> = ({ dragDropManager }) => {
  // You can now use dragDropManager to access React DnD's internals
  console.log(dragDropManager);

  return <div>Example Component with DragDropManager</div>;
};

export default DragDropManagerComponent(Example);
