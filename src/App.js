import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import Faq from './pages/faq';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import { useState } from "react";
import JSONDATA from "./MOCK_DATA.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import 'antd/dist/antd.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
      <input
        type="text"
        placeholder="Search for help"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return; // this returns evverything; val is the entire json data
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>
              {/* {val.first_name}
              <img src={val.icon} /> */}
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={val.icon} />
                <Card.Body>
                  <Card.Title>{val.first_name}</Card.Title>
                  <Card.Text>Click below button to view video</Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://www.youtube.com/watch?v=V_p0rt9U3K4";
                    }}
                  >
                    View
                  </Button>
                </Card.Body>
              </Card>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
