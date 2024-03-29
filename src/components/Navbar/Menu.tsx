import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbar } from '../../store/actions/navbar';
// import { selectNavbarState } from '../../store/selectors/navbar';

interface Props {
  slideLeft: string;
}

const Menu: FC<Props> = ({ slideLeft }) => {
  const [image, setImage] = useState(
    'lg:bg-[url(https://source.unsplash.com/random/800x600)]'
  );
  const dispatch = useDispatch();

  //TODO: When authentication is complete check if user is signed in and show alternative routes depending on that.

 
  //TODO: The background is dark when menu is open

  return (
    <div
      className={`absolute ${image} bg-cover min-h-[93.6%] right-0 top-15 min-h-0 w-4/6 lg:w-2/5 bg-gradient-to-tr from-violet-300 to-fuchsia-300 to-blue-300 hover:login-bg p-12 ${slideLeft} z-50`}
    >
      <ul className="text-white ">
        <li
          onMouseEnter={() => {
            setImage(
              'lg:hover:bg-[url(https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)]'
            );
          }}
          onMouseLeave={() => {
            setImage('lg:bg-[url(https://source.unsplash.com/random/800x600)]');
          }}
          className="py-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-waving-hand rounded-lg px-4 active:animate-pulse"
        >
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
