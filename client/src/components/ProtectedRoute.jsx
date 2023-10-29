import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  let auth = { token: true };
  //   console.log("token true");
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
