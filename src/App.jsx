import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import SearchResults from "./pages/SearchResults";
import Header from "./component/Header";
import Feed from "./pages/Feed";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch/:id" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
