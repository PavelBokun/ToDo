import React from 'react';
import ProgressBar from './L';

function App2() {
  return (
    <div>
      <h1>Процент выполнения плана.</h1>
      <ProgressBar  limit={290000}  />
    </div>
  );
}

export default App2;