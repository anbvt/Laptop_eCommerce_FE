import { Link } from "react-router-dom";
import { CardProps } from "src/common/types/CartProps";
import { formatter } from "src/util/formatCurrency";
import Card from "react-bootstrap/Card";

const CardProduct = (props: CardProps) => {
    return (
        <Card className={`card ${props.className}`} id={`card_${props.id}`}>
            <Card.Img variant="top" src={props.data.logo} alt="Title" />
            <Card.Body>
                <hr />
                <Card.Title>
                    <Link className="card-title h5 text-decoration-none" to={"/product?id=" + props.data.id}>{props.data.name}</Link>
                </Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Text>
                    Giá: {formatter.format(props.data.price)}
                </Card.Text>
            </Card.Footer>
        </Card>
    );
}
export default CardProduct;