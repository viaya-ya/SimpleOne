import "./App.css";
import Header from './UI/Header/Header.jsx'
import Aside from './UI/Content/Aside/Aside.jsx'
import Section from './UI/Content/Section/Section.jsx'
import Main from './UI/Content/Main/Main.jsx'

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Aside></Aside>
        <Section></Section>
        <Main></Main>
      </main>
    </>
  );
}

export default App;
