import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';

export const RowUser = ({ empty, imageUrl, name, email, spent, country }) => {
  return (
    <tr>
      {
        empty ? (
          <>
            <td className="p-2 whitespace-nowrap">
              <Skeleton />
            </td>
            <td className="p-2 whitespace-nowrap">
              <Skeleton />
            </td>
            <td className="p-2 whitespace-nowrap">
              <Skeleton />
            </td>
            <td className="p-2 whitespace-nowrap">
              <Skeleton />
            </td>
          </>
        ) : (
          <>
            <td className="p-2 whitespace-nowrap">
              <div className="flex items-center">
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={imageUrl} width="40" height="40" alt="Alex Shatov" /></div>
                <div className="font-medium text-gray-800">{name}</div>
              </div >
            </td >
            <td className="p-2 whitespace-nowrap">
              <div className="text-left">{email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-left font-medium text-green-500">{spent}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
              <div className="text-lg text-center">{country}</div>
            </td>
          </>
        )
      }
    </tr >
  );
};

RowUser.propTypes = {
  empty: PropTypes.bool,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  spent: PropTypes.string,
  country: PropTypes.string,
};

