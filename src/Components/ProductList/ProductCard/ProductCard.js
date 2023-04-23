import { 
    ContainerCard, 
    Image, 
    Button, 
    Price, 
    Text, 
    FullPrice, 
    NameProduct } from "./ProductCardStyle"
import cart from "../../../Images/cart.png"


export default function ProductCard(props) {

    const fullPrice = props.product.value + (props.product.value * .2)

    const formatedFullPrice = fullPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const formatedAmount = props.product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <ContainerCard className="card">
            <Image
                className="card_img"
                src={props.product.imageUrl} alt="product" />

            <Text>
                <NameProduct>{props.product.name}</NameProduct>
                <FullPrice>{formatedFullPrice}</FullPrice>
                <Price>{formatedAmount}</Price>
            </Text>

            <Button
                onClick={() => (props.addItemCart())}>
                <img src={cart} alt="" width="35px" />
            </Button>

        </ContainerCard>
    )
}