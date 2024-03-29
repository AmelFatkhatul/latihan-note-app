import React from 'react';
import { useNoteContext } from './NoteContext';


function NoteItem({ id, title, content }) {
  const { handleDelete, Edit } = useNoteContext();

  const handleDeleteNote = () => {
    const konfirm = window.confirm('Apakah Anda Yakin Ingin Menghapusnya?');
    if (konfirm) {
      handleDelete(id);
      alert('Berhasil Menghapus');
    }
  };

  return (
    <div>
      <div className="note bg-[#FFFFEC] m-5 rounded w-[340px] h-auto p-4  relative">
        <button
          onClick={handleDeleteNote}
          className="delete absolute right-4 font-bold text-2xl top-1 text-red-500"
        >
          x
        </button>
        <div className="text-lg text-black font-bold "> {title}</div>
        <p className="text-black text-serif">{content}</p>
        <button
          className="text-white bg-green-500 px-3 py-1 inline-block mt-5 rounded shadow hover:bg-green-700"
          onClick={() => Edit(id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default NoteItem;