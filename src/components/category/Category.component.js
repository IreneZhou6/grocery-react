import './Category.styles.scss';
import CategoryItem from "../categoryItem/CategoryItem.component";
import Fruit from "../../assets/cat-1.png";
import Vegetables from "../../assets/cat-2.png";
import Spices from "../../assets/cat-3.png";
import Meat from "../../assets/cat-4.png";
import Wheat from "../../assets/cat-5.png";

export default function Category() {
    return (
        <section className="category">
            <div className='title'>
                <h2>our <span>category</span></h2>
                <a href='#'>{`view all >>`}</a>
            </div>
            <div className='category-item-container'>
                <CategoryItem image={Fruit} text='fresh fruites' link='#' />
                <CategoryItem image={Vegetables} text='vegetables' link='#' />
                <CategoryItem image={Spices} text='organic spices' link='#' />
                <CategoryItem image={Meat} text='fresh meat' link='#' />
                <CategoryItem image={Wheat} text='organic wheat' link='#' />
            </div>
        </section>
    )
}