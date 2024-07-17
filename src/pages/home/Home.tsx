 
import Category from "./category/Category"
import Gallery from "./gallery/Gallery"
import Hero from "./hero/Hero"
import Product from "./product/Product"

 

const Home = () => {
  return (
    <div>
        <Hero />
        <Product />
        <Category />
        <Gallery />
    </div>
  )
}

export default Home