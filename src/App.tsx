import Container from "./components/styles/core/Container";
import Content from "./components/styles/core/Content";
import PageHeaderContents from "./components/PageHeader";
import PageFooterContents from "./components/PageFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/sections/AboutMe";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Content>
          <PageHeaderContents />
          <Routes>
            <Route path="/portfolio/" element={<AboutMe />} />
            <Route path="/portfolio/experience" element={<Experience />} />
            <Route path="/portfolio/projects" element={<Projects />} />
          </Routes>
          <PageFooterContents />
        </Content>
      </Container>
    </BrowserRouter>
  );
};

export default App;
