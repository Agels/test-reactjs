import { Card, Button } from "react-bootstrap";
import {formatRupiah} from '../../helper';
import {useNavigate} from 'react-router';
import {productDetail} from '../../app/action/productAction';
import { useDispatch } from "react-redux";
export default function Cards({id, name, price, images, todetail}) {
const navigate = useNavigate();
const dispatch = useDispatch();

 return (
  
    <Card style={{ width: "18rem" }} key={id} className="mx-3 mt-3 col-lg-4 col-md-6 col-sm-12">
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {formatRupiah(price)}
        </Card.Text>
        <Button variant="primary" onClick={() => {navigate(`/product/:${name.replace(/\s/g, '-')}`); dispatch(productDetail(todetail));   localStorage.setItem('product', JSON.stringify(todetail)); }}>buy Product</Button>
      </Card.Body>
    </Card>
  );
}
