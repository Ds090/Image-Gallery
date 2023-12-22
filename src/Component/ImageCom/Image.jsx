// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Image({ image, id }) {
  return (
    <div className="mt-[1rem]">
      <Link to={`/photos/${id}`}>
        <img
          src={image}
          className=" h-[250px] w-[250px] rounded-md cursor-pointer"
        />
      </Link>
    </div>
  );
}

export default Image;
