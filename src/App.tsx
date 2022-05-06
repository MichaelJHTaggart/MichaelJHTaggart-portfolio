import Menu from './components/Navbar/Menu';
import { Navbar } from './components/Navbar/Navbar';

import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from './store/actions/navbar';
import { selectNavbarState } from './store/selectors/navbar';

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectNavbarState);

  return (
    <div className="min-h-full">
      <Navbar />

      {isOpen ? (
        <Menu slideLeft="animate-slide-in-left" />
      ) : (
        <Menu slideLeft="animate-slide-out-left" />
      )}

      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
