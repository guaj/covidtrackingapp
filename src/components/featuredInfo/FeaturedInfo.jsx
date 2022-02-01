import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Asymptomatic</span>
          <div className="featuredStatusContainer">
              <span className="featuredStatus">200 patients</span>
              <span className="featuredStatusRate">
                  +0.7%<ArrowUpward className="featuredIcon" />
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Symptomatic</span>
          <div className="featuredStatusContainer">
              <span className="featuredStatus">80 patients</span>
              <span className="featuredStatusRate">
                  -1.7%<ArrowDownward className="featuredIcon negative" />
              </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>

  </div>;

}
