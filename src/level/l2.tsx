import React from 'react';
import ProgressBar from './L';
import s from "./L.module.css";

function App2() {
  return (
    <div className={s.all}>
      <h1>Процент выполнения плана.</h1>
      <ProgressBar  limit={290000}  color={'red'} />
    </div>
  );
}

export default App2;