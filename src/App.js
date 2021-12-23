import Header from "./Header";
import Sidebar from './Sidebar'
import Feed from "./Feed";
import Widgets from './Widgets'
import './App.css'
import { Fragment, useState, useContext, useEffect } from "react";
import Login2 from './components/login/Login2'
import { Navigate, Route, Routes } from "react-router";
import AuthContext from "./store/auth-context";
import { fabClasses } from "@mui/material";
import PrivateRoute from "./PrivateRoute";



function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  // const authCtx = useContext(AuthContext);
  // useEffect(() => {
  //   setLoggedIn(authCtx.isLoggedIn)

  // }, [])

  // const loggedIn = authCtx.isLoggedIn;
  const ctx = useContext(AuthContext)
  return (
    <div className='app'>
      {/* <Fragment>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login2 />} />

          <Route path='/dashboard' element={
            <PrivateRoute>
              <Fragment><Header />
                <div className='app__body'>
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div></Fragment>
            </PrivateRoute>} />

        </Routes>
      </Fragment> */}
      <Fragment><Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div></Fragment>
    </div>
  );
}

export default App;


