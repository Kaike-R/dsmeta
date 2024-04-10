import logo from "../../assets/img/logo.svg"
import "./styles.css"

export default function Header() {
  
  return (
    <div>
      <header>
        <div className="dsmeta-logo-container">
          <img src={logo} alt="Falha" />
          <h1>DSMeta</h1>
          <p>
            Desenvolvido Por Kaike em conjunto com 
              <a href="https://www.instagram.com/devsuperior.ig"> @devsuperior</a>
          </p>
        </div>
      </header>
    </div>
  );
};