import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { EmojiCard } from "./components/EmojiCard";

import img100 from "./assets/100.png";
import img1234 from "./assets/1234.png";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SearchBar />

      <main className="grid-container">
        <EmojiCard
          emoji={img100}
          title="100"
          keywords="Hundred, points, symbol, wow, win, perfect, parties"
        />
        <EmojiCard
          emoji={img1234}
          title="1234"
          keywords="input symbol for numbers symbol"
        />
        <EmojiCard
          emoji={img1234}
          title="1234"
          keywords="input symbol for numbers symbol"
        />
      </main>
    </div>
  );
}

export default App;
