// Props estritas

// export const Input = ({ label, type, register }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <input type={type} {...register} />
//     </div>
//   );
// };

// versatilidade
// ...rest (Props Rest) -> absorver qualquer prop
//  que não esteja definida dentro do componente
//  e condensar em um objeto

import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="inpt" ref={ref} {...rest} />
      {error ? <p className="paragraph error">{error.message}</p> : null}
    </div>
  );
});
