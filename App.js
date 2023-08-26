import { PaperProvider } from "react-native-paper";
import MainApp from "./MainApp";
import TodoNameProvider from "./contexts/TodoNameProvider";
import WarningsContextProvider from "./contexts/WarningsContextProvider";

export default function App() {
  return (

    <WarningsContextProvider>

      <TodoNameProvider>
        
        <PaperProvider>

          <MainApp />

        </PaperProvider>


      </TodoNameProvider>

    </WarningsContextProvider>



  );
}
