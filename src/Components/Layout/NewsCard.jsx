import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, published_date, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="card border border-gray-200 shadow-md rounded-lg p-4 space-y-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-xs text-gray-500">{published_date}</p>
          </div>
        </div>
        <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
      </div>

      <h2 className="font-bold text-lg text-gray-900">{title}</h2>

      <div>
        <img src={thumbnail_url} alt={title} className="w-full h-[500px] object-cover rounded-lg" />
      </div>

      <p className="text-gray-700 text-sm">
        {details.length > 150 ? `${details.slice(0, 150)}...` : details}
        <span className="text-blue-500 cursor-pointer font-semibold"> Read More</span>
      </p>

      <div className="flex justify-between items-center border-t pt-3 text-gray-600 text-sm">
        <div className="flex items-center space-x-1">
          <FaStar className="text-orange-400" />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
