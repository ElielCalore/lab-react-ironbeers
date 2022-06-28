import { Link } from "react-router-dom";
import imageHome from "../../assets/Home.png";
import axios from "axios";
import { useState } from "react";

export function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    firts_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);
  }

  return (
    <div>
      <Link to="/">
        <img src={imageHome} alt={imageHome} />
      </Link>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name-input">Name</label>
          <input
            id="name-input"
            value={form.nome}
            type="string"
            name="name"
            onChange={handleChange}
            required
          />
          <label htmlFor="tagline-input">Tagline</label>
          <input
            id="tagline-input"
            value={form.tagline}
            type="string"
            name="tagline"
            onChange={handleChange}
            required
          />
          <label htmlFor="description-input">Description:</label>
          <input
            id="description-input"
            value={form.description}
            type="string"
            name="description"
            onChange={handleChange}
          />
          <label htmlFor="firts_brewed-input">Firts Brewed:</label>
          <input
            id="firts_brewed-input"
            value={form.firts_brewed}
            type="string"
            name="firts_brewed"
            onChange={handleChange}
          />
          <label htmlFor="brewers_tips-input">Brewers Tips:</label>
          <input
            id="brewers_tips-input"
            value={form.brewers_tips}
            type="string"
            name="brewers_tips"
            onChange={handleChange}
          />
          <label htmlFor="attenuation_level-input">Attenuation Level </label>
          <input
            id="attenuation_level-input"
            name="attenuation_level"
            value={form.attenuation_level}
            onChange={(e) =>
              setForm({ ...form, attenuation_level: Number(e.target.value) })
            }
            type="number"
          />
          <label htmlFor="contributed_by-input">Contributed By</label>
          <input
            id="contributed_by-input"
            value={form.contributed_by}
            type="string"
            name="contributed_by"
            onChange={handleChange}
          />

          <button onClick={handleSubmit} type="submit">
            Add New
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
}
