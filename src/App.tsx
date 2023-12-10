import { PageFooter } from "./components/PageFooter";
import { PageHeader } from "./components/PageHeader";
import Container from "./components/styles/core/Container";
import Content from "./components/styles/core/Content";
import { PageSetup } from "./components/install";

const App = () => {
  const opts = PageSetup();
  return (
    <Container>
      <Content>
        <PageHeader navigateTo={opts.navigateTo}/>
        {opts.page}
        <PageFooter />
      </Content>
    </Container>
  );
};

export default App;

