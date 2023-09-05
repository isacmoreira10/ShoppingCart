import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { AmountCofee, DescriptionCoffe, DivAmountCoffes, DivCoffes, DivPrice, NameCoffe, PriceCofee, TitleCoffe } from './styles'

import { CoffesProps } from '../../pages/menu'

import { createContext, useState } from 'react'


interface CoffesSelected {
    title: string
    price: number
    coffeImage: string
    amountCoffe: number
}

interface CoffesContextData {
    newCoffe: CoffesSelected
}


export const CoffeContext = createContext<CoffesContextData>({} as CoffesContextData)


export function CoffesCard({ title, name, description, price, coffeImage }: CoffesProps) {
    const [newCoffeSelected, setNewCoffeSelect] = useState<CoffesSelected[]>([])


    function NewCoffeSelected() {

        const newCoffe: CoffesSelected = {
            coffeImage: coffeImage,
            title: title,
            price: priceCoffeTimes,
            amountCoffe: amountCoffeCount,

        }
        setNewCoffeSelect([...newCoffeSelected, newCoffe])
    }


    const [amountCoffeCount, setAmountCoffe] = useState(0)
    const [priceCoffeTimes, setPriceCoffeTimes] = useState(9)


    function AddCoffes() {
        setAmountCoffe((state) => {
            return state + 1
        })
        setPriceCoffeTimes(() => {
            return price * (amountCoffeCount + 1)
        })
    }

    function ToDecreaseCoffeAmount() {
        setAmountCoffe((state) => {
            return state - 1
        })
        setPriceCoffeTimes(() => {
            return price * (amountCoffeCount - 1)
        })
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
                    onClick={NewCoffeSelected}
                />
            </DivAmountCoffes>
        </DivCoffes>)


}