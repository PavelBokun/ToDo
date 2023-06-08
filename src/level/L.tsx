import React, { useState } from 'react';
type Props = {
   
    limit: number
  }

function ProgressBar({ limit }: Props) {
    const [total,setTotal]=useState(0)
    const onHandlerTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTotal = Number(event.target.value);
        setTotal(newTotal);
    }
  const percentComplete = Math.min((total / limit) * 100, 100);
  
  const style = {
    width: `${percentComplete}%`,
    height: '20px',
    backgroundColor: percentComplete >= 100 ? 'green' : 'orange',
  };

  return (
    <div>
      <div style={style}></div>
      <div>Total: {total}</div>
    <input type="text" value={total} onChange={onHandlerTotal} />
    </div>
  );
}

export default ProgressBar;