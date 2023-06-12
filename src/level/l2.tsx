import React, { useState } from 'react';
import ProgressBar from './L';
import s from "./L.module.css";

function App2() {
  const [limit, setLimit] = useState<number>(290000);
  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
  };
  return (
    <div className={s.all}>
      <h1>Процент выполнения плана.</h1>
      <ProgressBar  limit={290000} onLimitChange={handleLimitChange}   />
    </div>
  );
}

export default App2;