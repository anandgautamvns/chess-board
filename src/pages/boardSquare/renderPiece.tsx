import React from "react"
import { knightPositionAxis } from "../type"
import Knight from "../knight";

interface Props {
  x: number,
  y: number,
  knightPosition: knightPositionAxis
}

export const renderPiece = (props: Props) => {
  const { x, y, knightPosition } = props;
  const [knightX, knightY] = knightPosition
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}
