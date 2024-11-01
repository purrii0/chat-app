const GenderRadio = ({onradiochange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            className="radio border-slate-900"
            onChange={() => onradiochange("male")}
            />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            value="female"
            className="radio border-slate-900"
            checked={selectedGender==="female"}
            onChange={() => onradiochange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderRadio;
