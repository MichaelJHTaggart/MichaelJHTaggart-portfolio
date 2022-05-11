import { useState } from 'react';
// import Spin from '../components/Spin/Spin';

const Home = () => {
  // const [isSpinable, setIsSpinable] = useState(false);

  return (
    <div className="h-full w-full">
      <div className="h-screen flex-col items-center justify-center text-center">
        <div className="h-2/6 w-full">
          <div className="absolute -top-6 left-24 -z-40 bg-slate-400 w-36 h-36 rounded-full flex"></div>
          <div className="absolute top-1 -left-10 -z-20 bg-blue-200 w-60 h-60 rounded-full drop-shadow-xl flex"></div>
          <div className="absolute top-36 -left-36 -z-30 bg-slate-400 w-56 h-56 rounded-full flex"></div>

          <img
            className="object-contain lg:left-3 lg:h-5/12 lg:w-5/12 md:w-7/12 md:h-7/12 md:left-14 absolute right-16 bg-transparent"
            src="/michael.png"
            alt="michael"
          />

          <div className="absolute right-8 top-20 flex leading-normal text-left text-4xl drop-shadow-md font-thin h-48 w-38 break-all lg:text-8xl lg:right-14 lg:h-1/2 lg:w-4/12 md:text-6xl md:h-1/4 md:w-3/12  md:right-14">
            WEB <br />
            DEVE- <br />
            LOPER
          </div>
        </div>

        <div className="relative top-16 h-4/6 lg:mt-20 flex-col">
          <h3 className="text-3xl font-thin lg:text-6xl">MichaelJHTaggart</h3>
          <button className="hover:bg-blue-300 bg-blue-600 text-white rounded-lg w-10/12 h-14 mt-16 lg:mt-8 text-2xl">
            Shop
          </button>
          <button className="hover:bg-slate-300 bg-transparent rounded-lg w-10/12 h-14 mt-6 border-black border-2 text-2xl">
            See Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
