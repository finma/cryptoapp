interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: any;
}

export const SearchInput = (props: SearchInputProps) => {
  const { searchTerm, setSearchTerm } = props;

  const searchHandler = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative m-auto mb-4 w-full md:w-1/2">
      <input
        value={searchTerm}
        onChange={(e) => {
          return searchHandler(e);
        }}
        placeholder="Search For a Crypto Currency..."
        className="py-2 pr-2 pl-10 my-4 w-full font-normal text-white bg-black-custom rounded-xl border-2 outline-none"
      />
      <div className="absolute top-7 left-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
