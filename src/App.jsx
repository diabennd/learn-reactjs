import "./App.css";
import FunctionComponent from "./MainConcepts/Components/FunctionComponent";
import Fetching from "./FetchingData/Fetching";
import UseEffectHook from "./MainConcepts/Hooks/UseEffectHook"
import ClassComponent from "./MainConcepts/Components/ClassComponent";

function App() {
  return (
    <>
      <FunctionComponent name="John Doe"/> {/* functional component */}
      <ClassComponent name="John Doe"/>
      <UseEffectHook />
      <Fetching />
    </>
  );
}

export default App;
