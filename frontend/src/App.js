import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

import AdminUserPage from "./pages/admin/AdminUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminAnalyticPage from "./pages/admin/AdminAnalyticPage";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />

      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-list/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/product-list/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/search/:searchQuery" element={<ProductListPage />} />
          <Route path="/product-list/category/:categoryName/search/:searchQuery/:pageNumParam" element={<ProductListPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<RegisterPage />} />

          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details/:id"
              element={<UserOrderDetailsPage />}
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-products"
            element={<AdminCreateProductPage />}
          />
          <Route path="admin/edit-product/:id" element={<AdminEditProductPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details/:id"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticPage />} />
        </Route>
      </Routes>

      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
