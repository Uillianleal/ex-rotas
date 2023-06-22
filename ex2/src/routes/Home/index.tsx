import { Outlet } from "react-router-dom";
import Header from "../../componets/Header";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Home;
