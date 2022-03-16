import { NavbarComponent } from "../../shared/components";

import "./styles/dashboard.css";

export const Dashboard = () => {
  return (
    <>
      <NavbarComponent />
      <div className="div-dashboard">
        <div className="div-dashboard-container">
          <form className="form-horizontal">
            <ul className="list-vertical">
              <li>Funcionario 1</li>
              <li>Funcionario 2</li>
              <li>Funcionario 3</li>
              <li>Funcionario 4</li>
              <li>Funcionario 5</li>
            </ul>
          </form>
        </div>
        <div>
          Teste
        </div>
      </div>
    </>
  );
};
