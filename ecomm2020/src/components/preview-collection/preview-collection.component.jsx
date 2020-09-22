import React from "react";
import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, index) => index < 4)
        .map(items => (
          <div key={items.id}>{items.name}</div>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
