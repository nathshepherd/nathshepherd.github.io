import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageFooter } from "./components/PageFooter";
import { PageHeader } from "./components/PageHeader";
import AboutMe from "./components/sections/AboutMe";
import Container from "./components/styles/core/Container";
import Content from "./components/styles/core/Content";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Content>
          <PageHeader />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <PageFooter />
        </Content>
      </Container>
    </BrowserRouter>
  );
};

export default App;
