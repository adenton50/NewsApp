export default function CardItem({ data, article, index }) {
  if (
    article.title === "[Removed]" ||
    article.urlToImage === "https://removed.com" ||
    article.urlToImage === null
  ) {
    return null;
  }
  return (
    <div key={index}>
      <div className="flex items-center justify-center flex-col">
        <img alt="Article" src={article.image} className="rounded-t-3xl"></img>
        <div className="p-2 flex items-center justify-center flex-col gap-4 border-b border-r border-l border-black w-full rounded-b-3xl">
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
  );
}
