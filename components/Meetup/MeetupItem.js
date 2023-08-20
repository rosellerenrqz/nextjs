import { useRouter } from "next/router";
import Card from "../UI/Card";

const MeetupItem = (props) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="my-4">
      <Card>
        <div className="h-80 w-full overflow-hidden rounded-l-md rounded-tr-md">
          <img
            src={props.image}
            alt={props.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl text-gray-300">{props.title}</h3>
          <address className="text-gray-300">{props.address}</address>
        </div>
        <div className="mx-7 border-t-2 border-gray-300 p-6 text-center">
          <button
            onClick={showDetailHandler}
            className="pointer rounded-md bg-blue-500  px-6 py-2 text-white hover:bg-blue-400"
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
