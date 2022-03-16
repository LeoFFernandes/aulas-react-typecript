import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { Dashboard, Home, Login } from "../pages";

import './index.css';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>  
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="*" element={<Navigate to ="/"/>} />
      </Switch>
    </BrowserRouter>
  );
};
