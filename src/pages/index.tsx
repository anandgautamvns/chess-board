import React from 'react'
import Board from './board'
import { knightPositionAxis } from './type'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

type Props = {
  knightPosition: knightPositionAxis
}

const Page: React.FC<Props> = (props: Props) => {
  const { knightPosition } = props;
  return (
    <DndProvider backend={HTML5Backend}>
      <Board knightPosition={knightPosition} />
    </DndProvider>
  )
}

export default Page