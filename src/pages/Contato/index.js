import { Link } from "react-router-dom"

function Contato() {
    return(
        <div>
            <h1>Contato</h1>
            <Link to="/sobre">Sobre</Link><br/>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Contato