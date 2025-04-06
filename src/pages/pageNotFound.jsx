import { Link } from "react-router-dom"

let PageNotFound = ()=>{
    return(
        <>
        <div className="text-center">
            <h1 className="mt-5">404</h1>
            <h1 className="mt-2 mb-3">PageNotFound</h1>
            <Link to={'/'} replace={true}>Back To Home Page</Link>
        </div>
        </>
    )
}
export default PageNotFound