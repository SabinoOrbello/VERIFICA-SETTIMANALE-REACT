import { Component } from "react";
import MySingleFilm from "./MySingleFilm";

class FilmList3 extends Component {
  state = {
    searchQuery: "avengers",
    filmData: [],
  };

  filmDataFetch = async () => {
    const apiKey = "a3f6210f";

    try {
      const respons = await fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=${apiKey}`);
      if (!respons.ok) {
        throw new Error("Errore richiesta API");
      }
      const filmDataObj = await respons.json();
      this.setState({ filmData: filmDataObj.Search });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.filmDataFetch();
  }
  render() {
    return (
      <>
        <h4 className="text-white pb-2">{this.state.searchQuery.toUpperCase()}</h4>
        <div className="d-flex">
          {this.state.filmData.slice(0, 7).map((film, index) => (
            <MySingleFilm key={index} imageUrl={film.Poster} />
          ))}
        </div>
      </>
    );
  }
}

export default FilmList3;
