import Cookie from 'js-cookie'
import {Link, useHistory} from 'react-router-dom'
import {Container} from './styled'

function Index(props) {
    const navigation = useHistory();

    const produto = props.location .state;


    function comprar() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];

        if(!carrinho.some(item => item.id === produto.id))
            carrinho.push({...produto, qtc: 1});

        Cookie.set('carrinho', JSON.stringify(carrinho))

        navigation.push('/carrinho')
    }
    
    return (
        <Container>
    
            <div>
              <Link to="/"> Voltar </Link>
              <h1> Detalhes do Produto </h1>
              <br /> <br />
    
              <div> <img src={produto.imagem} alt="" /> </div>
              <div> <h1> {produto.titulo} </h1> </div>
              <div> <h3> {produto.preco} </h3> </div>
            </div>
    
            <div>
              <h2> Descrição </h2>
              <div> {produto.descricao} </div>
    
              <h2> Especificações </h2>
              <div> {produto.especificacoes} </div>
    
              <div> <button onClick={comprar}> Comprar </button> </div>
            </div>
    
        </Container>
      )
}

export default Index;