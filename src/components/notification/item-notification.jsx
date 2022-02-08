import cx from 'classnames';
import { formatDistanceToNow, differenceInDays, format } from 'date-fns';
import PropTypes from 'prop-types';

export const ItemNotification = (props) => {
  const since = differenceInDays(Date.now(), props.at) > 7 ?
    format(props.at, 'dd-MM-yyyy hh:mm') : formatDistanceToNow(props.at, { addSuffix: true });

  return (
    <div className={cx('flex w-full hover:bg-gray-50 p-2 rounded-sm cursor-pointer dark:hover:bg-slate-600', props.unread ? 'bg-gray-50 dark:bg-slate-700' : null)}>
      <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
        <img className="rounded-full" src={props.imageUrl} width="40" height="40" alt={props.imageAlt} />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-600 dark:text-gray-100">{props.title}</span>
        <span className="text-sm line-clamp-4 text-gray-500 dark:text-gray-300">
          {props.content}
        </span>
        <span className="text-sm font-medium text-blue-500">{since}</span>
      </div>
    </div>
  );
};

ItemNotification.propTypes = {
  unread: PropTypes.bool,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  at: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
};
