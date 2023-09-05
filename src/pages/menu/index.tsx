
import { AllContent, DivCoffesConteiner, TitlePage } from './styles'
import Intro from '../../images/Intro.png'
import { CoffesCard } from '../../components/Coffes'
import Americano from '../../images/Americano.png'
import Árabe from '../../images/Árabe.png'
import Cubano from '../../images/Cubano.png'
import Mochaccino from '../../images/Mochaccino.png'
import Macchiato from '../../images/Macchiato.png'
import ExpressoCremoso from '../../images/ExpressoCremoso.png'
import Expresso from '../../images/Expresso.png'
import Latte from '../../images/Latte.png'
import Havaiano from '../../images/Havaiano.png'
import CaféGelado from '../../images/CaféGelado.png'
import CaféComLeite from '../../images/CafécomLeite.png'
import Capuccino from '../../images/Capuccino.png'
import Irlândes from '../../images/Irlandês.png'
import ChocolateQuente from '../../images/ChocolateQuente.png'

export interface CoffesProps {
    coffeImage: string
    title: string
    name: string
    description: string
    price: number
    amountCoffe: number
    id: number
}

const coffes: CoffesProps[] = [
    {
        coffeImage: Americano,
        title: 'tradicional',
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9,
        amountCoffe: 0,
        id: 1,
    },
    {
        coffeImage: Árabe,
        title: 'Especial',
        name: 'Árabe',
        description: 'Bebida preparada com grãos de cafè Àrabe e especiarias',
        price: 9,
        amountCoffe: 0,
        id: 2
    },
    {
        coffeImage: Cubano,
        title: 'Especial alcoòlico gelado',
        name: 'Cubano',
        description: 'Drink gelado de cafè expresso com rum, creme de la ele e hortelã',
        price: 9,
        amountCoffe: 0,
        id: 3,
    },
    {
        coffeImage: Irlândes,
        title: 'Especial Alcoòlico',
        name: 'Irlândes',
        description: 'Bebida a base de cafè, uisque irlândes, açucar e chantilly',
        price: 9,
        amountCoffe: 0,
        id: 4,
    },
    {
        coffeImage: Capuccino,
        title: 'tradicional com leite',
        name: 'Capuccino',
        description: 'bebida de canela feita com doses iguais de cafè, leite e espuma',
        price: 9,
        amountCoffe: 0,
        id: 5,
    },
    {
        coffeImage: CaféComLeite,
        title: 'tradicional com leite',
        name: 'Café com leite',
        description: 'Meio a meio de tradicional expresso com leite vaporizado',
        price: 9,
        amountCoffe: 0,
        id: 6,
    },
    {
        coffeImage: CaféGelado,
        title: 'expresso gelado',
        name: 'Tradicional Gelado',
        description: 'bebida preparada com café expresso e cubos de gelo',
        price: 9,
        amountCoffe: 0,
        id: 7,
    },
    {
        coffeImage: Havaiano,
        title: 'Especial',
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9,
        amountCoffe: 0,
        id: 8,
    },
    {
        coffeImage: Latte,
        title: 'tradicional com leite',
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9,
        amountCoffe: 0,
        id: 9,
    },
    {
        coffeImage: Expresso,
        title: ' tradicional',
        name: 'Expresso',
        description: 'O tradicional feito com água quente e grãos moídos',
        price: 9,
        amountCoffe: 0,
        id: 10,
    },
    {
        coffeImage: ExpressoCremoso,
        title: 'tradicional',
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9,
        amountCoffe: 0,
        id: 11,
    },
    {
        coffeImage: ChocolateQuente,
        title: 'Especial com leite',
        name: 'Chocolate quente',
        description: 'Bebida feita com chocolate dissolvido no la ele quente e café',
        price: 9,
        id: 12,
        amountCoffe: 0,
    },
    {
        coffeImage: Macchiato,
        title: 'Tradicional com leite',
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9,
        amountCoffe: 0,
        id: 13,
    },
    {
        coffeImage: Mochaccino,
        title: 'Tradicional com leite',
        name: 'Mochaccino',
        description: 'Café expresso com calda de chocolate, pouco de leite e espuma',
        price: 9,
        amountCoffe: 0,
        id: 14,
    }]


export function Menu() {
    return (
        <AllContent>
            <img src={Intro} />
            <TitlePage>Nossos cafés</TitlePage>
            <DivCoffesConteiner>
                {coffes.map(coffe => {
                    return (
                        <CoffesCard
                            coffeImage={coffe.coffeImage}
                            title={coffe.title}
                            name={coffe.name}
                            description={coffe.description}
                            price={coffe.price}
                            amountCoffe={coffe.amountCoffe}
                            id={coffe.id}
                            key={coffe.id}
                        ></CoffesCard>
                    )
                })}
            </DivCoffesConteiner>
        </AllContent>

    )
}