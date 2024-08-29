import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

export default function USNews() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://gnews.io/api/v4/top-headlines?category=us&lang=en&country=us&max=10&apikey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const data = result.articles;
        setData(data);
        //console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1 className="ml-8 mt-8 text-2xl md:text-3xl">
        Top news stories in the US today:
      </h1>
      <div className="grid md:grid-cols-4 gap-24 md:p-16 m-8">
        {data
          .filter((article) => article.title !== "[Removed]")
          .map((article, index) => (
            <div key={index}>
              <div className="flex items-center justify-center flex-col border-2 border-black rounded-3xl">
                <img src={article.image} className="rounded-t-3xl"></img>
                <div className="p-2 flex items-center justify-center flex-col gap-4 w-full ">
                  <h3 className="text-center font-bold">{article.title}</h3>
                  <p className="text-center italic font-medium">
                    {article.source.name}
                  </p>
                  <a href={article.url} target="_blank">
                    <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                      View Article
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
