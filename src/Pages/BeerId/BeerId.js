import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import imageHome from "../../assets/Home.png";

export function BeerId() {
  const [data, setData] = useState([]);
  const { beerId } = useParams();
  console.log(data);
  console.log(typeof data);

  useEffect(() => {
    async function allBeerId() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    allBeerId();
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
            <p>{data.first_brewed}</p>
            <p>{data.attenuation_level}</p>
            <p>{data.description}</p>
            <p>{data.contributed_by}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
