interface Props {
  title: string;
  placeholder: string;
  hint: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<Props> = ({ title, placeholder, hint, onChange }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        onChange={onChange}
      />
      <div className="label">
        <span className="label-text-alt">{hint}</span>
      </div>
    </label>
  );
};

export default InputForm;
