import "./App.css";
import FunctionComponent from "./MainConcepts/Components/FunctionComponent";
import Fetching from "./FetchingData/Fetching";
import UseEffectHook from "./MainConcepts/Hooks/UseEffectHook"
import ClassComponent from "./MainConcepts/Components/ClassComponent";
import Props from "./MainConcepts/Props";
import EventHandling from "./MainConcepts/EventHandling";
import UseStateHook from "./MainConcepts/Hooks/UseStateHook";
import RouterApp from "./ReactRouter/react-router-dom/RouterApp";

function App() {
  return (
    <>
      <FunctionComponent name="John Doe"/> {/* functional component */}
      <ClassComponent name="Arthur Way"/>
      <Props name="Hasna"/>
      <UseStateHook />
      <UseEffectHook />
      <EventHandling />
      <RouterApp />
      <Fetching />
    </>
  );
}

export default App;
