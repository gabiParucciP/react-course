import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams();
  return <div>Produto {id}</div>;
}

export default Produto;
