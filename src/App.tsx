import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { UserDashboard } from "./pages/dashbaord/user-dashboard/UserDashboard";
import LibrarianDashbaord from "./pages/dashbaord/librarian-dashboard/LibrarianDashbaord";
import Members from "./pages/dashbaord/librarian-dashboard/Members";
import AddBook from "./pages/dashbaord/librarian-dashboard/AddBook";
import { Books } from "./pages/dashbaord/user-dashboard/Books";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={() => <Login />} />
        <Route path="/signup" Component={() => <Signup />} />
        <Route path="/user-dashboard" Component={() => <UserDashboard />} />
        <Route
          path="/librarian-dashboard"
          Component={() => <LibrarianDashbaord />}
        />
        <Route
          path="/librarian-dashboard/members"
          Component={() => <Members />}
        />
        <Route
          path="/librarian-dashboard/add-book"
          Component={() => <AddBook />}
        />
        <Route path="/user-dashboard/books" Component={() => <Books />} />
        <Route path="*" Component={() => <PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
