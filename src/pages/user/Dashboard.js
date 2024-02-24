import React  from "react";
//import Logout from '../pages/Auth/Logout';
import { useAuth } from "../../provider/Authprovider";
import Logout from "../Auth/Logout";



const Dashboard = () => {
  const auth = useAuth();

  const handleLogout = () => {
    // Check if the logout function is named logout
    if (auth.logout) {
      auth.logout();
    }
    // If logout function is not named logout, check if it's named signOut
    else if (auth.signOut) {
      auth.signOut();
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.username}</h1>
        <button onClick={handleLogout} className="btn-submit">
          Logout
        </button>
      
      </div>
      <Logout/>
    </div>
  );
};


export default Dashboard;

































// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import UserMenu from "../../components/Layout/UserMenu";
// import { useAuth } from "../../context/auth";
// import Login from "../../components/LoginPage";




// const Dashboard = () => {
//   const [auth] = useAuth();
//   return (
//     <Layout title={"Dashboard "}>
//       <div className="container-flui m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//               <h3>{auth?.user?.name}</h3>
//               <h3>{auth?.user?.email}</h3>
//               <h3>{auth?.user?.address}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Login/>
      
//     </Layout>
//   );
// };

// export default Dashboard;