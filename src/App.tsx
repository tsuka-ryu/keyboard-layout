// import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import "./App.css";
import KeyboardLayout from "./KeyboardLayout";
import { register } from '@tauri-apps/plugin-global-shortcut';

function App() {
  const [shortcutTriggered, setShortcutTriggered] = useState(false);

  useEffect(() => {
    const registerShortcut = async () => {
      try {
        await register('CommandOrControl+Shift+C', () => {
          console.log('Shortcut triggered');
          setShortcutTriggered(true);
        });
        console.log('Shortcut registered successfully');
      } catch (error) {
        console.error('Error registering shortcut:', error);
      }
    };

    registerShortcut();

    // クリーンアップ関数
    return () => {
      // ショートカットの登録解除はTauriが自動的に行います
    };
  }, []);

  return (
    <main className="container">
      <p>{shortcutTriggered && "Shortcut Triggered!"}</p>
      <KeyboardLayout />
    </main>
  );
}

export default App;
