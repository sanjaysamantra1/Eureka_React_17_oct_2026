/* 
   Component : is a function that returns some HTML elements to be displayed
   Component : Part of a webpage
*/
import Navbar from './components/navbar/Navbar.jsx';
import Categories from './components/categories/Categories.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import Body from './components/body/Body.jsx';
import Footer from './components/footer/Footer.jsx';
import axios from 'axios';
import { authInterceptor } from './utils/authInterceptor.js';
import { errorHandler } from './utils/errorInterceptor.js';
import { retry } from './utils/retry.js';

export default function App() {
  axios.interceptors.request.use(authInterceptor);
  // axios.interceptors.response.use(response=>response , errorHandler);
  // axios.interceptors.response.use(response => response, retry);

  return <div>
    {/* <h2>This is App Component</h2> */}
    <Navbar />
    {/* <Categories></Categories> */}
    {/* <Carousel /> */}
    <Body />
    <Footer />
  </div>
}

