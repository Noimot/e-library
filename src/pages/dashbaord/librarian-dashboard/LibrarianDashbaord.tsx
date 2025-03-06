import { Link } from "react-router-dom";
import DashboardLayout from "../../../component/DashboardLayout";
import { Table } from "../../../component/Table";
import { bookData } from "../../../helpers";
import { useState } from "react";
import { Button } from "../../../component/Button";
import dayjs from "dayjs";

const LibrarianDashbaord = () => {
  const [tab, setTab] = useState<string>("all");
  const handleTab = (tab: string) => {
    setTab(tab);
  };
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const lastWeekDate = lastWeek.toISOString();
  return (
    <DashboardLayout role="librarian">
      <header className="px-6 py-6 border-b-2 border-gray-200 border-solid">
        <Link
          to="/librarian-dashboard/add-book"
          className="text-white bg-blue-900 w-40 text-center rounded-md px-8 py-2 inline-block"
        >
          Add Book
        </Link>
      </header>
      <main className="mt-10 flex-1 overflow-scroll">
        <div className="flex gap-x-5 pl-8">
          <div className="cursor-pointer">
            <Button
              btnText="All Books"
              btnType="button"
              handleClick={() => handleTab("all")}
              className={
                tab !== "all"
                  ? "!text-blue-900 px-4 bg-white"
                  : "px-4 bg-blue-900"
              }
            />
          </div>
          <div className="cursor-pointer">
            <Button
              btnText="Borrowed Books"
              btnType="button"
              handleClick={() => handleTab("borrowed")}
              className={
                tab === "all"
                  ? "!text-blue-900 px-4 bg-white"
                  : "px-4 bg-blue-900"
              }
            />
          </div>
        </div>
        {tab === "all" ? (
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
            ]}
            rowAction={(row) => (
              <Link to={`/librarian-dashboard/add-book?author=${row.author}`} className="text-blue-900 italic">
                Update / Modify Book
              </Link>
            )}
          />
        ) : (
          <Table
            data={bookData}
            columns={[
              {
                header: "Title",
                view: (row) => (
                  <div className="w-[200px] flex items-center gap-x-2">
                    {" "}
                    <span>{row.title}</span>
                  </div>
                ),
              },
              { header: "Author", view: (row) => <div>{row.author}</div> },
              {
                header: "Borrowed Date",
                view: () => (
                  <div>{dayjs(lastWeekDate).format("MMM DD, YYYY")}</div>
                ),
              },
              {
                header: "status",
                view: () => (
                  <div className="bg-red-50 rounded-2xl text-center py-1 px-2">
                    Due
                  </div>
                ),
              },
            ]}
          />
        )}
      </main>
    </DashboardLayout>
  );
};

export default LibrarianDashbaord;
