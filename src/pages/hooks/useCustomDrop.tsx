import { useDrop } from "react-dnd"

interface Props {
  itemType: string;
  handleDrop: (...arg: any) => void;
  handleCanDrop: (...arg: any) => void;
  deps?: unknown[]
}
export const useCustomDrop = (props: Props) => {
  const { itemType, handleDrop, deps } = props
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: itemType,
      drop: () => handleDrop(deps?.join(', ')),
      // canDrop: () => handleCanDrop(deps?.join(', ')),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [deps]
  )

  return [{ isOver, canDrop }, drop]
}