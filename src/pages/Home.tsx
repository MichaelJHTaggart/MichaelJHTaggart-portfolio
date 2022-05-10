import { useState } from 'react';
import Spin from '../components/Spin/Spin';

const Home = () => {
  const [isSpinable, setIsSpinable] = useState(false);

  return (
    <div>
      <div className="min-h-full flex-col items-center justify-center text-center">
        <div className="min-h-full flex-col items-center justify-center text-center">
          <div>
            <div className="absolute -top-6 left-24 -z-40 bg-slate-300 w-36 h-36 rounded-full flex"></div>
            <div className="absolute top-1 -left-10 -z-20 bg-sky-200 w-60 h-60 rounded-full flex"></div>
            <div className="absolute top-36 -left-36 -z-30 bg-slate-300 w-56 h-56 rounded-full flex"></div>
            <img
              className="absolute right-16 bg-transparent"
              src="/michael.png"
              alt="michael"
            />

            <div className="absolute left-64 top-28 flex leading-normal text-left text-4xl drop-shadow-md font-thin h-48 w-38 break-all">
              WEB <br />
              DEVE- <br />
              LOPER
            </div>
          </div>

          <div className="relative top-72 flex-col">
            <h3 className="text-3xl font-thin">MichaelJHTaggart</h3>
            <button className="bg-blue-400 text-white rounded-lg w-10/12 h-14 mt-24 text-2xl">
              Shop
            </button>
            <button className="bg-transparent rounded-lg w-10/12 h-14 mt-6 border-black border-2 text-2xl">
              See Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
