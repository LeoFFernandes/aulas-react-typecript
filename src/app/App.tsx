import { Routes } from "./routes/index";
import { UserLoggedProvider } from "./shared/contexts";

export const App = () => {
  return (
    <div className="App">
      <UserLoggedProvider>
        <Routes />
      </UserLoggedProvider>
    </div>
  );
};
