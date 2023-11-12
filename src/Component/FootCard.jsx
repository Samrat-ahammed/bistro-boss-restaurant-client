const FootCard = ({ item }) => {
  const { name, image, price, recipe } = item || {};
  return (
    <div>
      <div className="card bg-base-100">
        <figure className="w-full">
          <img src={image} alt="Shoes" className="w-full h-full" />
          <p className="absolute right-0 top-0 mr-4 mt-4 bg-blue-700 px-3 py-2 rounded-lg text-white">
            price: ${price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootCard;
