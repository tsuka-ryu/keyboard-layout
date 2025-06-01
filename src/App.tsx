import { useEffect, useState } from "react";
import "./App.css";
import KeyboardLayout from "./KeyboardLayout";
import { register } from "@tauri-apps/plugin-global-shortcut";
import { LAYER_ONE, LAYER_TWO } from "./keymap";

function App() {
  const [lastTriggeredShortcut, setLastTriggeredShortcut] =
    useState<string>("J");

  useEffect(() => {
    const registerShortcuts = async () => {
      try {
        await register("CommandOrControl+Shift+J", () => {
          console.log("Shortcut J triggered");
          setLastTriggeredShortcut("J");
        });

        await register("CommandOrControl+Shift+K", () => {
          console.log("Shortcut K triggered");
          setLastTriggeredShortcut("K");
        });

        await register("CommandOrControl+Shift+L", () => {
          console.log("Shortcut L triggered");
          setLastTriggeredShortcut("L");
        });

        console.log("All shortcuts registered successfully");
      } catch (error) {
        console.error("Error registering shortcuts:", error);
      }
    };

    registerShortcuts();

    return () => {
      // ショートカットの登録解除はTauriが自動的に行います
    };
  }, []);

  return (
    <main className="container">
      {lastTriggeredShortcut === "J" && <KeyboardLayout layout={LAYER_ONE} />}
      {lastTriggeredShortcut === "K" && <KeyboardLayout layout={LAYER_TWO} />}
    </main>
  );
}

export default App;
