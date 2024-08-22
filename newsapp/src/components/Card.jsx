import CardItem from "./CardItem";

export default function Card({ data, query }) {
  //console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-24 md:p-16 m-8">
      {data.map((article, index) => (
        <CardItem data={data} article={article} key={index} />
      ))}
    </div>
  );
}
