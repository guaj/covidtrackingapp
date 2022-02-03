import "./faceInfo.css"
import { TrendingDown , TrendingUp  } from "@material-ui/icons";

//  class for the face of the dashboard, we can add more boxes as we need

export default function FeaturedInfo() {
  return <div className="face">
      <div className="faceItem">
          <span className="faceTitle">Asymptomatic</span>
          <div className="faceStatusContainer">
              <span className="faceStatus">200 patients</span>
              <span className="faceStatusRate">
                  +0.7%<TrendingUp  className="faceArrow" />
              </span>
          </div>
      </div>
      <div className="faceItem">
          <span className="faceTitle">Symptomatic</span>
          <div className="faceStatusContainer">
              <span className="faceStatus">80 patients</span>
              <span className="faceStatusRate">
                  -1.7%<TrendingDown  className="faceArrow negative" />
              </span>
          </div>
      </div>

  </div>;

}
