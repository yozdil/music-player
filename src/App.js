// IMport Components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Styles
import "./styles/app.scss";
// Import data
import data from "./data"

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
