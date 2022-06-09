import configRoutes from "../config/configRoutes";
import Home from "../pages/home/Home";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product-detail/ProductDetail";
import Search from "../pages/search/Seach";
import Shop from "../pages/shop/Shop";

const publicRoutes = [
  { path: configRoutes.home, component: Home },
  { path: configRoutes.cart, component: Cart },
  { path: configRoutes.checkout, component: Checkout },
  { path: configRoutes.product, component: Product },
  { path: configRoutes.productDetail, component: ProductDetail },
  { path: configRoutes.search, component: Search },
  { path: configRoutes.shop, component: Shop },
];

export default publicRoutes;
