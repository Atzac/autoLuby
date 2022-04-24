import TesteProvider from "@store/teste/testeContext";
import Routers from "@main/Routers";

function App() {
  return (
    <TesteProvider>
      <Routers />
    </TesteProvider>
  );
}

export default App;
