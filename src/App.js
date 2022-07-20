import { Route, Routes }  from "react-router-dom"
import NewsDetails from "./components/newsDetails/NewsDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { auth } from "./actions/auth";

function App() {
  const login = useSelector((state)=> state.login)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(auth());
  })
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/news/:id" element={<NewsDetails />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
