import React, { useState } from 'react';
import s from "./L.module.css";
import Button from '@mui/material/Button/Button';
import TextField from '@mui/material/TextField/TextField';
// import React from 'react';
export type Props = {
 
    limit: number;
    onLimitChange: (limit: number) => void;
  }

function ProgressBar({ limit, onLimitChange}: Props) {
  const [total, setTotal] = useState<number>(0);
  const [rez, setRez] = useState<number>(0);
   const[limitnew,setLimit]=useState<number>(0)
    const persent='%'
    const onHandlerTotal = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTotal = Number(event.target.value);
        let percentage = (newTotal / limit * 100).toFixed(2);
        setTotal(newTotal);
        setRez(parseFloat(percentage))
    }
    const onHandlerLimit=(event: React.ChangeEvent<HTMLInputElement>)=>{
           const newLimit=Number(event.currentTarget.value)
      setLimit(newLimit);
      onLimitChange(newLimit);
    }

    const onClear=()=>{
      setTotal(0)
      setRez(0)
    }
  const percentComplete = Math.min((total / limit) * 100, 100);
  
  const style = {
    width: `${percentComplete}%`,
    height: '25px',
    backgroundColor: percentComplete >= 80? 'green' : 'orange',
    border:'2px solid black',
    borderRadius:'5px',
    marginBottom:'20px'
      };
      
      // const show=()=>{
      //   const newtotal2=percentComplete
      //   if(newtotal2>=100){
      //     setRez(newtotal2)
      //   }
      // }
      // let percentage = (15000 / 290000 * 100).toFixed(2) + '%';
      

  return (
    <div >
      <div className={s.red}>{rez} {persent}</div>
      <div style={style}></div>
      <div className={s.manual}>
      {/* <div className={s.total} >Total: {total}</div> */}
      <div className={s.total} ><p>Введите сумму</p></div>
      <TextField id="outlined-basic"  variant="outlined" value={total} onChange={onHandlerTotal} />
    {/* <input type="text" value={total}  placeholder='в ведите число' onChange={onHandlerTotal} /> */}
    <Button className={s.Button} variant="contained" size="small" color="success" onClick={onClear}>Clean</Button>
    {/* <button className={s.button} onClick={onClear}>Clean</button> */}
    {/* <TextField id="outlined-basic"  variant="outlined" value={limitnew} onChange={onHandlerLimit} />
         */}
         <div className={s.total}><p>Введите лимит</p></div>
        <TextField id="outlined-basic" variant="outlined" value={limitnew} onChange={onHandlerLimit} />
        <Button className={s.Button} variant="contained" size="small" color="success" >Установить сумму</Button>
      </div>
      
    </div>
  );
}

export default ProgressBar;