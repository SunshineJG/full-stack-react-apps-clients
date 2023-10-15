import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GroupsListPage, GroupPage, CreateGroupPage } from "./groups";
import { SignInPage, PrivateRoute } from "./auth";
import { NavBar } from "./navigation";

const routes = [
  {
    path: "/",
    Component: GroupsListPage,
    private: true,
  },
  {
    path: "/groups/:id",
    Component: GroupPage,
    private: true,
  },
  {
    path: "/sign-in",
    Component: SignInPage,
  },
  {
    path: "/create-group",
    Component: CreateGroupPage,
    private: true,
  },
];

export const Routers = ({ isLoading, user }) => (
  <Router>
    <NavBar user={user} />
    <Routes>
      {routes.map((route, index) => {
        if (route.private) {
          return (
            <Route
              key={index}
              path={route.path}
              element={<PrivateRoute isLoading={isLoading} isAuthed={!!user} />}
            >
              <Route path={route.path} element={<route.Component />} />
            </Route>
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.Component />}
            />
          );
        }
      })}
    </Routes>
  </Router>
);
