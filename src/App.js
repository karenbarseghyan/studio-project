import { Route, Routes }  from "react-router-dom"
import NewsDetails from "./components/news/NewsDetails";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";

function App() {
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
