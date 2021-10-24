import './ProductList.css'
import Product from '../product/Product'
import { products } from "../../data";

export const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Techs I'm Working With</h1>
            </div>
            <div className="pl-list">
                {products.map((item) => (
          <Product key={item.id} category={item.category} tech={item.tech} />
        ))}
      </div>
        </div>
        
    )
}
