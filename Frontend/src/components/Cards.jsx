import React from "react";
import PropTypes from "prop-types";

function Cards({ item }) {
  if (!item) return <div>No item data available</div>;

  const { image, name } = item;
  const imageUrl = item.image && item.image.data && item.image.contentType ? 
  `data:${item.image.contentType};base64,${item.image.data}` : 
  'placeholder.jpg';

  console.log('Image URL:', imageUrl); // Debugging

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={imageUrl}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.desc}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.shape({
      data: PropTypes.string.isRequired,
      contentType: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cards;
