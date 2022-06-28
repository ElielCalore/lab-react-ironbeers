import { Link } from "react-router-dom";
import imageHome from "../../assets/Home.png";
export function NewBeer() {
  return (
    <div>
      <Link to="/">
        <img src={imageHome} alt={imageHome} />
      </Link>
      <dvi>
        <h1>NewBeer</h1>
      </dvi>
      <div></div>
    </div>
  );
}
