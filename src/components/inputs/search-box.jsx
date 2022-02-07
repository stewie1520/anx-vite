import { SearchIcon } from '@heroicons/react/outline';

const SearchBox = () => {
  return (
    <div className="relative text-gray-600 inline-block">
      <div className="absolute text-gray-600 left-5 w-5 h-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SearchIcon className="text-gray-400" />
      </div>
      <input className="bg-gray-100 h-10 pl-9 pr-3 text-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
        type="search" name="search" placeholder="Search everything.." />
      <button type="submit" className="bg-blue-400 text-white text-sm h-10 px-5 font-bold hover:bg-blue-500" >
        Search
      </button>
    </div>
  );
};

export { SearchBox };
