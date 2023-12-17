import Banner from "../../Components/Banner/Banner";
import BookNow from "../../Components/BookNow/BookNow";
import Destination from "../../Components/Destinations/Destination";
import Discounts from "../../Components/Discounts/Discounts";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";
import Testmonials from "../../Components/Testmonials/Testmonials";
import Tropical from "../../Components/Tropical/Tropical";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Tropical></Tropical>
            <Destination></Destination>
            <Discounts></Discounts>
            <BookNow></BookNow>
            <Testmonials></Testmonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;