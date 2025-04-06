import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { memo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

let Register = ()=>{  
    let navigate = useNavigate()
    let[formData, setformData] = useState({
        fName: '',
        sName: '',
        email: '',
        password: '',
        retryPassword: ''
    });
    
    let handleChange = (e)=>{
        setformData({...formData,[e.target.name]: e.target.value})
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        //use ! to make sure that validation process is correct
        if(!formData.fName.trim() || !formData.sName.trim() || !formData.email.trim() ||
        !formData.password.trim() || !formData.retryPassword.trim())
        {
            alert("Please fill required data")
            return
        }
        else if (formData.password !== formData.retryPassword) {
            alert("Passwords do not match! Please check again.");
            setformData({ ...formData, password: "", retryPassword: "" });
            return; 
        }
        else{
            localStorage.setItem('fName', formData.fName.trim())
            localStorage.setItem('sName', formData.sName.trim())
            localStorage.setItem('email', formData.email.trim())
            localStorage.setItem('password', formData.password.trim())
            localStorage.setItem('retryPassword', formData.retryPassword.trim())
            alert("Registration successful! 🎉");
            setformData({ fName: '', sName: '', email: '', password: '', retryPassword: '' });
            navigate('/login')
        }
    
        
    };
    
    
    return(
        <>
        <div className="container">
            
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5 mb-5">Register</h1>
                <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <FloatingLabel controlId="text" label="First Name" className="mb-3 w-50">
                    <Form.Control name='fName' onChange={handleChange} value={formData.fName}  type="text" placeholder="name" />
                </FloatingLabel>

                <FloatingLabel controlId="text" label="second Name" className="mb-3 w-50">
                    <Form.Control  name='sName' onChange={handleChange} value={formData.sName}  type="text" placeholder="name" />
                </FloatingLabel>

                <FloatingLabel controlId="email" label="Email address" className="mb-3 w-50">
                    <Form.Control  name='email' onChange={handleChange} value={formData.email}  type="email" placeholder="email" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 w-50">
                    <Form.Control  name='password' onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Retry Password" className="mb-3 w-50">
                    <Form.Control  name='retryPassword' onChange={handleChange} value={formData.retryPassword} type="password" placeholder="Password" />
                </FloatingLabel>


                <Button  type='submit' className='mt-2' variant="outline-secondary">Submit</Button>
                </Form>
                <p className='text-center mt-3'>Already has an account?
                <Link to={'/login'} style={{textDecoration:"none"}}> Login </Link>
                 now</p>
        </div>  
        
        
        </>
    )
}
export default memo(Register)
