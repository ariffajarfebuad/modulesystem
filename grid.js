// Import Grid.js (pastikan Anda telah mengimpor pustaka ini sebelumnya)
import { Grid } from 'gridjs';

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
  },
  
const grid = new Grid({
    columns: [
      { id: 'id', name: 'ID' },
      { id: 'name', name: 'Name' },
      { id: 'age', name: 'Age' },
      { id: 'email', name: 'Email' },
    ],
    data: data,
    search: true,
    pagination: {
      enabled: true,
      limit: 10, // Jumlah item per halaman
    },
    sort: true,
    resizable: true,
    height: 'auto', // Sesuaikan dengan tinggi yang Anda inginkan
  });/ Tambahkan data lainnya di sini
];



// Render tabel Grid.js ke dalam elemen HTML dengan ID "grid-container"
grid.render(document.getElementById('grid-container'));
