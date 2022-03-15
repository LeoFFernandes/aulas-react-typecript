import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUserLogged } from '../../shared/hooks';


export const Dashboard = () => {
  const counterRef = useRef({ counter : 0 });
  
  const { UserName, logout } = useUserLogged();
  return (
    <div>
      <p>{UserName}</p>
        <p>Dashboard</p>
        <p>{counterRef.current.counter}</p>
        <button onClick={()=> counterRef.current.counter++}>Somar</button>
        <button onClick={logout}>Log Out</button>
        <Link to="/login">Login</Link>
    </div>
  )
};
