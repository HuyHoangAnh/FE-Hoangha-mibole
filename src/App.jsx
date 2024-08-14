import Header from "./Component/Header/Header";
import classNames from "classnames/bind";
import styles from "./App.module.scss";
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Router/Router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const cx = classNames.bind(styles);
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <div className={cx("App")}>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Routes>
            <ToastContainer />
          </div>
        </QueryClientProvider>
        ,
      </Router>
    </>
  );
}

export default App;
