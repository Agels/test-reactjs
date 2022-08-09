import Cards from "../component/cards";
import Navbars from "../component/navbar";
import { Container,Row } from "react-bootstrap";
// import { getProducts } from "../adapter/api";
import Spinner from 'react-bootstrap/Spinner';

import { useEffect,useState } from "react";

import{getList} from '../adapter/api';
export default function Home() {
const [products, setProducts] = useState([]);
const [loading,setLoading] = useState(true)
  // const dispatch = useDispatch();
  useEffect(()=> {
   
    const fetch = () => {
      let componentMounted = true;
      getList()
      .then(items => {
        if(componentMounted){
          setProducts(items.products)
        }
        setLoading(false)
      })
     
      return () => componentMounted = false
    }
    
    fetch();
   
  },[])

  return (
    <>
      <Navbars />
      <Container className="mt-3">
    <Row lg={12} className="d-flex justify-content-center">
      {loading? <Spinner animation="grow" className="mt-5"/> : products.map(el => <Cards id={el.id} name={el.name} price={el.price} images={el.images[0]} todetail={el} /> )}
      
      </Row>
      </Container>
    </>
  );
}
