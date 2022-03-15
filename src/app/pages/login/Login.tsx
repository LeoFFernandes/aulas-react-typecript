import { useCallback, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBack = () => {
    history("/dashboard");
  };
  const handleLogin = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form>
        <InputLogin
          label="Email"
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

        <ButtonLogin type="button" onClick={handleLogin}>Login</ButtonLogin>
        <ButtonLogin type="button" onClick={handleBack}>Voltar</ButtonLogin>

      </form>
    </div>
  );
};
