import { useDrag } from "react-dnd"

interface Props {
  itemType: string;
}
export const useCustomDrag = (props: Props) => {
  const { itemType } = props
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: itemType,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return [{ isDragging }, drag, preview]
}