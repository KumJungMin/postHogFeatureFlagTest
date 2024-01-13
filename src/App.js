import { useFeatureFlagEnabled } from "posthog-js/react";

function App() {
  const flagEnabled = useFeatureFlagEnabled("flag-test");

  return (
    <div className="App">
      {flagEnabled ? "Flag is enabled" : "Flag is disabled"}
    </div>
  );
}

export default App;
