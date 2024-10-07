import React from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { compile } from 'sass';

// Define the type for the item being dragged
interface DragItem {
  item: any;
  type: string
}

// Define the props for the HOC
interface WithDraggableProps {
  item: any;
  type: string
}

// Higher-Order Component (HOC) to add drag functionality
function withDraggable<T extends object>(
  WrappedComponent: React.ComponentType<T & WithDraggableProps>
) {
  const DraggableHOC: React.FC<T & WithDraggableProps> = (props) => {
    const { item, type, ...restProps } = props


    // Use the `useDrag` hook from `react-dnd`
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
      type,
      item: item,
      collect: (monitor: DragSourceMonitor) => {
        console.log('collect', monitor)
        return ({
          isDragging: monitor.isDragging(),
        })
      },
      previewOptions: {
      },
      options: {
        dropEffect: '',
      },
      end: (item: any, monitor: DragSourceMonitor) => {
        console.log('end', { item, monitor })
        return ({

        })
      },
      // isDragging: () => ()
      // canDrag: (monitor: DragSourceMonitor) => { console.log('end', { item, monitor }); return ({}) }

    }))
    console.log('DraggableHOC', { props, isDragging, drag, dragPreview })
    return isDragging ? (
      <div ref={dragPreview} />
    ) : (
      <div ref={drag}>
        <WrappedComponent {...(restProps as T)} item={item} type={type} />
      </div>
    )
  }

  return DraggableHOC
}

export default withDraggable
