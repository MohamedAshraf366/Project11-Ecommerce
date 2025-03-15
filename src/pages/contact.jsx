import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Footer from "./footer"
import { Button } from 'react-bootstrap';
import { useRef, useState } from 'react';

let Contact = ()=>{
    let[formData, setformData] = useState([])   


    let handleSubmit = (e)=>{
        e.preventDefault()
        if(formData.length === 0){
            alert("Thanks to fil the form")
        }
        else{
        alert("Messafe Send Sccefully 😊😊😊😊")
        setformData({name:"",
            email:"",
            message:"",})
        }
    }

    
    return(
        <>
        <div className="container">
            
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5 mb-5">Contact</h1>
                <Form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <FloatingLabel controlId="floatingName" label="Your Name" className="mb-3 w-50">
                    <Form.Control value={formData.name}  type="text" placeholder="yourName" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingName" label="Email address" className="mb-3 w-50">
                    <Form.Control value={formData.email}  type="email" placeholder="email" />
                </FloatingLabel>

                <FloatingLabel controlId="floatingMessage" label="Write your message" className="mb-3 w-50">
                        <Form.Control as="textarea"  placeholder="Leave a comment here" value={formData.message}
                            style={{ height: '100px' }} />
                    </FloatingLabel>

                <Button type='submit' className='mt-2' variant="outline-secondary">Send</Button>
                </Form>
        </div>  
        
        <Footer />
        
        </>
    )
}
export default Contact
