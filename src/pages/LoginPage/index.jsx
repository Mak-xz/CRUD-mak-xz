import { LoginForm } from "../../components";
import { scraplexLogo } from "../../assets";

export const LoginPage = () => {
  return (
    <main className="container form">
      <img src={scraplexLogo} alt="The msglogo" />
      <LoginForm />
    </main>
  );
};
