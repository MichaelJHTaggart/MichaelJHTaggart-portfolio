import { useState } from 'react';
import Spin from '../components/Spin/Spin';

const Home = () => {
  const [isSpinable, setIsSpinable] = useState(false);

  return (
    <div className="bg-slate-200 flex">
      <img
        className="relative right-20 bg-transparent "
        src="/michael.png"
        alt="michael"
      />
      <span className="relative break-all -top-28 -left-32 w-48 h-48 ">
        {isSpinable ? (
          <Spin />
        ) : (
          <div
            onClick={() => setIsSpinable(true)}
            className="hover:animate-pulse"
          >
            {/* <h1 className="font-[Cinzel] font-thin decoration-8 text-5xl">
              Web Developer
            </h1> */}
          </div>
        )}
      </span>
    </div>
  );
};

export default Home;
