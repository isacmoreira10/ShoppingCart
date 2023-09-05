import { Minus, Plus, ShoppingCart } from "phosphor-react";
import {
  AmountCofee,
  DescriptionCoffe,
  DivAmountCoffes,
  DivCoffes,
  DivPrice,
  NameCoffe,
  PriceCofee,
  TitleCoffe,
} from "./styles";

import { CoffesProps } from "../../pages/menu";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../Context/Context";

export function CoffesCard(item: CoffesProps) {
  const { setCartItems } = useContext(CoffeeContext);
  const [amountCoffeeCount, setAmountCoffee] = useState(0);
  const [priceCoffeeTimes, setPriceCoffeeTimes] = useState(9);

  function newCoffeeSelected() {
    //  verificar se dentro de array cartItems existe a um igual ao item.id se existir não adicona dentro do array
    setCartItems((oldValue) => [...oldValue, item]);
  }

  function AddCoffes() {
    setAmountCoffee((state) => {
      return state + 1;
    });
    setPriceCoffeeTimes(() => {
      return item.price * (amountCoffeeCount + 1);
    });
  }

  function ToDecreaseCoffeAmount() {
    setAmountCoffee((state) => {
      return state - 1;
    });
    setPriceCoffeeTimes(() => {
      return item.price * (amountCoffeeCount - 1);
    });
  }

  return (
    <DivCoffes>
      <img src={item.coffeeImage} alt="coffee image" />
      <TitleCoffe>{item.title}</TitleCoffe>
      <NameCoffe>{item.name}</NameCoffe>
      <DescriptionCoffe>{item.description}</DescriptionCoffe>
      <DivAmountCoffes>
        <span>R$</span>
        <PriceCofee>{priceCoffeeTimes},00</PriceCofee>
        <DivPrice>
          <Minus
            size={14}
            className="iconAmount"
            onClick={ToDecreaseCoffeAmount}
          />
          <AmountCofee>{amountCoffeeCount}</AmountCofee>
          <Plus size={14} className="iconAmount" onClick={AddCoffes} />
        </DivPrice>
        <ShoppingCart
          size={20}
          className="shoppingCartIcon"
          onClick={newCoffeeSelected}
        />
      </DivAmountCoffes>
    </DivCoffes>
  );
}
