import DashboardLayout from "../../../component/DashboardLayout";
import { bookData } from "../../../../src/helpers";
import { Table } from "../../../component/Table";
import TextInput from "../../../component/TextInput";
import { Button } from "../../../component/Button";

export const Books = () => {
  return (
    <DashboardLayout role="reader">
      <header className="px-6 py-6 border-b-2 border-gray-200 border-solid">
        <h1 className="font-semibold text-lg">Books</h1>
      </header>
      <main className="mt-10 flex items-start gap-x-10">
        <div className="w-2/3">
          <Table
            data={bookData}
            columns={[
              {
                header: "Title",
                view: (row) => (
                  <div className="w-[200px] flex items-center gap-x-2">
                    {" "}
                    <span className="w-10 h-10 inline-block">
                      <img
                        src={`/${row.imageLink}`}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </span>
                    <span>{row.title}</span>
                  </div>
                ),
              },
              { header: "Author", view: (row) => <div>{row.author}</div> },
              { header: "Pages", view: (row) => <div>{row.pages}</div> },
              { header: "Year", view: (row) => <div>{row.year}</div> },
              { header: "ISBN", view: (row) => <div>{row.ISBN}</div> },
            ]}
          />
        </div>
        <div className="w-1/3">
          <div className="w-2/3 space-y-5">
            <h1 className="text-xl font-medim">Borrow Book</h1>
            <TextInput
              type="text"
              placeholder="Title"
              className="border-gray-300 border-2 bg-white"
              //   {...form.getFieldProps("title")}
              name="title"
            />
            <TextInput
              type="text"
              placeholder="ISBN"
              className="border-gray-300 border-2 bg-white"
            />
            <TextInput
              type="text"
              placeholder="Author"
              className="border-gray-300 border-2 bg-white"
            />
            <TextInput
              type="text"
              placeholder="Checkout Date"
              className="border-gray-300 border-2 bg-white"
            />
            <p className="text-red-400 text-sm">
              Note: Checked-out books must be returned within 10 days after
              checkout
            </p>
            <div className="mt-5 cursor-pointer">
              <Button btnText="Checkout" btnType="button" />
            </div>
          </div>
          <div className="w-2/3 space-y-5 mt-20">
            <h1 className="text-xl font-medim">Return Book</h1>
            <TextInput
              type="text"
              placeholder="Reader Name"
              className="border-gray-300 border-2 bg-white"
              //   {...form.getFieldProps("title")}
              name="title"
            />
            <TextInput
              type="email"
              placeholder="Email Address"
              className="border-gray-300 border-2 bg-white"
            />
            <TextInput
              type="text"
              placeholder="Title"
              className="border-gray-300 border-2 bg-white"
            />
            <TextInput
              type="text"
              placeholder="Checkin Date"
              className="border-gray-300 border-2 bg-white"
            />
            <div className="mt-5 cursor-pointer">
              <Button btnText="Checkin" btnType="button" />
            </div>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};
