class Book {
  private static nextId = 1;
  public readonly id: number;
  public title: string;
  public author: string;
  public isAvailable: boolean;

  constructor(title: string, author: string) {
    this.id = Book.nextId++;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  lend(): void {
    this.isAvailable = false;
  }

  return(): void {
    this.isAvailable = true;
  }

  toString(): string {
    return `${this.id}: "${this.title}" by ${this.author} - ${this.isAvailable ? 'Available' : 'Not Available'}`;
  }
}

class Member {
  private static nextId = 1;
  public readonly id: number;
  public name: string;
  public borrowedBooks: Book[] = [];

  constructor(name: string) {
    this.id = Member.nextId++;
    this.name = name;
  }

  borrowBook(book: Book): void {
    this.borrowedBooks.push(book);
  }

  returnBook(book: Book): void {
    this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
  }

  toString(): string {
    return `${this.id}: ${this.name} - Borrowed Books: ${this.borrowedBooks.map(b => `"${b.title}"`).join(', ') || 'None'}`;
  }
}

class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(title: string, author: string): void {
    const book = new Book(title, author);
    this.books.push(book);
    console.log(`Added book: ${book.toString()}`);
  }

  registerMember(name: string): void {
    const member = new Member(name);
    this.members.push(member);
    console.log(`Registered member: ${member.toString()}`);
  }

  lendBook(bookId: number, memberId: number): void {
    const book = this.books.find(b => b.id === bookId);
    const member = this.members.find(m => m.id === memberId);

    if (!book || !member) {
      console.log("Invalid book or member ID.");
      return;
    }

    if (!book.isAvailable) {
      console.log(`Book "${book.title}" is not available.`);
      return;
    }

    book.lend();
    member.borrowBook(book);
    console.log(`Book "${book.title}" lent to ${member.name}.`);
  }

  returnBook(bookId: number, memberId: number): void {
    const book = this.books.find(b => b.id === bookId);
    const member = this.members.find(m => m.id === memberId);

    if (!book || !member) {
      console.log("Invalid book or member ID.");
      return;
    }

    book.return();
    member.returnBook(book);
    console.log(`${member.name} returned "${book.title}".`);
  }

  listBooks(): void {
    console.log("\n📚 Book List:");
    this.books.forEach(book => console.log(book.toString()));
  }

  listMembers(): void {
    console.log("\n👥 Member List:");
    this.members.forEach(member => console.log(member.toString()));
  }
}

const library = new Library();

library.addBook("1984", "George Orwell");
library.addBook("The Pragmatic Programmer", "Andy Hunt");
library.registerMember("Alice");
library.registerMember("Bob");

library.lendBook(1, 1);
library.lendBook(2, 2);

library.listBooks();
library.listMembers();

library.returnBook(1, 1);

library.listBooks();
library.listMembers();

