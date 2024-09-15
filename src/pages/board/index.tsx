import React from 'react'
import { knightPositionAxis } from '../type'
import RenderBoardSquare from '../boardSquare/renderBoardSquare'

interface Props {
  knightPosition: knightPositionAxis
}

const Board: React.FC<Props> = (props: Props) => {
  const { knightPosition } = props;
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(RenderBoardSquare({ i, knightPosition }))
  }
  return (
    <div
      style={{
        width: 'calc(100vw - 0px)',
        height: 'calc(100vh - 0px)',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}

export default Board