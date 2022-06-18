import { Link } from "react-router-dom";
import './CategoryItem.styles.scss';

export default function CategoryItem({ image, text, link }) {
    return (
        <Link to={link} className="category-item">
            <img src={image} alt={text} />
            <h3>{text}</h3>
        </Link>
    )
}