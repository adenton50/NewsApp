import { useState } from "react";

export default function Search({ data, setData, setQuery }) {
  const [inputQuery, setInputQuery] = useState("");
  async function getData(e) {
    e.preventDefault();
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://newsapi.org/v2/everything?q=${inputQuery}&from=2024-08-21&sortBy=popularity&apiKey=${API_KEY}`;
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
    <div className="flex flex-col items-center">
      <form
        className="flex gap-5 items-center justify-center mt-5"
        onSubmit={getData}
      >
        <input
          placeholder="Search news..."
          className="border-black border-4 md:text-xl p-2 rounded-xl"
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        ></input>
        <button className="bg-blue-500 text-white hover:bg-blue-700 text-white py-3 px-5 rounded-xl md:text-2xl">
          Search
        </button>
      </form>
      {data.length === 0 && (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mx-4 mt-8">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            Effortlessly read and distribute news with my newsletter.
          </h5>
          <p className="font-normal text-gray-700 ">
            Use the search bar to find specific keywords or click the "US News"
            tab to explore today’s top stories in the US. Stay connected and
            keep yourself informed with ease.
          </p>
        </div>
      )}
    </div>
  );
}
