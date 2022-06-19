import Product from '../product/Product.component';
import './Products.styles.scss';
import Pro1 from '../../assets/product-1.jpg';
import Pro2 from '../../assets/product-2.jpg';
import Pro3 from '../../assets/product-3.jpg';
import Pro4 from '../../assets/product-4.jpg';
import Pro5 from '../../assets/product-5.jpg';
import Pro6 from '../../assets/product-6.jpg';
import Pro7 from '../../assets/product-7.jpg';
import Pro8 from '../../assets/product-8.jpg';


export default function Products() {
    return (
        <section className="products">
            <div className='title'>
                <h2>our <span>products</span></h2>
                <a href='#'>{`view all >>`}</a>
            </div>
            <div className='product-content'>
                <Product src={Pro1} text='Bananas' price='$2.50' />
                <Product src={Pro2} text='Pumpkin' price='$5.50' />
                <Product src={Pro3} text='Steak' price='$15.50' />
                <Product src={Pro4} text='Milk' price='$1.80' />
                <Product src={Pro5} text='Barley' price='$1.50' />
                <Product src={Pro6} text='pomegranate' price='$3.50' />
                <Product src={Pro7} text='radish' price='$2.50' />
                <Product src={Pro8} text='Shrimp' price='$25.50' />
            </div>
        </section>
    )
}