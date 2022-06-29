import Header from "./Components/Header";
import Prototypes from "./Components/Prototypes";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
