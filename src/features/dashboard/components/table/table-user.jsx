import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RowUser } from '@/features/dashboard/components';

// selectors
import { selectUsers } from '@/features/dashboard/redux/selectors';
// actions
import { userFetchingStarted } from '@/features/dashboard/redux/slice';

export const TableUser = () => {
  const usersData = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetchingStarted());
  }, []);

  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-dark-blue bg-gray-50 dark:bg-slate-700 dark:text-gray-300">
        <tr>
          <th className="p-3 whitespace-nowrap">
            <div className="font-semibold text-left">Name</div>
          </th>
          <th className="p-3 whitespace-nowrap">
            <div className="font-semibold text-left">Email</div>
          </th>
          <th className="p-3 whitespace-nowrap">
            <div className="font-semibold text-left">Spent</div>
          </th>
          <th className="p-3 whitespace-nowrap">
            <div className="font-semibold text-center">Country</div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-gray-100 dark:bg-slate-800 dark:divide-slate-700">
        {
          usersData.length ?
            usersData.map((userData, idx) =>
              <RowUser
                key={idx}
                imageUrl={userData.imageUrl}
                name={userData.name}
                email={userData.email}
                spent={userData.spent}
                country={userData.country} />)
            : Array.from({ length: 5 }).map((_, idx) => <RowUser key={idx} empty />)
        }
      </tbody>
    </table>
  );
};
