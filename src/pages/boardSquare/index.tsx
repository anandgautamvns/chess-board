import React from 'react';
// import DroppableComponent from '../../dnd/droppable';
import Square from '../square';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constant';
import { canMoveKnight, moveKnight } from '../utils';
import Overlay from './overlay';

interface Props {
  // black: boolean;
  x: number,
  y: number,
  children: React.ReactNode
}

const BoardSquare: React.FC<Props> = (props) => {
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
}

export default BoardSquare

/* const BoardSquare: React.FC<Props> = (props) => {
  const { x, y, children } = props
  const black = (x + y) % 2 === 1
  return (
   <Square black={black}>{children}</Square>
  )
}

const droppable  = DroppableComponent<any>(BoardSquare)

export default droppable */