import { forwardRef } from "react";

export const Textarea = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div>
      <div>
        <label className="label">{label}</label>
        <textarea ref={ref} {...rest} />
      </div>
    </div>
  );
});
