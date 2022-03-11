import  {useNavigate}  from "react-router-dom";

export const Login = () => {
  const history = useNavigate();

  const handleLogin = () => {
      history('dashboard')
  };

  return (
    <div>
        <form>
            <label>Username
                <span>Email</span>
                <input/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password"/>
            </label>
            <button type="button" onClick={handleLogin}>Entrar </button>
        </form>
    </div>
  );
};
