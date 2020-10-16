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

function addBookToLibrary(asd) {
  myLibrary.push(asd);
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

  td1.textContent = title;
  td2.textContent = author;
  td3.textContent = page;
  td4.textContent = readed;

  deleteButton.textContent = 'Delete book';
  deleteButton.className = 'delete';

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(deleteButton);

  bookTable.appendChild(tr);

  const createdBook = new Book(title, author, page, readed);

  addBookToLibrary(createdBook);

  console.log(myLibrary);
});

const deleteButtons = document.querySelector('#book-table tr');

deleteButtons.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    const th = e.target.parentElement;
    deleteButtons.removeChild(th);
    console.log(deleteButtons);
  }
});

