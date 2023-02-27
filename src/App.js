import Invitation from "./components/Invitation";
import KnowVillavicencio from "./components/knowVillavicencio";
import Itinerary from "./components/itinerary";
import Steps from "./components/steps";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Invitation />
      <Steps />
      <KnowVillavicencio />
      <Itinerary />
    </Layout>
  );
}

export default App;
