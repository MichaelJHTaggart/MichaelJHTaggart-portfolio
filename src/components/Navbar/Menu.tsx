import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from '../../store/actions/navbar';
import { selectNavbarState } from '../../store/selectors/navbar';

interface Props {
  slideLeft: string;
}

const Menu: FC<Props> = ({ slideLeft }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectNavbarState);

  // When authentication is complete check if user is signed in and show alternative routes depending on that.

  //Every hover changes the background picture

  return (
    <div
      className={`absolute lg:hover:bg-[url(https://source.unsplash.com/random/800x600)] bg-cover right-0 top-15 min-h-full w-4/6 lg:w-2/5 bg-gradient-to-tr from-violet-300 to-fuchsia-300 to-blue-300 hover:login-bg p-12 ${slideLeft}`}
    >
      <ul className="text-white ">
        <li className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse">
          Login
        </li>
        <li className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse">
          Register
        </li>
        <li className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse">
          Home
        </li>
        <li className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse">
          Shopping
        </li>
        <li className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse">
          Projects
        </li>
      </ul>
      <button
        className="bg-gray-300 hover:bg-slate-700 text-white font-bold my-4 py-2 px-8 rounded"
        onClick={() => dispatch(setNavbar(false))}
      >
        Close
      </button>
      {/* <ul>
     <li>Home</li>
     <li>Shopping</li>
     <li>Projects</li>
     <li>Purchases</li>
     <li>Account</li>
    </ul> */}
    </div>
  );
};

export default Menu;
