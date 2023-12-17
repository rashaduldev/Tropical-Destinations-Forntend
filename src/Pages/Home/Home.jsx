import Banner from "../../Components/Banner/Banner";
import BookNow from "../../Components/BookNow/BookNow";
import Discounts from "../../Components/Discounts/Discounts";
import Navber from "../../Components/Navber/Navber";
import Testmonials from "../../Components/Testmonials/Testmonials";
import Tropical from "../../Components/Tropical/Tropical";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Tropical></Tropical>
            <Discounts></Discounts>
            <BookNow></BookNow>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;