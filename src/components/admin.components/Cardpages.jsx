import {
  AccountBalanceOutlined,
  LocalShippingSharp,
  PeopleAltTwoTone,
  SystemUpdateAltOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function Cardpages({suppliers, isLoding}) {
  return (
    <div className="grid grid-cols-12 gap-6 mt-5 ">
      <Link
        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        to="#"
      >
        <div className="p-5">
          <div className="flex justify-between">
            <PeopleAltTwoTone style={{ width: "40px", height: "40px" }} />
            <div className="mt-1 text-xl text-gray-600">
                Total Suppliers
              </div>
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">{suppliers?.length}</div>
              
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        to="#"
      >
        <div className="p-5">
          <div className="flex justify-between">
            <LocalShippingSharp style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
              <div className="mt-1 text-base text-gray-600">Total Supplied</div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        to="#"
      >
        <div className="p-5">
          <div className="flex">
            <SystemUpdateAltOutlined
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">4.510</div>
              <div className="mt-1 text-base text-gray-600">
                Recent Supplied
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link
        className="transform hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
        to="#"
      >
        <div className="p-5">
          <div className="flex justify-between">
            <AccountBalanceOutlined style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="ml-2 w-full flex-1">
            <div>
              <div className="mt-3 text-3xl font-bold leading-8">₹200,510</div>
              <div className="mt-1 text-base text-gray-600">Total Revenue</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Cardpages;
