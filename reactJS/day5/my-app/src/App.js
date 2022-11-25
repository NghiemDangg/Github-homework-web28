import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <div className="Image-wrapper">
        <img
          className="Image"
          src="https://www.knots.ph/images/default-source/flowers/hand-bouquets-2022/bq2118_340.jpg?sfvrsn=0"
        ></img>
      </div>

      <div className="content-wrapper">
        <div className="heading">Harvest Vase</div>
        <div className="title">by studio and friends</div>

        <div className="descripstion">
          Thrown and hand carved vase, part of the Sian for The Village Pottery
          limited editions range. Beautiful with or without flowers. Glazed
          inside for fresh or dried flowers.
        </div>

        <div className="content-footer">
          <div className="price">78$</div>
          <button className = "btn-buy">buy now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
