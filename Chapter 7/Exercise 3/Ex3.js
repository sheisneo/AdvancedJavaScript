// Exercise 3
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
Book.prototype.describe = function() {
  return `${this.title} by ${this.author}`;
};
let novel = new Book("1984", "George Orwell");
console.log(novel.describe());
