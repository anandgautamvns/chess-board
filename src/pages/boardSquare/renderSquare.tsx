import React from "react"
import Knight from "../knight";
// import Square from ".";
import { knightPositionAxis } from "../type";
import { canMoveKnight, moveKnight } from "../utils";
import Square from "../square";

interface Props {
  i: number,
  knightPosition: knightPositionAxis
}

const RenderSquare: React.FC<Props> = (props) => {
  const { i, knightPosition } = props;
  const [knightX, knightY] = knightPosition

  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  const handleSquareClick = (toX: number, toY: number) => {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY)
    }
  }

  return (
    <div key={i} onClick={() => handleSquareClick(x, y)} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{piece}</Square>
    </div>
  )
}

export default RenderSquare