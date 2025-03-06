import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string;
}) => {
  const layout =
    role === "reader"
      ? [
          {
            name: "dashboard",
            icon: "/dashboard.png",
            link: "/user-dashboard",
          },
          {
            name: "profile",
            icon: "/user.png",
            link: "/user-dashboard/profile",
          },
          {
            name: "books",
            icon: "/stack-of-books.png",
            link: "/user-dashboard/books",
          },
        ]
      : [
          {
            name: "dashboard",
            icon: "/dashboard.png",
            link: "/librarian-dashboard",
          },
          {
            name: "members",
            icon: "/group.png",
            link: "/librarian-dashboard/members",
          },
        ];
  return (
    <div className="flex h-screen w-full">
      <div className="pt-10 px-10 border-r-2 border-gray-200 border-solid">
        <div>
          <Link
            to={
              role === "librarian" ? "/librarian-dashboard" : "/user-dashboard"
            }
          >
            {" "}
            <img src="/elib copy.png" alt="" className="w-10 h-10" />
          </Link>
        </div>
        <div className="mt-10">
          {layout.map((_layout) => (
            <Link to={_layout?.link}>
              {" "}
              <div className="flex gap-x-3 space-y-5">
                <div className="w-8">
                  <img src={_layout?.icon} alt="" className="w-full h-6 object-contain" />
                </div>

                <span className="capitalize">{_layout?.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
