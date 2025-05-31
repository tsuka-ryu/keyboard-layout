// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Key from "./Key";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main className="container">
      <p>test</p>
      <Key label="A" />
      <Key label="A" />
      <Key label="A" />
      <Key label="A" />
      <Key label="A" />
      <Key label="A" />
    </main>
  );
}

export default App;
