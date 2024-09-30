import React from "react";
import { useDragDropManager } from "react-dnd";

interface WithDragDropManagerProps {
  dragDropManager: any; //DragDropManager;
}

const DragDropManagerComponent = <P extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<P & WithDragDropManagerProps>
) => {
  const WithDragDropManager: React.FC<P> = (props) => {
    const dragDropManager = useDragDropManager();

    return (
      <WrappedComponent {...(props as P)} dragDropManager={dragDropManager} />
    );
  };

  return WithDragDropManager;
};

export default DragDropManagerComponent;
