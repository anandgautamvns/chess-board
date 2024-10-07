import React from "react";
// import DraggableComponent from "../../dnd/draggable";
// import { ItemTypes, knightImage } from "../constant";
import styles from "./index.module.scss";
// import { DragPreviewImage, useDrag } from "react-dnd";
import withDraggable from "../../dnd-lib/draggable";

type Props = {
  item: any; type: string
};

/* const Knight: React.FC<Props> = (props) => {
  const { item, type } = props;
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: type,
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
}

export default Knight; */

const Knight: React.FC<Props> = (props) => {
  const { item, type } = props;
  return (
    <div>
      {/* <DragPreviewImage connect={preview} src={knightImage} /> */}
      <div className={styles.knightContainer}> ♘ </div>
    </div>
  )
}

const DraggableMyComponent = withDraggable(Knight)
export default DraggableMyComponent;
