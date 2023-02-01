;

const SearchBox = () => {
  return (
    <div className="relative bg-gray-100 p-2 mb-6">
      <input
        placeholder="Search..."
        className="p-3 w-full focus:outline-none"
      />
      <i class="fas fa-search text-gray-400 absolute top-1/2 -translate-y-1/2 right-4"></i>
    </div>
  );
}

export default SearchBox