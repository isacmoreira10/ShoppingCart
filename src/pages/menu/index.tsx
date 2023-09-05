import { AllContent, DivCoffesConteiner, TitlePage } from "./styles";
import Intro from "../../images/Intro.png";
import { CoffesCard } from "../../components/Coffes";
import Americano from "../../images/Americano.png";
import Árabe from "../../images/Árabe.png";
import Cubano from "../../images/Cubano.png";
import Mochaccino from "../../images/Mochaccino.png";
import Macchiato from "../../images/Macchiato.png";
import ExpressoCremoso from "../../images/ExpressoCremoso.png";
import Expresso from "../../images/Expresso.png";
import Latte from "../../images/Latte.png";
import Havaiano from "../../images/Havaiano.png";
import CaféGelado from "../../images/CaféGelado.png";
import CaféComLeite from "../../images/CafécomLeite.png";
import Capuccino from "../../images/Capuccino.png";
import Irlândes from "../../images/Irlandês.png";
import ChocolateQuente from "../../images/ChocolateQuente.png";

export interface CoffesProps {
  coffeeImage: string;
  title: string;
  name: string;
  description: string;
  price: number;
  amountCoffee: number;
  id: number;
}

const coffees: CoffesProps[] = [
  {
    coffeeImage: Americano,
    title: "tradicional",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9,
    amountCoffee: 0,
    id: 1,
  },
  {
    coffeeImage: Árabe,
    title: "Especial",
    name: "Árabe",
    description: "Bebida preparada com grãos de cafè Àrabe e especiarias",
    price: 9,
    amountCoffee: 0,
    id: 2,
  },
  {
    coffeeImage: Cubano,
    title: "Especial alcoòlico gelado",
    name: "Cubano",
    description:
      "Drink gelado de cafè expresso com rum, creme de la ele e hortelã",
    price: 9,
    amountCoffee: 0,
    id: 3,
  },
  {
    coffeeImage: Irlândes,
    title: "Especial Alcoòlico",
    name: "Irlândes",
    description: "Bebida a base de cafè, uisque irlândes, açucar e chantilly",
    price: 9,
    amountCoffee: 0,
    id: 4,
  },
  {
    coffeeImage: Capuccino,
    title: "tradicional com leite",
    name: "Capuccino",
    description:
      "bebida de canela feita com doses iguais de cafè, leite e espuma",
    price: 9,
    amountCoffee: 0,
    id: 5,
  },
  {
    coffeeImage: CaféComLeite,
    title: "tradicional com leite",
    name: "Café com leite",
    description: "Meio a meio de tradicional expresso com leite vaporizado",
    price: 9,
    amountCoffee: 0,
    id: 6,
  },
  {
    coffeeImage: CaféGelado,
    title: "expresso gelado",
    name: "Tradicional Gelado",
    description: "bebida preparada com café expresso e cubos de gelo",
    price: 9,
    amountCoffee: 0,
    id: 7,
  },
  {
    coffeeImage: Havaiano,
    title: "Especial",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9,
    amountCoffee: 0,
    id: 8,
  },
  {
    coffeeImage: Latte,
    title: "tradicional com leite",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9,
    amountCoffee: 0,
    id: 9,
  },
  {
    coffeeImage: Expresso,
    title: " tradicional",
    name: "Expresso",
    description: "O tradicional feito com água quente e grãos moídos",
    price: 9,
    amountCoffee: 0,
    id: 10,
  },
  {
    coffeeImage: ExpressoCremoso,
    title: "tradicional",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9,
    amountCoffee: 0,
    id: 11,
  },
  {
    coffeeImage: ChocolateQuente,
    title: "Especial com leite",
    name: "Chocolate quente",
    description:
      "Bebida feita com chocolate dissolvido no la ele quente e café",
    price: 9,
    id: 12,
    amountCoffee: 0,
  },
  {
    coffeeImage: Macchiato,
    title: "Tradicional com leite",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9,
    amountCoffee: 0,
    id: 13,
  },
  {
    coffeeImage: Mochaccino,
    title: "Tradicional com leite",
    name: "Mochaccino",
    description:
      "Café expresso com calda de chocolate, pouco de leite e espuma",
    price: 9,
    amountCoffee: 0,
    id: 14,
  },
];

export function Menu() {
  return (
    <AllContent>
      <img src={Intro} />
      <TitlePage>Nossos cafés</TitlePage>
      <DivCoffesConteiner>
        {coffees.map((coffe) => {
          return (
            <CoffesCard
              coffeImage={coffe.coffeeImage}
              title={coffe.title}
              name={coffe.name}
              description={coffe.description}
              price={coffe.price}
              amountCoffe={coffe.amountCoffee}
              id={coffe.id}
              key={coffe.id}
            ></CoffesCard>
          );
        })}
      </DivCoffesConteiner>
    </AllContent>
  );
}
