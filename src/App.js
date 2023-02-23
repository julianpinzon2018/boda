import Invitacion from "./components/invitacion";
import ConoceVillavicencio from "./components/conoceVillavicencio";
import Itinerario from "./components/itinerario";
import Pasos from "./components/pasos";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Invitacion />
      <Pasos />
      <ConoceVillavicencio />
      <Itinerario />
    </Layout>
  );
}

export default App;
