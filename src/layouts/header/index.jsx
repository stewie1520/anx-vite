import { useSelector } from 'react-redux';

import { selectLayout } from '@/store/slices/layoutSlice';

import { BellIcon, ChatIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/solid';

const Header = () => {
    const { header } = useSelector(selectLayout);

    if (!header) {
        return null;
    }

    return (
        <div className="relative bg-white">
            <div className="max-w-8xl mx-auto">
                <div className="flex justify-between items-center border-b-2 border-gray-200 py-5 px-6">
                    {/* search box */}
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
                    {/* notification, chat */}
                    <div className="ml-auto flex space-x-3">
                        <button className="flex items-center justify-center bg-transparent text-gray-400 w-10 h-10 rounded-full">
                            <BellIcon className="w-6 h-6" />
                        </button>
                        <button className="flex items-center justify-center bg-transparent text-gray-400 w-10 h-10 rounded-full">
                            <ChatIcon className="w-6 h-6" />
                        </button>
                        <button className="flex relative justify-center items-center space-x-1">
                            <img className="rounded-full w-10 h-10" alt="A" src="https://randomuser.me/api/portraits/women/68.jpg" />
                            <ChevronDownIcon className="w-5 h-5 text-gray-200 text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

