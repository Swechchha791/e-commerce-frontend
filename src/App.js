import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

// Components
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

// User Components
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';

// Public Pages
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';

// User Protected Pages
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';

// Admin Protected Pages
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>

          {/* "Public Pages" */}
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/product-details' element={<ProductDetailsPage />} />
          <Route path='/product-details/:id' element={<ProductDetailsPage />} />
          <Route path='/product-list' element={<ProductListPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element="Page Not exist 404" />
        </Route>

        {/* "User Protected Pages" */}

        <Route element={<ProtectedRoutesComponent admin="false" />}>
          <Route path='/user' element={<UserProfilePage />} />
          <Route path='/user/my-orders' element={<UserOrdersPage />} />
          <Route path='/user/order-details' element={<UserOrderDetailsPage />} />
          <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
        </Route>

        {/* "Admin Protected Pages" */}

        <Route element={<ProtectedRoutesComponent admin="true" />}>
          <Route path='/admin/user' element={<AdminUsersPage />} />
          <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />
          <Route path='/admin/products' element={<AdminProductsPage />} />
          <Route path='/admin/chats' element={<AdminChatsPage />} />
          <Route path='/admin/create-new-product' element={<AdminCreateProductPage />} />
          <Route path='/admin/edit-product' element={<AdminEditProductPage />} />
          <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
          <Route path='/admin/order-details' element={<AdminOrderDetailsPage />} />
          <Route path='/admin/orders' element={<AdminOrdersPage />} />
        </Route>

      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
