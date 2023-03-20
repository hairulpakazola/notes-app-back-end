const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  // routes Menyimpan data notes
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  // routes Menampilkan data notes
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  // routes Menampilkan isi data notes
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  // routes Mengedit isi data notes
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  // routes Menghapus data notes
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
