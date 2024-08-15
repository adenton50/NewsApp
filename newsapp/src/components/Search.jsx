import { useState } from "react";

export default function Search({ data, setData, setQuery }) {
  const [inputQuery, setInputQuery] = useState("");
  async function getData(e) {
    e.preventDefault();
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://newsapi.org/v2/everything?q=${inputQuery}&from=2024-07-16&sortBy=popularity&apiKey=${API_KEY}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const news = json.articles.slice(0, 25);
      //console.log(news);
      setData(news);
      setQuery(inputQuery);
    } catch (error) {
      console.error(error.message);
    }
    setInputQuery("");
  }
  return (
    <div>
      <form
        className="flex gap-5 items-center justify-center mt-5"
        onSubmit={getData}
      >
        <input
          placeholder="Search news..."
          className="border-black border-4 text-xl p-2 rounded-xl"
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        ></input>
        <button className="bg-blue-500 text-white hover:bg-blue-700 text-white py-3 px-5 rounded-xl text-2xl">
          Search
        </button>
      </form>
    </div>
  );
}
