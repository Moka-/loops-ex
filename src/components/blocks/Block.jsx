import React, { useRef, useState } from "react";
import useGridPosition from "../../hooks/useGridPosition";
import getBlockComponent from "../../utils/blockTypeHelper";
import BlockTitle from "../shared/BlockTitle";
import CollapseChevron from "../shared/CollapseChevron";
import "./Block.css";

export default function Block({
  id,
  type,
  editBlockField,
  title,
  content,
  collapsible,
  attributes,
  position,
}) {
  const ref = useRef();
  const [isCollapsed, setIsCollapsed] = useState(false);
  useGridPosition(ref, position);

  function handleTitleChanged(newValue) {
    editBlockField(id, "title", newValue);
  }

  const BlockComponent = getBlockComponent(type);

  return (
    <div className="block-container" ref={ref}>
      <div className="block-card">
        {title && (
          <div className="block-header">
            <BlockTitle value={title} onChange={handleTitleChanged} />
            <CollapseChevron
              isCollapsed={isCollapsed}
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          </div>
        )}
        {!isCollapsed && (
          <div className="block-content">
            <BlockComponent content={content} attributes={attributes} />
          </div>
        )}
      </div>
    </div>
  );
}
