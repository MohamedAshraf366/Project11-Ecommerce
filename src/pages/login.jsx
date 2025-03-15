import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { memo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

let Login = ()=>{  
    let[isEmail, setisEmail] = useState('')
    let[isPAssword, setisPAssword] = useState('')

    let navigate = useNavigate();
    let getEmail = localStorage.getItem('email')
    let getPassword = localStorage.getItem('password')
    let getfName = localStorage.getItem('fName')
    let getsName = localStorage.getItem('sName')
    let handleSubmit = (e)=>{
        e.preventDefault()
        if(!isEmail.trim() && !isPAssword.trim()){
            alert('Thanks to fill required email and passeord')
        }
        else if(getEmail&&getEmail.trim() === isEmail.trim() &&
        getPassword&&getPassword.trim() === isPAssword.trim()){
            alert(`welcome ${getfName} ${getsName}`)
             
            toast.success("Login successful! 🎉");

        setTimeout(() => {
            navigate('/') 
            window.location.reload(); // إعادة تحميل الصفحة بعد تسجيل الدخول مباشرةً
        }, 10);
        }
        else{
            alert('Thanks to check email and passeord')
        }
    }
    return(
        <>
        <div className="container">
            
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5 mb-5">LogIn</h1>
                <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>

                <FloatingLabel controlId="email" label="Email address" className="mb-3 w-50">
                    <Form.Control onChange={(e)=>setisEmail(e.target.value)}  value={isEmail} type="email" placeholder="email" />
                </FloatingLabel>

                <FloatingLabel controlId="password" label="Password" className="mb-3 w-50">
                    <Form.Control onChange={(e)=>setisPAssword(e.target.value)}  value={isPAssword} type="password" placeholder="Password" />
                </FloatingLabel>


                <Button type='submit' className='mt-2' variant="outline-secondary">Submit</Button>
                </Form>
                <p className='text-center mt-3'>Don't have accout ?? 
                <Link to={'/register'} style={{textDecoration:"none"}}> Register </Link>
                 now</p>
        </div>  
        
        <br />
        </>
    )
}
export default memo(Login)
