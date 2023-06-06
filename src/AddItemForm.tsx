import { PersonAdd, TextFieldsOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button/Button';
import IconButton from '@mui/material/IconButton/IconButton';
import TextField from '@mui/material/TextField/TextField';
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

 export type AddItemFormPropsType = {
    addItem: (title: string) => void
    label:string
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div>
        <TextField 
        label={'Type value'}
        variant={'outlined'}
        value={title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}
               className={error ? "error" : ""}
        />
       
        <IconButton  onClick={addItem}>
        <PersonAdd />
        </IconButton>
        {/* <button onClick={addItem}>+</button> */}

        {error && <div className="error-message">{error}</div>}
    </div>
}
