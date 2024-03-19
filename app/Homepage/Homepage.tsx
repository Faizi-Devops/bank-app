import Navbar from "@/components/Navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:px-[15rem]">
        <div className="grid  gap-6 lg:grid-cols-2 grid-cols-1  mt-7">
          <div className="">
            <div className="block max-w-lg   p-3 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="grid lg:grid-cols-2">
                <div className="flex">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="user"
                    className="svg-inline--fa fa-user fa-w-2 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    ></path>
                  </svg>
                  <p className="font-extralight ml-1 text-[1.1rem]">Accounts</p>
                </div>
                <div>
                  <span className="bg-[#1eb81e] text-white text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-white dark:text-white">
                    Add new Account
                  </span>
                  <span className="bg-[#39beb9] text-blu text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-white dark:text-white">
                    view all
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <hr />
              </div>

              <p className="text-center  text-[3rem] font-extralight mt-4">2</p>
              <p className="font-extralight ml-1 text-[1.1rem] mb-4 text-center">
                accounts
              </p>
            </div>
          </div>
          <div className="">
            <div className="block max-w-lg   p-3 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="grid grid-cols-2">
                <div className="flex">
                  <svg
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="user"
                    className="svg-inline--fa fa-user fa-w-2 "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                    ></path>
                  </svg>
                  <p className="font-extralight ml-1 text-[1.1rem]">
                    Transactions
                  </p>
                </div>
                <div className="text-end">
                  <span className="bg-[#39beb9] text-blu text-xs font-medium me-2 px-2.5 py-1 rounded dark:bg-white dark:text-white">
                    view all
                  </span>
                </div>
              </div>

              <div className="mt-3">
                <hr />
              </div>

              <p className="text-center  text-[3rem] font-extralight mt-4">4</p>
              <p className="font-extralight ml-1 text-[1.1rem] mb-4 text-center">
                transactions
              </p>
            </div>
          </div>
        </div>
        <p className="text-center mt-5">
          <span className="font-extralight "> © 2024 Bank. Made with </span>{" "}
          <span className="text-red-500">❤ </span>
          <span className="font-extralight ">by </span>
          <span className="underline">Faizan Ali</span>.
        </p>
        <p className="text-center mt-2">
          {" "}
          <span className="font-extralight">Powered by </span>
          <span className="underline">Faizi</span>.
        </p>
      </div>
    </div>
  );
};
export default Homepage;
