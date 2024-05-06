class PrintEditionItem {
    #state = 100;
constructor (name, releaseDate, pagesCount) {
this.name = name;
this.type = null;
this.releaseDate = releaseDate;
this.pagesCount = pagesCount;
}

fix() {
this.state = this.#state * 1.5;
}

set state (newState) {
if (newState < 0) {
this.#state = 0;
} else if (newState > 100) {
this.#state = 100;
} else {
this.#state = newState;
}
}


get state() {
return this.#state;
}
}


class Magazine extends PrintEditionItem {
constructor (name, releaseDate, pagesCount) {
super (name, releaseDate, pagesCount);
   this.type = 'magazine';
}
}

class Book extends PrintEditionItem {
constructor (author, name, releaseDate, pagesCount) {
super (author, name, releaseDate, pagesCount);
   this.author = author;
   this.type = 'book';
}
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
super (author, name, releaseDate, pagesCount);
   this.type = 'novel';
}
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
super  (author, name, releaseDate, pagesCount);
   this.type = 'fantastic';
}
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
super (author, name, releaseDate, pagesCount);
   this.type = 'detective';
}
}


class Library {
constructor (name) {
this.name = 'name';
this.books = [];
}

   addBook(book) {
   if (book.state > 30) {
   this.books = [...this.books, book];
   }
   }

   findBookBy(type, value) {
   return this.books.find(item => item[type] == value) || null;
}


   
   giveBookByName (bookName) {
 const findBook = this.books.find(item => {
           if (item.name === bookName) {
               return item;
           }
       });
 if (findBook) {
   this.books.splice(this.books.findBook, 1);
     return findBook;
} else {
       return null;
   }
   } 
}


const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924));//"Мурзилка"
console.log(library.findBookBy("author", "Артур Конан Дойл"));

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Пикник на обочине");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
library.findBookBy("author", "Артур Конан Дойл").state = 10;
console.log(library.findBookBy("author", "Артур Конан Дойл")); 
library.findBookBy("author", "Артур Конан Дойл").fix();
console.log(library.findBookBy("author", "Артур Конан Дойл")); 
library.addBook(new DetectiveBook("Артур Конан Дойлс", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));