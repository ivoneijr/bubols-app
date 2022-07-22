import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/Login";
import { Questions } from "../pages/questions";
import { UserNew } from "../pages/user-new";
import { UserProfile } from "../pages/user-profile";

const PrivateRoute = ({
  children,
  redirectTo,
}: {
  children: React.ReactNode;
  redirectTo: string;
}) => {
  const isAuth = localStorage.getItem("token") !== null;

  return isAuth ? <Layout>{children}</Layout> : <Navigate to={redirectTo} />;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo="/">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute redirectTo="/">
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/new"
          element={
            <PrivateRoute redirectTo="/">
              <UserNew />
            </PrivateRoute>
          }
        />
        <Route
          path="/questions"
          element={
            <PrivateRoute redirectTo="/">
              <Questions />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
