import Knight from "../knight";
import { knightPositionAxis } from "../type";

interface Props {
  x: number,
  y: number,
  knightPosition: knightPositionAxis
}

export const renderPiece = (props: Props) => {
  const { x, y, knightPosition } = props;
  const [knightX, knightY] = knightPosition
  if (x === knightX && y === knightY) {
    return <Knight item={undefined} type={""} />
  }
}
