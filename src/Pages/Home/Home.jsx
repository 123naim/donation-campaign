import Banner from "../../Components/Banner/Banner";
import CategoryCards from "../../Components/CategoryCards/CategoryCards";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-12">
                <CategoryCards></CategoryCards>
            </div>
        </div>
    );
};

export default Home;