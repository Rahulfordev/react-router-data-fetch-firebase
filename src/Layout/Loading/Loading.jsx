import "./Loading.css";
import loadingt from "../../assets/bouncing-circles.svg";
const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingt} alt="" />
    </div>
  );
};

export default Loading;
