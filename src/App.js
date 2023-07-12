
import React,{Component} from 'react';
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import {Menubar} from 'primereact/menubar'
import { withRouter } from 'react-router-dom/cjs/react-router-dom';
import styled from 'styled-components';
import Home from './pages/home';
import Contato from './pages/contato';
import Sobre from './pages/sobre';



const DivMain=styled.h1`
color:black; 
font-size:10px;
`;

class App extends Component{
  render() {
    const menuitems=[ // é o menu de navegação entre as paginas
      {
        label:'Home',
        command:()=>this.props.history.push('/'), // menus de aparecera como link de navegação da pagina essa sera a pagina inicial
        icon:'pi pi-fw pi-user'
      },
      {
        label:'Sobre',
        command:()=>this.props.history.push('/Sobre'),
        icon:'pi pi-fw pi-user'
      },
      {
        label:'Contatos',
        command:()=>this.props.history.push('/contato'),
        icon:'pi pi-fw pi-comment'
      }
    ];
    return(
        <div className='App'>
          <Menubar model={menuitems}/> {/** menu de navegação */}
          <Header/>
          <DivMain>
            <main>
              <div className="content" id="content">
                {this.props.children}
               
              </div>
            </main>
          </DivMain>
          <Footer/>
          </div>
    );
  }
}
export default withRouter(App);
