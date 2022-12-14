import React from "react";
import "../styles/CategoryItem.styles.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, price } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
