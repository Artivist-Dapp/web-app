import { FieldError } from "react-hook-form";

interface Props {
  title: string;
  error?: any;
  className?: string;
}

const LabelAndError = ({ title, error, className }: Props) => {
  const errorMessage = error ? error.message : null;
  const classStyle = className
    ? `flex justify-between items-center ${className}`
    : `flex justify-between items-center`;

  return (
    <>
      <div className={classStyle}>
        <label className="label" htmlFor="title">
          {title}
        </label>
        {errorMessage && <span className="label-error">{errorMessage}</span>}
      </div>
    </>
  );
};

export default LabelAndError;
