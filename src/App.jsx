import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/imgComp";

function App() {
  return (
    <div className="main-container">
      <ButtonComponent text="Aggiungi" />
      <ImageComponent />
    </div>
  );
}

export default App;
