import Container from "./components/Container";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col font-inter">
        <Header />
        <div className="flex bg-black flex-1">
          <Nav />
          <Container>teste</Container>
        </div>
      </div>
    </>
  );
}

export default App;
