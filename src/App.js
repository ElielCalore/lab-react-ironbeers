import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { AllBeers } from "./Pages/AllBeers/AllBeers";
import { RandomBeer } from "./Pages/RandomBeer/RandomBeer";
import { NewBeer } from "./Pages/NewBeer/NewBeer";
import { BeerId } from "./Pages/BeerId/BeerId";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/beers"} element={<AllBeers />} />
        <Route path={"/beers/:beerId"} element={<BeerId />} />
        <Route path={"/randomBeer"} element={<RandomBeer />} />
        <Route path={"/newBeer"} element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

//
