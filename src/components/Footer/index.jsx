import style from "./style.module.scss";
import { scraplexWhite } from "../../assets";

export const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.container__box}>
        <img src={scraplexWhite} alt="The msg logo" />
        <p className="paragraph white">&copy; Todos os direitos reservados - the msg.</p>
      </div>
    </footer>
  );
};
