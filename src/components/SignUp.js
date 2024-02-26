import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import '../styles/SignUp.css';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Layout from './Layout/Layout';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   
  
    // form function
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("api", {
          name,
          email,
          password,
          
        });
        if (res && res.data.success) {
          toast.success(res.data && res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    return (
    
       <Layout title="Signup">
       <div className="form-container ">
         <Form onSubmit={handleSubmit}>
           <h4 className="title">SignUp</h4>
           <div className="mb-3">
             <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               className="form-control"
               id="exampleInputEmail1"
               placeholder="Enter Your Name"
               required
               autoFocus
             />
           </div>
           <div className="mb-3">
             <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="form-control"
               id="exampleInputEmail1"
               placeholder="Enter Your Email "
               required
             />
           </div>
           <div className="mb-3">
             <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="form-control"
               id="exampleInputPassword1"
               placeholder="Enter Your Password"
               required
             />
           </div>
                    <Button variant="primary" type="submit" className="custom-button">Register</Button>
                    <p>Already have an account?<Link to='/login' className="login-link">Login</Link></p>
              </Form> 
            </div>
            </Layout>
            
        
    );
};

export default SignUp;
