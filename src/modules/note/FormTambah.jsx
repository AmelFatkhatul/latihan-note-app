import { useState } from "react";

function FormTambah({ onCancel }) {
    const { handleAddData } = useNoteContext();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
  
    const handleSubmit = () => {
      handleAddData(title, note);
      setTitle('');
      setNote('');
      onCancel();
    };
    
    return (
        <div className="container" >
            <div className='container flex flex-col'>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder='title'
                    name='title'
                    className="input"
                />

                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    name="note"
                    id=""
                    cols="30"
                    rows="5"
                    placeholder='note'
                    className="textarea">
                </textarea>

                <button onClick={() => handleSubmit()} className="bg-blue-400 text-black text-lg rounded-lg px-5 py-3 mt-4" >Add Note</button>
            </div>
        </div>
    )
}

export default FormTambah;