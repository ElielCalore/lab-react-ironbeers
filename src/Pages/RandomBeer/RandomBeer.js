import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imageHome from "../../assets/Home.png";

export function RandomBeer() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function RandomBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    RandomBeer();
  }, []);

  return (
    <div>
      <Link to="/">
        <img src={imageHome} alt={imageHome} />
      </Link>
      <div className="container">
        <div className="row align-items-start border">
          <img src={data.image_url} alt={data.image} className="w-25" />
          <div className="col-3">
            <h1>{data.name}</h1>
            <p>{data.tagline}</p>
            <h3>{data.contributed_by}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
