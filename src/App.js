import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/">
          <Route index element={<PostList />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
