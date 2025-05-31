// import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import KeyboardLayout from "./KeyboardLayout";

function App() {
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main className="container">
      <KeyboardLayout />
    </main>
  );
}

export default App;
