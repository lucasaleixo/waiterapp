import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "64eb57a2cbf5daa22a1ab3d4",
    table: "123",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza four cheese",
          imagePath: "1693143835084-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "64eb57a2cbf5daa22a1ab3d5",
      },
      {
        product: {
          name: "Coca Cola",
          imagePath: "1693144392761-coca-cola.png",
          price: 7,
        },
        quantity: 2,
        _id: "64eb57a2cbf5daa22a1ab3d6",
      },
    ],
  },
];
export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
