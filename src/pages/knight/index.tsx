import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import { ItemTypes, knightImage } from '../constant'
import styles from './index.module.scss'

type Props = {}

const Knight: React.FC<Props> = (props) => {
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
}

export default Knight