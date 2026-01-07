import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import GalleryCollections from "./Components/GalleryCollections";

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME PAGE → WITH MAIN HEADER */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />

        {/* GALLERY COLLECTIONS → WITHOUT MAIN HEADER */}
        <Route
          path="/gallery/collections"
          element={<GalleryCollections />}
        />

      </Routes>
    </Router>
  );
}

export default App;
