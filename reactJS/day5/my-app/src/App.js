import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  //data nhận về dưới dạng obj

  const product = {
    name: 'Harvest Vase',
    image:
      'https://i.pinimg.com/originals/07/59/6e/07596e8518aaf580a8356670d2ee9a4c.jpg',
    description:
      'Thrown and hand carved vase, part of the Sian for The Village Pottery limited editions range. Beautiful with or without flowers. Glazed inside for fresh or dried flowers.',
    price: '78',
    supplier: 'studio and friends',
  };


  return (
    <div>
      <ProductCard
      product = {product}></ProductCard>
    </div>
  );
}

export default App;
