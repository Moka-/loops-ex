import React, { useState } from "react";
import "./BlockTitle.css";

export default function BlockTitle({ value, onChange }) {
  const [editedText, setEditedText] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  function startEdit() {
    setEditedText(value);
    setIsEditing(true);
  }

  function handleEditApply() {
    onChange(editedText);
    setIsEditing(false);
  }

  function handleEditDiscard() {
    setEditedText(null);
    setIsEditing(false);
  }

  return (
    <div className="title-container">
      {!isEditing && (
        <div className="title-view-wrapper">
          <h3 className="title-text" onClick={startEdit}>
            {value}
          </h3>
        </div>
      )}
      {isEditing && (
        <>
          <input
            autoFocus
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleEditApply} className="button-contained">
            apply
          </button>
          <button onClick={handleEditDiscard} className="button-outlined">
            discard
          </button>
        </>
      )}
    </div>
  );
}
