import React from 'react';
import DroppableComponent from '../../dnd/droppable';
import Square from '../square';

interface Props {
  // black: boolean;
  x: number,
  y: number,
  children: React.ReactNode
}

/* const BoardSquare1: React.FC<Props> = (props) => {
  const { x, y, children } = props
  const black = (x + y) % 2 === 1

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      canDrop: () => canMoveKnight(x, y),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop()
      })
    }),
    [x, y]
  )

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div >
  )
} */

const BoardSquare: React.FC<Props> = (props) => {
  const { x, y, children } = props
  const black = (x + y) % 2 === 1
  return (
   <Square black={black}>{children}</Square>
  )
}

const droppable  = DroppableComponent<any>(BoardSquare)

export default droppable