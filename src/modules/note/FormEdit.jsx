import React, { useState, useEffect } from 'react';
import { useNoteContext } from './NoteContext';


function FormEdit({ onCancel, targetValue }) {
    const { handleUpdate } = useNoteContext();
    const [title, setTitle] = useState(targetValue ? targetValue.title : '');
    const [note, setNotes] = useState(targetValue ? targetValue.content : '');
    const [writer, setWriter] = useState(targetValue ? targetValue.writer : '');

    const handleEdit = () => {
        const konfirm = window.confirm('Apakah Anda Yakin ?');
        if (konfirm) {
            handleUpdate(targetValue.id, title, note, writer);
            setTitle('');
            setNotes('');
            setWriter('');
            onCancel();
        }
    };

    useEffect(() => {
        if (!targetValue) {
            setTitle('');
            setNotes('');
            setWriter('');
            onCancel();
        }
    }, [targetValue]);
    
    return (
        <div className="container" >
            <div className='flex flex-col'>

                <input
                    value={writer}
                    type="hidden"
                    className="input"
                />

                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className='input'
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className='textarea'>
                </textarea>

                <input type="text" />

                <button
                    onClick={handleEdit}
                    className="bg-green-500 text-black text-lg rounded-lg px-5 py-3 mt-4 hover:bg-green-300">
                    Edit Note
                </button>
                <button

                    onClick={() => onCancel()}
                    className="bg-red-500 text-black text-lg rounded-lg px-5 py-3 mt-2">
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default FormEdit;