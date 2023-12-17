import Banner from "../../Components/Banner/Banner";
import Discounts from "../../Components/Discounts/Discounts";
import Navber from "../../Components/Navber/Navber";
import Tropical from "../../Components/Tropical/Tropical";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Tropical></Tropical>
            <Discounts></Discounts>
        </div>
    );
};

export default Home;