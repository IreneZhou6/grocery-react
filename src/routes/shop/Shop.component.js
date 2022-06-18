import Category from "../../components/category/Category.component";
import Heading from "../../components/heading/Heading.component";
import Products from "../../components/products/Products.component";

export default function Shop() {
    return (
        <div>
            <Heading text='Our Shop' site='shop' />
            <Category />
            <Products />
        </div>
    )
}