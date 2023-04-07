import ReactDOM from 'react-dom';
import classes from './notification.module.css';
import { StatusNotification } from '@/models/status-notification';

function Notification(props: { notification: StatusNotification }) {
  const { notification } = props;

  let statusClasses = '';

  if (notification.status === 'success') {
    statusClasses = classes.success;
  }

  if (notification.status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{notification.title}</h2>
      <p>{notification.message}</p>
    </div>,
    document.getElementById('notifications') as HTMLElement
  );
}

export default Notification;
