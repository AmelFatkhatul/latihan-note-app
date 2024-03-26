import { createContext, useContext, useEffect, useState } from "react";
import { addNote, deleteNote, editNote, tampilkan } from "../config/Api";

// nilai default 
const iniNoteContext = {
  notes: [],
  currentNoteId: null,
  handleFetchData: () => {},
  handleAddData: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
  fetchData: () => {},
  cancelEdit: () => {},
  Edit: () => {}
}

// Buat custom hook untuk menggunakan konteks
export const useNoteContext = () => useContext(NoteContext);

// Buat Provider untuk menyediakan nilai konteks
export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(null);

  const handleFetchData = async () => {
    const apiFetch = await tampilkan();
    setNotes(apiFetch.data.data.notes ?? null);
  };

  const handleAddData = async (title, content) => {
    await addNote(title, content);
    handleFetchData();
  };

  const handleUpdate = async (id, title, content, writer) => {
    await editNote(id, title, content, writer);
    handleFetchData();
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    handleFetchData();
  };

  const Edit = (id) => {
    setCurrentNoteId(id);
  };

  const cancelEdit = () => {
    setCurrentNoteId(null);
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <NoteContext.Providerz
      value={{
        notes,
        currentNoteId,
        handleAddData,
        handleUpdate,
        handleDelete,
        Edit,
        cancelEdit,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

// }