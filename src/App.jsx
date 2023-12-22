import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./component/TopBar";
import logo from "./logo.png";
import BarAction from "./component/BarAction";
import FilmList from "./component/FilmList";
import FilmList2 from "./component/FilmList2";
import FilmList3 from "./component/FilmList3";
import MyFooter from "./component/MyFooter";

function App() {
  return (
    <div>
      <header>
        <TopBar src={logo} />
      </header>
      <section>
        <BarAction />
      </section>
      <main className="container">
        <FilmList />
        <FilmList2 />
        <FilmList3 />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
