import { Div, DivConteiner, HeaderConteiner } from './styles'
import Logo from '../../images/Logo.png'
import { MapPinLine, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'


export function Header() {
    return (
        <HeaderConteiner>
            <nav>
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
            </nav>
            <Div>
                <DivConteiner>
                    <MapPinLine size={22} className='iconMap' />
                    <a>Condeuba, BA</a>
                </DivConteiner>
                <nav>
                    <NavLink to="/FinalizeCompare" title='Finalizar compra'>
                        <ShoppingCart size={22} className='icon' />
                    </NavLink>
                </nav>
            </Div>

        </HeaderConteiner>

    )



}