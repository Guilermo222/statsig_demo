/*
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/product/:productID" element={<SingleProduct />} />
        <Route path="/category/:slug" element={<SingleCategory />} />
        <Route path="/wishlist" element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Footer />
      <Cart />
      <LoginModal />
      <ScrollToTopButton />
      <BannerPopup />
    </Provider>
  );
}

export default App;
*/
/* Changes to code below in order to add user properties
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";

import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";

function App() {
  const { client } = useClientAsyncInit(
    "client-eY9UHTlKNLMoNIVBEZEJi5efmhFL5e2VhHQFaFBfs81", // Replace with actual key
    { userID: "quickstart-user" }, // Define user attributes
    { plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()] }
  );

  // Optional: add debugging logs here if needed
  // console.log("Statsig user:", { userID: "quickstart-user" });

  return (
    <StatsigProvider
      client={client}
      user={{ userID: "quickstart-user" }} // Explicitly pass user here
      loadingComponent={<div>Loading...</div>}
    >
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/product/:productID" element={<SingleProduct />} />
          <Route path="/category/:slug" element={<SingleCategory />} />
          <Route path="/wishlist" element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/account" element={<ProtectedRoute />}>
            <Route path="/account" element={<Profile />} />
          </Route>
        </Routes>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
        <Cart />
        <LoginModal />
        <ScrollToTopButton />
        <BannerPopup />
      </Provider>
    </StatsigProvider>
  );
}

export default App;
*/
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SingleProduct from "./pages/SingleProduct";
import LoginModal from "./components/LoginModal";
import Wishlist from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AllProducts from "./pages/AllProducts";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BannerPopup from "./components/BannerPopup";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";

import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";

function App() {
  const user = {
    userID: "Guillermo",
    username: "Guillermo",
    email: "quickstart@gmail.com",
    plan: "free",
  };

const STATSIG_CLIENT_KEY = "client-TdQaYfeJQZO4rnc8N0xzYYqIWNKcSoT2RuSw7RNqPLN";

const { client } = useClientAsyncInit(
  STATSIG_CLIENT_KEY,
  user, // your user object
  { plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()] }
);

  if (!client) {
    return <div>Loading Statsig...</div>;
  }

  return (
    <StatsigProvider client={client} user={user} loadingComponent={<div>Loading...</div>}>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/categories" element={<AllCategories />} />
          <Route path="/product/:productID" element={<SingleProduct />} />
          <Route path="/category/:slug" element={<SingleCategory />} />
          <Route path="/wishlist" element={<ProtectedRoute />}>
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/account" element={<ProtectedRoute />}>
            <Route path="/account" element={<Profile />} />
          </Route>
        </Routes>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
        <Cart />
        <LoginModal />
        <ScrollToTopButton />
        <BannerPopup />
      </Provider>
    </StatsigProvider>
  );
}

export default App;

