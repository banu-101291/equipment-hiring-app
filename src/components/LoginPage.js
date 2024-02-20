import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/LoginPage.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your login logic here
        console.log("Form data:", formData);
        // After successful login, you may want to redirect the user to another page
        //history.push('/dashboard');
        navigate('/dashboard')
    };

  
    return (
        <div className="container">
            <div className="form-container">
                <h4>Login</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="button">Login</Button>
                    {/* Add link to create blog if needed */}
                    {/* <Link to='/create'>Create Blog</Link> */}
                </Form>
            </div>
        </div>
    );
}

export default Login;
