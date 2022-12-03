import "./App.css";
import PostCard from "./Content";
import ScrollButton from "./ScrollButton";
import SearchBar from "./Search";
function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostCard />
      <ScrollButton />
    </div>
  );
}

export default App;
