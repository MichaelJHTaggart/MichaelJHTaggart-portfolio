import Menu from './components/Navbar/Menu';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/Home';

//react

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from './store/actions/navbar';
import { selectNavbarState } from './store/selectors/navbar';

//router
import { Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { isOpen, isNew } = useSelector(selectNavbarState);

  //TODO: suspense to render the app once everything on the page is loaded.

  return (
    <div>
      <Navbar />
      {isOpen && <Menu slideLeft="animate-slide-in-left" />}
      {!isOpen && !isNew && <Menu slideLeft="animate-slide-out-left -z-50" />}
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/shopping" element={<Shopping />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/account" element={<Account />} />
        <Route path="/purchases" element={<Purchases />} /> */}
      </Routes>
    </div>
  );
}

export default App;
