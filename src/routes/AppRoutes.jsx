import React from "react";
import {
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Videos from "../videos/Videos.jsx";
import VideosForm from "../videos/VideosForm";
import VideoShow from "../videos/VideoShow";
import Profile from "../users/Profile";
import HomePage from "../Home";
import SignUp from "../users/SignUp";
import SignIn from "../users/SignIn";
import { logOut } from "../store/user";

const NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Ir a videos</Link>
      <p>Esta pagina aun no esta lista</p>
    </>
  );
};

const Error404 = () => {
  return (
    <>
      <Link to="/">Ir al inicio</Link>
      <p>Esta pagina no existe - 404</p>
    </>
  );
};

const AppRoutes = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Routes>
      <Route path="/" element={<Navigate to ='/videos' />} />

      <Route
        path="/usuarios"
        element={user ? <Navigate to="/videos" /> : <Outlet />}
      >
        <Route path="registro" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
      </Route>

      <Route path="" element={user ? <Outlet /> : <Navigate to="usuarios/login" />}>
        <Route path="/usuarios/miperfil" element={<Profile />} />
        <Route path="/usuarios/:id/videos" element={<NotImplemented />} />

        <Route path="/videos">
          <Route path="/" element={<Videos />} />
          <Route path="nuevo" element={<VideosForm />} />
          <Route path=":id" element={<VideoShow />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
