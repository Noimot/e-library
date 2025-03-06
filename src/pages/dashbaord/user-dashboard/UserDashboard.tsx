import DashboardLayout from "../../../component/DashboardLayout";
import { bookData } from "../../../../src/helpers";
import TextInput from "../../../component/TextInput";
import { useState } from "react";

export const UserDashboard = () => {
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(bookData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);

    if (searchValue.trim() === "") {
      setFilteredBooks(bookData);
      return;
    }
    const results = bookData.filter(
      (book) =>
        book.title.toLowerCase().includes(searchValue) ||
        book.ISBN.toString().includes(searchValue.toString()) ||
        book.publisher.toLowerCase().includes(searchValue) ||
        book.date_added.toString().includes(searchValue)
    );

    setFilteredBooks(results);
  };
  return (
    <DashboardLayout role="reader">
      <header className="w-full px-6 py-6 border-b-2 border-gray-200 border-solid flex items-center gap-x-10">
        <h1 className="font-semibold text-lg">All Books</h1>
        <div>
          <TextInput
            type="text"
            placeholder="Search Book(s)"
            className="border-gray-300 border-2 bg-white"
            value={search}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </header>
      <main className="mt-10 grid grid-cols-2 md:grid-cols-3 px-6 gap-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((books) => (
            <div key={books.imageLink} className="flex items-center gap-x-4">
              <div className="h-40 w-32">
                <img
                  src={`/${books.imageLink}`}
                  alt=""
                  className="w-[90%] h-full"
                />
              </div>
              <div>
                <p className="font-medium text-xl">{books.author}</p>
                <p className="font-semibold text-xl text-blue-900">
                  {books.title}
                </p>
                <p>{books.year}</p>
                <div className="mt-4">
                  <a
                    href={books.link}
                    target="_blank"
                    className="bg-blue-900 rounded-md text-white p-2"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Not Available, Check back later</p>
        )}
      </main>
    </DashboardLayout>
  );
};
