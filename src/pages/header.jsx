import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faUserPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";


let Header = () => {
  let navigate = useNavigate()
  
    let [fullName, setfullName] = useState('')
    let[isLogging, setislogging]= useState(false)
    useEffect(()=>{
      let getfName = localStorage.getItem('fName')
    let getsName = localStorage.getItem('sName')
      if(getfName && getsName){
        setislogging(true)
        setfullName(` ${getfName} ${getsName}`)
        
      }
      else{
        setislogging(false)
      }
    },[])
    let handleSignOut = ()=>{
      // localStorage.removeItem('fName'); // إزالة الاسم الأول
      // localStorage.removeItem('sName'); // إزالة اسم العائلة
      // localStorage.removeItem('email'); // إزالة البريد الإلكتروني
      // localStorage.removeItem('password'); // إزالة كلمة المرور
      setfullName('')
      setislogging(false)
      toast.success("You have signed out successfully! 👋");
      setTimeout(() => {
        navigate('/login');
      }, 100); 
    }
    

    let disablingButton = (e) => {
      if (!isLogging) {
        e.preventDefault();
        toast.error("Please login first to access the cart! 🚫");
      }else{
        navigate('/cart')
      }
    }
  let cartItems = useSelector(state => state.handleCart) ||[] 
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container fluid className="container">
          <Navbar.Brand href="/" className="fw-bolder fs-2">
            React Ecommerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto ms-auto">
              <Nav.Link className="fs-5 navFont" href="/">Home</Nav.Link>
              <Nav.Link className="fs-5 navFont" href="/products">Products</Nav.Link>
              <Nav.Link className="fs-5 navFont" href="/about">About</Nav.Link>
              <Nav.Link className="fs-5 navFont" href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className={`d-flex gap-2 `}>
              {isLogging ?
              (<>
              <Button className=" userDataAfter" variant="outline-secondary" href="/cart">{fullName}</Button>
              <Button className=" userDataAfter" variant="outline-secondary" onClick={handleSignOut}>
                  <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" /> SignOut</Button>
              </>)
                
              :
              (<>
              <Button className=" userDataBefore" variant="outline-secondary" href="/login">
                <FontAwesomeIcon icon={faArrowRightToBracket} className="me-1" /> Login</Button>
              <Button className=" userDataBefore" variant="outline-secondary" href="/register">
                <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Register</Button>
              
              </>)
                 }
                <Button variant="outline-secondary"  onClick={disablingButton} >
                <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Cart ({cartItems.length})
              </Button>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br/><br/><br/>
    </>
  );
};

export default Header;
