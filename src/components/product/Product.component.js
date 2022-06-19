import './Product.styles.scss';

export default function Product({ src, text, price, num }) {
    return (
        <div className="product">
            <img src={src} alt={text} />
            <div className='product-content'>
                <h3>{text}</h3>
                <span className='price'>{price}</span>
                <span className='stars'>★★★★☆</span>
            </div>
        </div>
    )
}