import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../images/logo.svg';
import '../styles/global.scss';
import '../styles/pages/landing.scss';

export default function Landing(){
  return(
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <div className="logo-name">
           <img src={logoImg} alt ="logo"/>
           <strong>Dev</strong>
           <span>Post</span>
          </div>
          
          <h1>Seu lugar de comentar sobre tecnologia!</h1>
          <p>
            Sua plataforma de networking para post de notícias e tira dúvidas com outros devs
          </p>
        </main>

        

        <Link to="/" className="enter-app">
          <span>
            <FiArrowRight size={36} color="#FFF"/>
          </span>
          <strong>
            Cadastre-se!
          </strong>
        </Link>
      </div>
    </div>
  );
}