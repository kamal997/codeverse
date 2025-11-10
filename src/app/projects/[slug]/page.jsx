import { Container, Product } from "../../../components";
import { products } from "../../../constants/products";
import { useNavigate, useParams } from "react-router-dom";

export default function SingleProjectPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    navigate("/projects", { replace: true });
  }
  return (
    <Container>
      <Product product={product} />
    </Container>
  );
}
