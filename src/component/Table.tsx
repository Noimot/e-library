import React from "react";

export interface ITable<TRow> {
  data: TRow[] | undefined;
  columns: Array<{
    header: React.ReactNode;
    view: (row: TRow) => React.ReactNode;
  }>;
  rowAction?: (row: TRow) => React.ReactNode;
}

export function Table<TRow extends {}>({
  data,
  columns,
  rowAction,
}: ITable<TRow>) {
  return (
    <div className="h-full w-full overflow-auto relative ">
      <table className="table table-auto w-full border-collapse ">
        <thead>
          <tr className="">
            {columns.map((col) => {
              return (
                <th
                  key={`${col.header}-head`}
                  className="text-sm text-left px-5 py-3 whitespace-nowrap bg-gray-100  first:rounded-l-lg last:rounded-r-lg"
                >
                  <span>{col.header}</span>
                </th>
              );
            })}
            {rowAction && (
              <th
                className="text-sm text-center px-6 py-3 whitespace-nowrap
                  bg-gray-100  first:rounded-l-lg last:rounded-r-lg"
              >
                {"Action"}
              </th>
            )}
          </tr>
        </thead>
        <tbody className="px-4 mt-5 ">
          {data?.map((row) => (
            <tr className="border-b last:border-b-0 border-gray-200">
              {columns.map((col) => {
                const view = col.view(row);
                return (
                  <td className="px-6 py-3 text-left min-h-[75px]">{view}</td>
                );
              })}
              {rowAction && (
                <td className="px-2 ">
                  <div className="flex justify-end pr-6 pl-5">
                    {rowAction(row)}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
