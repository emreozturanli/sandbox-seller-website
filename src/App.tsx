import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <Toaster/>
      <AppRouter />
    </Provider>
  );
}

export default App;
