import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AmountCofee, DescriptionCoffe, DivAmountCoffes, DivCoffes, DivPrice, NameCoffe, PriceCofee, TitleCoffe } from './styles'

import { CoffesProps } from '../pages/menu'
import { useState } from 'react'


export function CoffesCard({ title, name, description, price, coffeImage }: CoffesProps) {

    const [amountCoffeCount, setAmountCoffe] = useState(0)
    const [priceCoffeTimes, setPriceCoffeTimes] = useState(9)

    function AddCart() {
    }

    function AddCoffes() {
        setAmountCoffe((state) => {
            return state + 1
        })
        function AddPrice() {
            setPriceCoffeTimes(() => {
                return price * (amountCoffeCount + 1)
            })
        }
        AddPrice()
    }

    function ToDecreaseCoffeAmount() {
        setAmountCoffe((state) => {
            return state - 1
        })
        function DecreasePrice() {
            setPriceCoffeTimes(() => {
                return price * (amountCoffeCount - 1)
            })
        }
        DecreasePrice()
    }


    return (
        <DivCoffes>
            <img src={coffeImage} />
            <TitleCoffe>{title}</TitleCoffe>
            <NameCoffe>{name}</NameCoffe>
            <DescriptionCoffe>{description}</DescriptionCoffe>
            <DivAmountCoffes>
                <span>R$</span>
                <PriceCofee>{priceCoffeTimes},00</PriceCofee>
                <DivPrice>
                    <Minus
                        size={14}
                        className='iconAmount'
                        onClick={ToDecreaseCoffeAmount}
                    />
                    <AmountCofee>{amountCoffeCount}</AmountCofee>
                    <Plus
                        size={14}
                        className='iconAmount'
                        onClick={AddCoffes}
                    />
                </DivPrice>
                <ShoppingCart
                    size={20}
                    className='shoppingCartIcon'
                    onClick={AddCart}
                />
            </DivAmountCoffes>
        </DivCoffes>)
}