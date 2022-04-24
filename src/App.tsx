import { Provider } from "@store/index";
import Routers from "@main/Routers";

function App() {
  return (
    <Provider>
      <Routers />
    </Provider>
  );
}

export default App;
