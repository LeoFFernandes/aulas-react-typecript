import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { NavbarComponent } from "../../shared/components";
import "./login.css";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    history("/dashboard");
  };
  return (
    <>
      <NavbarComponent />
      <div className="div-login">
        <form className="form-login">
          <InputLogin
            label="Login"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
            onPressEnter={() => inputPasswordRef.current?.focus()}
          />
          <InputLogin
            ref={inputPasswordRef}
            label="Senha"
            value={password}
            type="password"
            onChange={(newValue) => setPassword(newValue)}
          />
          <div className="button-login-container">
            <ButtonLogin type="button" onClick={handleBack}>
              Login
            </ButtonLogin>
            <ButtonLogin type="button" onClick={handleBack}>
              Registrar
            </ButtonLogin>
          </div>
        </form>
      </div>
    </>
  );
};
