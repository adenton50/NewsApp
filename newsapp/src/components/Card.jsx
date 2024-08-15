import CardItem from "./CardItem";

export default function Card({ data, query }) {
  console.log(data);
  return (
    <div className="grid grid-cols-4 gap-24 p-16 m-8">
      {data.map((article) => (
        <CardItem data={data} article={article} />
      ))}
    </div>
  );
}
