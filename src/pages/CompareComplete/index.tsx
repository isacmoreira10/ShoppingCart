import { MapPin, Alarm, CurrencyDollar } from 'phosphor-react'
import Ilustração from '../../images/Ilustração.png'
import { AllContent, ConteinerItens, Description, DescriptionItens, Illustration, StrongText } from './styles'

export function CompareComplete() {
    return (
        <AllContent>
            <h1>uhu! pedido confirmado</h1>
            <Description>Agora é só aguardar que logo o café chegará até você</Description>
            <div className='piopop'>
                <ConteinerItens>
                    <div>
                        <MapPin className='IconMap' size={48} />
                        <DescriptionItens>Entrega em <StrongText>Rua paula vadim, 102</StrongText> <br></br>
                            Farrapos - Itu</DescriptionItens><br></br>
                    </div>
                    <div>
                        <Alarm className='IconAlarm' size={32} />
                        <DescriptionItens>Previsão de entrega<br></br>
                            <StrongText>20 min - 30 min</StrongText></DescriptionItens><br></br>
                    </div>
                    <div>
                        <CurrencyDollar className='IconDollar' size={32} />
                        <DescriptionItens>Pagamento na entrega<br></br>
                            <StrongText>cartão de crédito</StrongText></DescriptionItens>
                    </div>
                </ConteinerItens>
                <Illustration>
                    <img src={Ilustração} />
                </Illustration>
            </div>
        </AllContent>

    )
}