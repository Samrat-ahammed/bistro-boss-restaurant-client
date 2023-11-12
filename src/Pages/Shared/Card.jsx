const Card = ({ img }) => {
  return (
    <div>
      <div className="card bg-base-100">
        <figure className="">
          <img src={img} alt="Shoes" className="w-full h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
