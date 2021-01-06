import './styles.css'
import {ReactComponent as Image} from './Imagem.svg'

function Home(){
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-actions">
                    <h1 className="home-title">
                        Faça seu pedido<br/>e entregamos<br/> para você!!!
                    </h1>
                    <h3 className="home-sub-title">
                        Escolha o seu pedido e em poucos minutos<br/>levaremos na sua porta
                    </h3>
                    <a href="orders" className="home-btn-order">FAZER PEDIDO</a>
                </div>
                <div className="home-image">
                    <Image/>
                </div>
            </div>
        </div>
    );
}

export default Home;