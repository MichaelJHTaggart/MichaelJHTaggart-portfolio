import Menu from './components/Navbar/Menu';
import { Navbar } from './components/Navbar/Navbar';
// import { Home } from './pages/Home';

//react
import { lazy, Suspense } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setNavbar } from './store/actions/navbar';
import { selectNavbarState } from './store/selectors/navbar';

//router
import { Routes, Route } from 'react-router-dom';

function App() {
  const Home = lazy(() => import('./pages/Home'));

  const dispatch = useDispatch();
  const { isOpen } = useSelector(selectNavbarState);

  return (
    <div>
      <Navbar />
      {isOpen && <Menu slideLeft="animate-slide-in-left" />}
      {!isOpen && <Menu slideLeft="animate-slide-out-left" />}

      {/* <Routes> */}
      {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      {/* <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <>
                    <img
                      className="animate-pulse rounded-full"
                      src="/logo512.png"
                    />
                  </>
                }
              >
                <Home />
              </Suspense>
            }
          /> */}
      {/* <Route path="/shopping" element={<Shopping />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/account' element={<Account />} />
        <Route path='/purchases' element={<Purchases />} /> */}
      {/* </Routes> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}

export default App;
