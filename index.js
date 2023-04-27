//Defining DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const bookList = document.getElementById('book-list');
const fictionDiv = document.getElementById('fiction-books');
const fashionDiv = document.getElementById('fashion-books');
const romanceDiv = document.getElementById('romance-books');
const humorDiv = document.getElementById('humor-books');
const literatureDiv = document.getElementById('literature-books');
const searchDiv = document.getElementById('search-div');




// Event listener for form submission
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Getting user input from search input field
    const searchTerm = searchInput.value;

    // Clearing previous search results
    bookList.innerHTML = '';

    // Calling Open Library API with search term
    const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Displaying search results
    if (data.numFound > 0) {
        data.docs.forEach(book => {
            const title = book.title_suggest || '';
            const author = book.author_name ? book.author_name[0] : '';
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${coverUrl}" alt="${title}">
                <p>${title}</p>`;

            bookList.appendChild(bookElement);
        });

        searchDiv.classList.add('un-ghost')
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No results found.';
        bookList.appendChild(noResultsElement);
    }
});

window.onload = function () {
    loadFictionBooks();
    loadFashionBooks();
    loadRomanceBooks();
    loadHumorBooks();
    loadLiteratureBooks();
  };
 
async function loadFictionBooks(){

    // Calling Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/fiction.json?ebooks=false&details=true&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Displaying search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${coverUrl}" alt="${title}">
                <p>${title}</p>
            `;

            fictionDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No fiction books found for now. Check later.';
        fictionDiv.appendChild(noResultsElement);
    }
};

async function loadFashionBooks(){

    // Calling Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/fashion.json?ebooks=false&details=true&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Displaying search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${coverUrl}" alt="${title}">
                <p>${title}</p>
            `;

            fashionDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No fashion books found for now. Check later.';
        fashionDiv.appendChild(noResultsElement);
    }
};


  
  async function loadRomanceBooks() {
    // Call Opening Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/romance.json?ebooks=false&details=true&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Displaying search results
    if (data.work_count > 0) {
      data.works.forEach(book => {
        const title = book.title || '';
        const author = book.authors[0].name || '';
        const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
  
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <img src="${coverUrl}" alt="${title}">
          <p>${title}</p>
        `;
  
        romanceDiv.appendChild(bookElement);
      });
    } else {
      const noResultsElement = document.createElement('p');
      noResultsElement.textContent = 'No romance books found for now. Check later.';
      romanceDiv.appendChild(noResultsElement);
    }
  };
  

  async function loadHumorBooks() {
    // Calling Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/humor.json?ebooks=false&details=true&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Displaying search results
    if (data.work_count > 0) {
      data.works.forEach(book => {
        const title = book.title || '';
        const author = book.authors[0].name || '';
        const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
  
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <img src="${coverUrl}" alt="${title}">
          <p>${title}</p>
        `;
  
        humorDiv.appendChild(bookElement);
      });
    } else {
      const noResultsElement = document.createElement('p');
      noResultsElement.textContent = 'No humor books found for now. Check later.';
      humorDiv.appendChild(noResultsElement);
    }
  };



  async function loadLiteratureBooks() {
    // Calling Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/literature.json?ebooks=false&details=true&limit=20`;
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Displaying search results
    if (data.work_count > 0) {
      data.works.forEach(book => {
        const title = book.title || '';
        const author = book.authors[0].name || '';
        const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
  
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
          <img src="${coverUrl}" alt="${title}">
          <p>${title}</p>`;
  
        literatureDiv.appendChild(bookElement);
      });
    } else {
      const noResultsElement = document.createElement('p');
      noResultsElement.textContent = 'No literature books found for now. Check later.';
      literatureDiv.appendChild(noResultsElement);
    }
  };
