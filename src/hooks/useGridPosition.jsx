import { useEffect } from "react";

export default function useGridPosition(ref, position) {
  useEffect(() => {
    if (!ref?.current) return;

    const posX = position.row;
    const posY = position.column;
    const posW = position.width;
    const posH = position.height;

    ref.current.style.gridArea = `${posX} / ${posY} / span ${posH}/ span ${posW}`;
  }, [ref, position?.height, position?.width, position?.row, position?.column]);
}
