import "./App.css";
import "./styles/general.css";
import countryCard from "./assets/views/countryCard/countryCard";
import CountrieList from "./assets/components/CountryList/CountryList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountrieList />
        {countryCard({
          imgSrc: "https://picsum.photos/200/300",
          name: "Country",
          population: 250,
          buttonText: "Details",
          callback: null,
        })}
      </header>
    </div>
  );
}

export default App;
