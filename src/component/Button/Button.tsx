export const Button = (props: { label: string }) => {
  const { label } = props;
  return (
    <button
      type="button"
      className=" px-2 w-full text-base font-semibold text-center text-gray-800 uppercase bg-gold hover:bg-gold rounded-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gold shadow-md transition duration-200 ease-in focus:outline-none"
    >
      {label}
    </button>
  );
};
