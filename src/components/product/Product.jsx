
import "./product.css";

const Product = ({category, tech}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <div>
        <h1>{category}</h1>
        <ul>
            {tech.map(item => (<li>{item}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default Product;