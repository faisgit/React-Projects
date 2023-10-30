import { useContext } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { ShopContext } from "../../context/shop-context";
export default function CartItems(props) {
  const { cartItems, addToCart, removeFromCart, updateCartItemsCount } =
    useContext(ShopContext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="flex items-center border-2 border-solid w-96 rounded-xl shadow-xl py-4 ">
      <img src={productImage} alt="" className=" h-40 w-40" />
      <div className="">
        <p className="font-bold">{productName}</p>
        <p className="font-semibold text-sm">${price}</p>
        <ButtonGroup size="sm" variant="outlined">
          <Button className="px-2 py-1 font-bold" onClick={() => addToCart(id)}>
            +
          </Button>
          <input
            type="text"
            className="w-10 font-semibold text-xs text-center border-[1px] outline-none border-t-black border-b-black  "
            value={cartItems[id]}
            onChange={(e) => updateCartItemsCount(Number(e.target.value), id)}
          />
          <Button
            className="px-2 py-1 font-bold"
            onClick={() => removeFromCart(id)}
          >
            -
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
