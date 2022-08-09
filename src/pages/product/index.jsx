import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Form,
  Button,
} from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import ImageSlider from "../../component/imageSlider";
import Navbars from "../../component/navbar";
import { formatRupiah } from "../../helper";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { addcart } from "../../app/action/chartAction";
export default function Product() {
    const dispatch = useDispatch();
  const product = JSON.parse(localStorage.getItem("product"));
const [val, setVal] = useState(0);
const [variant, setVariant] = useState('');
const decrementQty = () => {
    if(val !== 0){
        setVal(val - 1)
    }
}
const incrementQty = () => {
    setVal(val + 1)
}

console.log(variant)

  return (
    <>
      <Navbars fromProduct={true}/> 
      <Container className="mt-3">
        <Row>
          <Col>
            <ImageSlider images={product.images} />
          </Col>
          <Col>
            <div>
              <h6 className="text-secondary">{product.category}</h6>
              <h3>{product.name}</h3>
              <h4 className="text-secondary mt-5">
                {formatRupiah(product.price)}
              </h4>
              {product.is_variant === '1' ? (
                  <>
                  <h5 className="mt-5">{product.variant_groups[0].name}</h5>
                  <ButtonGroup>
                  {product.variant_groups[0]?.variants?.map(el => {
                    return(

                    // <ToggleButton
                    //   id="toggle-check"
                    //   type="radio"
                    //   name="radio"
                    //   variant="outline-primary"
                    //   value={el.name}
                    //   className="m-1"
                    //   checked={radioValue === el.name}
                    //   onChange={(e) => setRadioValue(e.currentTarget.value)}
                    // >
                    //   {el.name}
                    // </ToggleButton>
                    <Form.Check
                    inline
                    label={el.name}
                    type='radio'
                    name="radio"
                    onChange={()=> setVariant(el.name)}
                    /> 
                    )
                  })}
                  </ButtonGroup>
                </>
              ) : (
                <p></p>
              )}
            </div>
            <Row className="mt-5">
              <Col lg={4} md={6} sm={12}>
                <Button variant="outline-dark" onClick={decrementQty }>-</Button> {val}{" "}
                <Button variant="outline-dark" onClick={incrementQty}>+</Button>
              </Col>
              <Col lg={8}>
                <Button
                  variant="primary"
                  className="col-lg-4 col-md-6 col-sm-12 mt-2"
                  onClick={() => {
                    dispatch(addcart(product));
                    localStorage.setItem('cart',JSON.stringify(product))
                    ;
                    toast.success("Successfully add to cart!");
                  }}
                >
                  add to chart
                </Button>
                
                <Toaster />
              </Col>
            </Row>
            <hr />
            <p>{product.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
