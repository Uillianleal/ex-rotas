import { Link } from "react-router-dom";
import Button from "../../../componets/Button";
import Card from "../../../componets/Card";

function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mb30 mt30">
            <Card title="Pagina de inscrição" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoção" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Subscription;
