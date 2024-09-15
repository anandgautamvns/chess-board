import BoardSquare from ".";
import { knightPositionAxis } from "../type";
import { renderPiece } from "./renderPiece";

interface Props {
  i: number,
  knightPosition: knightPositionAxis
}

const RenderBoardSquare: React.FC<Props> = (props) => {
  const { i, knightPosition } = props;
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece({ x, y, knightPosition })}
      </BoardSquare>
    </div>
  )
}

export default RenderBoardSquare