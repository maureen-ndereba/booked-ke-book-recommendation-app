//Define DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-bar');
const bookList = document.getElementById('book-list');
const fictionDiv = document.getElementById('fiction-books');
const fashionDiv = document.getElementById('fashion-books');
const romanceDiv = document.getElementById('romance-books');
const humorDiv = document.getElementById('humor-books');
const literatureDiv = document.getElementById('literature-books');
const searchH2 = document.getElementById('search-h2');
const mainBody = document.getElementById('maincontainer');
const loadingIcon = document.getElementById('loading-div');
const emailInput = document.getElementById('email-input');
const emailButton = document.getElementById('email-button');



const input = document.querySelector('input[type="email"]');


// Function to show loading icon
function showLoadingIcon() {
    loadingIcon.style.display = 'flex';
}

// Function to hide loading icon
function hideLoadingIcon() {
    loadingIcon.style.display = 'none';
}


// Event listener for form submission
searchInput.addEventListener('keyup', async (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {

        // Get user input from search input field
        const searchTerm = searchInput.value;

        // Clear previous search results
        bookList.innerHTML = '';

        // Call Open Library API with search term
        const apiUrl = `https://openlibrary.org/search.json?q=${searchTerm}`;
        const data = await fetchData(apiUrl);

        // Display search results
        if (data.numFound > 0) {
            data.docs.forEach(book => {
                const title = book.title || '';
                const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

                const bookElement = document.createElement('div');
                bookElement.classList.add('book');
                bookElement.innerHTML = `
                <img src="${coverUrl}" alt="${title}">
                <p>${title}</p>`;

                bookList.appendChild(bookElement);
            });

            bookList.classList.add('un-ghost')
            searchH2.classList.add('un-ghost')
        } else {
            const noResultsElement = document.createElement('p');
            noResultsElement.textContent = 'No results found.';
            bookList.appendChild(noResultsElement);
        }
    }
});

function createBooksDisplayDiv(title, author, publishedYear, coverUrl){
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    const img = document.createElement("img");
    img.src = coverUrl;
    img.alt = title;

    //add event listener
    img.addEventListener('click', function () {
        //add pop-up UI
        showBookDetails(title, author, publishedYear, coverUrl)
    });

    bookElement.appendChild(img);

    const bookTitle = document.createElement("p");
    bookTitle.textContent = title;
    bookElement.appendChild(bookTitle);
    return bookElement;
}

async function fetchData(apiUrl) {
    showLoadingIcon(); // Show loading icon before making API call
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    } finally {
        hideLoadingIcon(); // Hide loading icon after data is fetched
    }
}

window.onload = function () {
    loadFictionBooks();
    loadFashionBooks();
    loadRomanceBooks();
    loadHumorBooks();
    loadLiteratureBooks();
};

async function loadFictionBooks() {

    // Call Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/fiction.json?ebooks=false&details=true&limit=20`;
    const data = await fetchData(apiUrl);


    // Display search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const publishedYear = book.first_publish_year;
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            const bookElement = createBooksDisplayDiv(title, author, publishedYear, coverUrl);
            fictionDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No fiction books found for now. Check later.';
        fictionDiv.appendChild(noResultsElement);
    }
};

async function loadFashionBooks() {

    // Call Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/fashion.json?ebooks=false&details=true&limit=20`;
    const data = await fetchData(apiUrl);


    // Display search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const publishedYear = book.first_publish_year;
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            const bookElement = createBooksDisplayDiv(title, author, publishedYear, coverUrl);

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
    const data = await fetchData(apiUrl);


    // Display search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const publishedYear = book.first_publish_year;
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            const bookElement = createBooksDisplayDiv(title, author, publishedYear, coverUrl);

            romanceDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No romance books found for now. Check later.';
        romanceDiv.appendChild(noResultsElement);
    }
};


async function loadHumorBooks() {
    // Call Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/humor.json?ebooks=false&details=true&limit=20`;
    const data = await fetchData(apiUrl);


    // Display search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const publishedYear = book.first_publish_year;
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            const bookElement = createBooksDisplayDiv(title, author, publishedYear, coverUrl);


            humorDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No humor books found for now. Check later.';
        humorDiv.appendChild(noResultsElement);
    }
};



async function loadLiteratureBooks() {
    // Call Open Library API with subject term and additional query parameters 
    const apiUrl = `https://openlibrary.org/subjects/literature.json?ebooks=false&details=true&limit=20`;
    const data = await fetchData(apiUrl);


    // Display search results
    if (data.work_count > 0) {
        data.works.forEach(book => {
            const title = book.title || '';
            const author = book.authors[0].name || '';
            const publishedYear = book.first_publish_year;
            const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
            const bookElement = createBooksDisplayDiv(title, author, publishedYear, coverUrl);


            literatureDiv.appendChild(bookElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'No literature books found for now. Check later.';
        literatureDiv.appendChild(noResultsElement);
    }
};

function showBookDetails(title, author, publishedYear, imageUrl) {
    //remove pop up is any is displayed
    console.log(author);
    const activePopupDiv = document.getElementById('popup-div');
    if (mainBody.contains(activePopupDiv)){
        activePopupDiv.remove();
    }

    // Create the pop-up container
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    popupContainer.setAttribute('id', 'popup-div');

    // Create the content div to hold the book details and image
    const content = document.createElement("div");
    content.classList.add("content");

    // Create the book title element
    const bookTitle = document.createElement("h3");
    bookTitle.innerText = title;

    // Create the book author element
    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Author: ${author}`;

    // Create the book published year element
    const bookPublishedYear = document.createElement("p");
    bookPublishedYear.innerText = `Published Year: ${publishedYear}`;

    // Create the book image element
    const bookImage = document.createElement("img");
    bookImage.src = imageUrl;

    // Append the book details and image elements to the content div
    content.appendChild(bookTitle);
    content.appendChild(bookAuthor);
    content.appendChild(bookPublishedYear);
    content.appendChild(bookImage);

    // Create the cancel button
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", () => {
        popupContainer.remove();
    });

    // Append the content div and cancel button to the pop-up container
    popupContainer.appendChild(content);
    popupContainer.appendChild(cancelButton);

    // Append the pop-up container to the document body
    mainBody.appendChild(popupContainer);
}

//Event Listener for Email Submission
emailButton.addEventListener('click', function (event) {
    event.preventDefault();
    submitEmail();
});


emailInput.addEventListener('keyup', async (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
        submitEmail();
    }

});

function submitEmail() {
    const email = emailInput.value;

    //Validate input
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        // email is not valid
        alert("Please enter a valid email address.");
    } else {
        // email is valid
        alert(`Welcome to the fam, ${email}!`);
        emailInput.value = '';
    }

}
