import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchFor from "./components/SearchFor";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <div>
      <Header />
      <Search data={data} setData={setData} setQuery={setQuery} />
      <SearchFor query={query} />
      <Card data={data} />
    </div>
  );
}

export default App;
