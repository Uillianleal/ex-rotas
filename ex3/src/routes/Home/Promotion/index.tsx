import { Link } from "react-router-dom";
import Button from "../../../componets/Button";
import Card from "../../../componets/Card";

function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Pagina de promoção" />
          </div>
          <div className="dflex">
            <Link to="/sub">
              <Button text="Quero participar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Promotion;
