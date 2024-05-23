import { Button } from '../lib/main';

function App() {
  return (
    <div>
      Test Library
      <Button text="Hi" onClick={() => console.log('Hi')} />
    </div>
  );
}

export default App;
