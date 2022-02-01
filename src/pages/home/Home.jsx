import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import PieChart2 from "../../components/pchart/PChart";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>

        </div>
    );
}