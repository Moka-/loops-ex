import React from "react";
import Block from "./blocks/Block";
import "./Document.css";

export default function Document({ blocks, editBlockField }) {
  return (
    <div className="document-container">
      {blocks.map((block) => {
        const { id, type, title, content, collapsible, attributes, position } =
          block;

        return (
          <Block
            key={id}
            id={id}
            type={type}
            editBlockField={editBlockField}
            title={title}
            content={content}
            collapsible={collapsible}
            attributes={attributes}
            position={position}
          />
        );
      })}
    </div>
  );
}
