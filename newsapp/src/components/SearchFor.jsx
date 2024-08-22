export default function SearchFor({ query }) {
  return (
    <div>
      {query === "" ? (
        ""
      ) : (
        <h1 className="md:text-2xl mx-4 md:ml-8 text-xl mt-8">
          Here are the top news stories for:{" "}
          <span className="font-bold italic">
            {query.charAt(0).toUpperCase() + query.slice(1)}
          </span>
        </h1>
      )}
    </div>
  );
}
