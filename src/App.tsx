import { useEffect, useState } from "react";
import "./App.css";
import KeyboardLayout from "./KeyboardLayout";
import { register } from '@tauri-apps/plugin-global-shortcut';
import { LAYER_ONE } from "./keymap";



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
      <KeyboardLayout layout={LAYER_ONE} />
    </main>
  );
}

export default App;
