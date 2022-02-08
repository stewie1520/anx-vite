import { useSelector } from 'react-redux';

import { selectLayout } from '@/store/slices/layoutSlice';

// components
import { NotificationHeaderButton } from '@/components/notification';
import { ChatHeaderButton } from '@/components/chats';
import { SearchBox } from '@/components/inputs';
import { UserHeaderMenu } from '@/components/menu';

const Header = () => {
    const { header } = useSelector(selectLayout);

    if (!header) {
        return null;
    }

    return (
        <div className="relative bg-white dark:bg-slate-800">
            <div className="max-w-8xl mx-auto">
                <div className="flex justify-between items-center border-b-[1px] border-gray-200 py-5 px-6 dark:border-slate-700">
                    {/* search box */}
                    <SearchBox />
                    {/* notification, chat */}
                    <div className="ml-auto flex space-x-3">
                        <NotificationHeaderButton />
                        <ChatHeaderButton />
                        <UserHeaderMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

