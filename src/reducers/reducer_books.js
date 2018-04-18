// creates the reducer that returns an array of books
// this state can be accessed by any component that this file is imported into
export default function() {

    return [
        { title : 'Teachings of Don Juan', pages: 101 },
        { title: 'The Order of the Phoenix', pages: 101 },
        { title: 'The Push', pages: 101 },
        { title: 'Dirtbag', pages: 101 }
    ];
};