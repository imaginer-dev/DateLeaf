import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  title: string;
  placeholder: string;
  hint: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({ title, placeholder, hint, onChange, ...rest }) => {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input placeholder={placeholder} className="input input-bordered w-full" onChange={onChange} {...rest} />
      <div className="label">
        <span className="label-text-alt">{hint}</span>
      </div>
    </label>
  );
};

export default InputForm;
