
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { aboutProducts } from '../utilities';
import Footer from './footer';

let About = ()=>{
    return(
        <>
        <div className="container">
            <h1 className="fw-bolder text-center border-bottom border-2 pb-3 mt-5">About Us</h1>
            <p className="fs-5 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio sit modi quas magni repellat dicta nam, facere consequuntur! Repellat consectetur culpa, error officiis est laboriosam delectus ea obcaecati rem!
            Ex est, quaerat incidunt veniam itaque ipsum laboriosam quis animi, molestias porro fugit, cumque pariatur alias iusto dolorem reiciendis numquam dolorum ipsam architecto in harum optio dignissimos omnis quos. Delectus!
            Exercitationem odit natus, cumque beatae optio, nemo mollitia aperiam necessitatibus qui voluptatum dolor atque veritatis ullam quibusdam eius rerum? Praesentium repellat aperiam error quidem sint. Perspiciatis sint repellat eum ratione?</p>
            
            
            <div className="row g-5 mt-4">
            {aboutProducts.map((m)=>(
                <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={m.url} />
            <Card.Body>
                <Card.Title className='text-center fs-4'>{m.title}</Card.Title>
            </Card.Body>
        </Card>
        </div>
        ))}
        </div>
        </div>
        <Footer />
        
        </>
    )
}
export default About
