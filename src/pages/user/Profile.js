import React, { useState, useEffect } from "react";
import UserMenu from '../../components/Layout/UserMenu';
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("api/update", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = JSON.parse(localStorage.getItem("auth"));
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
        navigate('/'); // Redirect to home page after updating profile
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/create", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = JSON.parse(localStorage.getItem("auth"));
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Created Successfully");
        navigate('/'); // Redirect to home page after creating profile
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <UserMenu />
        </div>
        <div className="col-md-9">
          <div className="form-container ">
            <form onSubmit={handleUpdateProfile}>
              <h4 className="title">USER PROFILE</h4>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Name"
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Email "
                  disabled
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Phone"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Enter Your Address"
                />
              </div>
              <button type="submit" onClick={handleUpdateProfile} className="btn btn-primary">
                UPDATE
              </button>
            </form>
            <form onSubmit={handleCreateProfile}>
              <h4 className="title mt-4">CREATE PROFILE</h4>
              {/* Add fields for creating profile if needed */}
              <button type="submit" onClick={handleCreateProfile} className="btn btn-primary">
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;





























































































































// import React, { useState, useEffect } from "react";
// import UserMenu from '../../components/Layout/UserMenu';
// //import Layout from "./../../components/Layout/Layout";
// //import { useAuth} from '../../provider/Authprovider';
// import toast from "react-hot-toast";
// import axios from "axios";

// const Profile = () => {
//   //context
//   //const [auth, setAuth] = useAuth();
//   //state
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
//   console.log(auth,typeof auth);

//   const CreateProfile= async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("api", {
//         name,
//         email,
//         password,
        
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
  

//   //get user data
//   useEffect(() => {
//     const { email, name, phone, address } = auth?.user;
//     setName(name);
//     setPhone(phone);
//     setEmail(email);
//     setAddress(address);
//   }, [auth?.user]);

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put("api", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });
//       if (data?.error) {
//         toast.error(data?.error);
//       } else {
//         setAuth({ ...auth, user: data?.updatedUser });
//         let ls = localStorage.getItem("auth");
//         ls = JSON.parse(ls);
//         ls.user = data.updatedUser;
//         localStorage.setItem("auth", JSON.stringify(ls));
//         toast.success("Profile Updated Successfully");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//    // <Layout title={"Your Profile"}>
//       <div className="container-fluid m-3 p-3">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="form-container ">
//               <form onSubmit={handleSubmit}>
//                 <h4 className="title">USER PROFILE</h4>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Your Name"
//                     autoFocus
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Your Email "
//                     disabled
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                     id="exampleInputPassword1"
//                     placeholder="Enter Your Password"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Your Phone"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Your Address"
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-primary">
//                   UPDATE
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//    // </Layout>
//   );
// };

// export default Profile;