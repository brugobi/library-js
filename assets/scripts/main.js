let myLibrary = [];

function Book(title, author, page, readed) {

  if (readed === 'read') {
    readed = true;
  } else {
    readed = false;
  }

  this.title = title
  this.author = author
  this.page = page
  this.readed = readed
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const bookForm = document.forms['book-form'];
const bookTable = document.querySelector('#book-table');

bookForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = bookForm.querySelector('#title').value;
  const author = bookForm.querySelector('#author').value;
  const page = bookForm.querySelector('#page').value;
  const readed = bookForm.querySelector('#read').value;

  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const deleteButton = document.createElement('button');
  const readButton = document.createElement('button');

  td1.textContent = title;
  td2.textContent = author;
  td3.textContent = page;
  td4.textContent = readed;

  deleteButton.textContent = 'Delete book';
  deleteButton.className = 'delete';
  readButton.className = 'readButton';
  td4.id = 'statusRead';

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(deleteButton);
  tr.appendChild(readButton);

  bookTable.appendChild(tr);

  const createdBook = new Book(title, author, page, readed);

  addBookToLibrary(createdBook);

  console.log(myLibrary);
});

const deletedButton = document.querySelector('#book-table');

deletedButton.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    const tr = e.target.parentElement;
    deletedButton.removeChild(tr);
    console.log(deletedButton);
  }

  if (e.target.className == 'readButton') {
    const tr = e.target.getElementById("statusRead");
    if (tr.innerHTML == 'read') {
      tr.innerHTML == 'already readed';
    } else {
      tr.innerHTML == 'read';
    }
  }
});



