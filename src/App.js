import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="Container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blogs/:id" element ={<BlogDetails />} />
          </Routes>
        </div>
          <CreateBlog />
      </div>
    </BrowserRouter>
  );
}
export default App;