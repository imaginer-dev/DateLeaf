import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  title: string;
  placeholder: string;
  hint: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorText?: string;
}

const InputForm: React.FC<Props> = ({ title, placeholder, hint, onChange, error = false, errorText = '', ...rest }) => {
  return (
    <label htmlFor={rest.id} className="form-control w-full">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        id={rest.id}
        placeholder={placeholder}
        className="input input-bordered w-full"
        onChange={onChange}
        {...rest}
      />
      <div className="label flex h-8 flex-row items-center">
        <span className={`label-text-alt ${error ? 'text-error' : ''}`}>{error ? errorText : hint}</span>
      </div>
    </label>
  );
};

export default InputForm;
