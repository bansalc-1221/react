function Product(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>₹{props.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;