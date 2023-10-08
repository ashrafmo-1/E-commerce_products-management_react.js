import Brands from "../../components/Brands";
import Swiper from "../../components/Home/Swiper";
import Product from "../product/Products";
import NavgationBar from "../../components/NavgationBar";
import Offer from "../../components/Offer";
import bgOffer from "../../assets/images/a6.jpg";
import MainHeader from "../../components/MainHeader";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <MainHeader />
      <NavgationBar />
      <div
        className={
          "home-header-container d-flex justify-content-between m-2 p-2 bg-secondary-subtle gap-4 h-100"
        }
      >
        <Swiper />
        <div className="home-header-imagebg">
          <img
            src={bgOffer}
            alt=""
            className="w-100"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <Brands />
      <Offer />
      <Product />
      <Footer />
    </>
  );
};
export default Home;
