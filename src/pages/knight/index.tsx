import React from "react";
import DraggableComponent from "../../dnd/draggable";
import { ItemTypes } from "../constant";
import styles from "./index.module.scss";
const type = ItemTypes.KNIGHT;
const item = {};

type Props = {};

/* const Knight1: React.FC<Props> = (props) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        className={styles.knightContainer}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  )
} */

const Knight: React.FC<Props> = (props) => {
  return (
    <div>
      {/* <DragPreviewImage connect={preview} src={knightImage} /> */}
      <div className={styles.knightContainer}> ♘ </div>
    </div>
  );
};
const draggable = DraggableComponent(Knight, { item, type });
// export default DraggableComponent<TaskCardProps>(TaskCard, { id, type });

export default draggable;
