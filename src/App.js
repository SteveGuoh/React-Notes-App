import Header from "./components/NoteComponents/Header";
import Notes from "./components/NoteComponents/Notes";
import "./components/css/App.css";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
    </div>
  );
}
