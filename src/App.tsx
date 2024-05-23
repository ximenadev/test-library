import { Button } from 'test-library';

function App() {
  return (
    <div>
      Test Library
      <Button text="Hi" onClick={() => console.log('Hi')} />
    </div>
  );
}

export default App;
