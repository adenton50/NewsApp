import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-10 shadow-lg md:px-10">
      <nav className="flex items-center justify-center flex-col gap-4 md:flex-row">
        <h1 className="text-2xl md:text-5xl font-bold flex-1 text-blue-500">
          📰 Adam's News Letter
        </h1>
        <div>
          <ul className="text-xl flex flex-row gap-5 font-bold underline text-blue-500">
            <li>
              <Link to="/" className="hover:text-blue-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/usnews" className="hover:text-blue-900">
                US News
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-900">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
