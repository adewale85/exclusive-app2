


import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      
      <div className="content">
        <Outlet /> 
      </div>
    </>
  );
}

export default Layout;
