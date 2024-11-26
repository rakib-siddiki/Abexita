import { Suspense } from "react";

// Import shared components dynamically
import  Button  from "app1/Button";
const App = () => (
  <div style={{ padding: "20px" }}>
    <h1>App 2</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Button text="Click Me" onClick={() => alert("Button clicked!")} />
      {/* <Card title="Shared Card" description="This card is from App1." /> */}
    </Suspense>
  </div>
);

export default App;
