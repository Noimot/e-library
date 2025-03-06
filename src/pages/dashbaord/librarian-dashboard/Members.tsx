import React from "react";
import DashboardLayout from "../../../component/DashboardLayout";
import { members } from "../../../../src/helpers";
import { Table } from "../../../component/Table";
import dayjs from "dayjs";


const Members = () => {
  return (
    <DashboardLayout role="librarian">
      <header className="px-6 py-6 border-b-2 border-gray-200 border-solid">
        <h1 className="font-semibold text-lg">Readers</h1>
      </header>
      <main className="mt-10">
        <Table
          data={members}
          columns={[
            { header: "Reader ID", view: (row) => <div>#{row.id}</div> },
            { header: "Name", view: (row) => <div>{row.name}</div> },
            { header: "Checkout Date", view: (row) => <div>{dayjs(row.checkout).format("MMM DD, YYYY")}</div> },
            { header: "Check-in Date", view: (row) => <div>{row.checkin ? dayjs(row.checkin).format("MMM DD, YYYY"): 'Not Yet'}</div> },
            { header: "Days Remaining", view: (row) => <div>{row.remainingDays}</div> },
            { header: "Overdue", view: (row) => <div className="capitalize">{row.status}</div> }
          ]}
        />
      </main>
    </DashboardLayout>
  );
};

export default Members;
