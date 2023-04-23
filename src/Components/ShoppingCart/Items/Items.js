import {
    CartList,
    ItemsCart,
    ItemQuantityCart,
    ButtonQuantity,
    Quantity,
    RemoveItem,
    Text
} from "./ItemsStyle"

export default function Items(props) {

    const formatedAmount = props.item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    const itemTotalValue = props.item.value * props.item.quantity;

    const formatedTotalAmount = itemTotalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    return (
        <CartList
            className="cart_list">
            <ItemsCart
                className="cart_item clearfix">
                <div
                    className="cart_item_image">
                    <img src={props.item.imageUrl} alt="img" />
                </div>
                <div
                    className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div
                        className="cart_item_name cart_info_col">
                        <div
                            className="cart_item_title">
                            Nome
                        </div>
                        <div
                            className="cart_item_text">
                            {props.item.name}
                        </div>
                    </div>
                    <div
                        className="cart_item_quantity cart_info_col">
                        <div
                            className="cart_item_title">
                            Quantidade
                        </div>
                        <Quantity
                            className="cart_item_text">
                            <ItemQuantityCart>
                                <ButtonQuantity onClick={props.removeOneItem}>-</ButtonQuantity>
                                {props.item.quantity}
                                <ButtonQuantity onClick={props.addQuantity}>+</ButtonQuantity>
                            </ItemQuantityCart>
                            <RemoveItem>
                                <Text onClick={props.removeItemCart}>Remover</Text>
                            </RemoveItem>
                        </Quantity>
                    </div>
                    <div
                        className="cart_item_price cart_info_col">
                        <div
                            className="cart_item_title">
                            Preço
                        </div>
                        <div
                            className="cart_item_text">
                            {formatedAmount}
                        </div>
                    </div>
                    <div
                        className="cart_item_total cart_info_col">
                        <div
                            className="cart_item_title">
                            Total</div>
                        <div
                            className="cart_item_text">
                            {formatedTotalAmount}</div>
                    </div>
                </div>
            </ItemsCart>
        </CartList>

    )
}