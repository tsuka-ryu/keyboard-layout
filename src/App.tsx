// import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";
import "./App.css";
import KeyboardLayout from "./KeyboardLayout";
import { register } from '@tauri-apps/plugin-global-shortcut';

const keyboardLayout = {
  left: {
    main: [
      [{ label: "Q" }, { label: "W" }, { label: "E" }, { label: "R" }, { label: "T" }, { label: "Y" }],
      [{ label: "A" }, { label: "S" }, { label: "D" }, { label: "F" }, { label: "G" }, { label: "H" }],
      [{ label: "Z" }, { label: "X" }, { label: "C" }, { label: "V" }, { label: "B" }, { label: "N" }]
    ],
    thumb: [{ label: "Ctrl" }, { label: "Alt" }, { label: "⌘" }]
  },
  right: {
    main: [
      [{ label: "Y" }, { label: "U" }, { label: "I" }, { label: "O" }, { label: "P" }, { label: "[" }],
      [{ label: "H" }, { label: "J" }, { label: "K" }, { label: "L" }, { label: ";" }, { label: "'" }],
      [{ label: "N" }, { label: "M" }, { label: "," }, { label: "." }, { label: "/" }, { label: "⇧" }]
    ],
    thumb: [{ label: "Space" }, { label: "Alt" }, { label: "Ctrl" }]
  }
};

function App() {
  const [lastTriggeredShortcut, setLastTriggeredShortcut] = useState<string>("I");

  useEffect(() => {
    const registerShortcuts = async () => {
      try {
        // 複数のショートカットを登録
        await register('CommandOrControl+Shift+I', () => {
          console.log('Shortcut I triggered');
          setLastTriggeredShortcut("I");
        });

        await register('CommandOrControl+Shift+O', () => {
          console.log('Shortcut O triggered');
          setLastTriggeredShortcut("O");
        });

        await register('CommandOrControl+Shift+P', () => {
          console.log('Shortcut P triggered');
          setLastTriggeredShortcut("P");
        });

        console.log('All shortcuts registered successfully');
      } catch (error) {
        console.error('Error registering shortcuts:', error);
      }
    };

    registerShortcuts();

    return () => {
      // ショートカットの登録解除はTauriが自動的に行います
    };
  }, []);

  return (
    <main className="container">
      {lastTriggeredShortcut && (
        <p style={{ color: 'white' }}>Last triggered shortcut: {lastTriggeredShortcut}</p>
      )}
      <KeyboardLayout layout={keyboardLayout} />
    </main>
  );
}

export default App;
