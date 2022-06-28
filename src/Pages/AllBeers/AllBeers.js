import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import imageHome from "../../assets/Home.png";

export function AllBeers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function allBeer() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    allBeer();
  }, []);

  return (
    <div>
      <Link to="/">
        <img src={imageHome} alt={imageHome} />
      </Link>

      <div>
        {data.map((currentElement) => {
          return (
            <div className="container">
              <div className="row align-items-start border">
                <Link to={`/beers/${currentElement._id}`}>
                  <img
                    src={currentElement.image_url}
                    alt={currentElement.image}
                    className="w-5 p-3"
                  />
                  <div className="col-3">
                    <h1>{currentElement.name}</h1>
                    <p>{currentElement.tagline}</p>
                    <h3>{currentElement.contributed_by}</h3>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
/*
    image
name
tagline
contributed_by
     


);
*/
