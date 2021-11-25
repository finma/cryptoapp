export const SelectButton = ({ label, selected, onClick }) => {
  const clasess = `py-2 px-5 font-medium uppercase rounded-md border border-gold cursor-pointer ${
    selected ? "bg-gold text-black " : "bg-black-custom text-gold"
  }`;
  return (
    <button onClick={onClick} className={clasess}>
      {label}
    </button>
  );
};
