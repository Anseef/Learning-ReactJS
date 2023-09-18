import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <Navbar />
        <Home />
      </div>
      <CreateBlog />
    </div>
  );
}
export default App;