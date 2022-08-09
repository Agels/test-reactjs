import Cards from "../component/cards";
import Navbars from "../component/navbar";
import { Container,Row } from "react-bootstrap";
// import { getProducts } from "../adapter/api";
import { useEffect,useState } from "react";

import{getList} from '../adapter/api';
export default function Home() {
const [products, setProducts] = useState([]);
const [loading,setLoading] = useState(false)
  // const dispatch = useDispatch();
  useEffect(()=> {
   
    const fetch = () => {
      let componentMounted = true;
      setLoading(true)
      getList()
      .then(items => {
        if(componentMounted){
          setProducts(items.products)
        }
      })
      setLoading(false)
     
      return () => componentMounted = false
    }
    
    fetch();
   
  },[])

  return (
    <>
      <Navbars />
      <Container className="mt-3">
    <Row lg={12} className="d-flex justify-content-center">
      {loading? <p>loading...</p> : products.map(el => <Cards id={el.id} name={el.name} price={el.price} images={el.images[0]} todetail={el} /> )}
      
      </Row>
      </Container>
    </>
  );
}
