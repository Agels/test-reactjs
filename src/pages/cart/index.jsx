import { useSelector } from "react-redux";
import { Container, Card } from "react-bootstrap";
import Navbars from "../../component/navbar";
import { formatRupiah } from "../../helper";

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Navbars />
      <Container className="mt-5">
        <Card>
          <Card.Header>Cart</Card.Header>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
              </tr>
            </thead>
            <tbody>
              {!cart ? 'error' : cart.map((el) => {
                return (
                  <tr>
                    <td>{el.name}</td>
                    <td>{formatRupiah(el.price)}</td>
                    <td>{el.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </Container>
    </>
  );
}
