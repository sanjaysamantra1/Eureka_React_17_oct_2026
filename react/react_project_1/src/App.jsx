/* 
   Component : is a function that returns some HTML elements to be displayed
   Component : Part of a webpage
*/
import Navbar from './components/navbar/Navbar.jsx';
import Categories from './components/categories/Categories.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import Body from './components/body/Body.jsx';
import Footer from './components/footer/Footer.jsx';

export default function App() {
  return <div>
    {/* <h2>This is App Component</h2> */}
    <Navbar />
    <Categories></Categories>
    <Carousel />
    <Body />
    <Footer />
  </div>
}

