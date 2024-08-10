
import Header from './Component/Header/Header';
import classNames from 'classnames/bind';
import styles from './App.module.scss';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Router/Router.jsx';

const cx = classNames.bind(styles)
function App() {
  return (
    <>
      <Router>
      <div className={cx('App')}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={
                <Page />
            }
            />;
          })}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
