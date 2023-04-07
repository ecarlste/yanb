export interface StatusNotification {
  status: string;
  title: string;
  message: string;
}

export function generatePendingNotification(): StatusNotification {
  return {
    status: 'pending',
    title: 'Sending message...',
    message: 'You message is on its way!',
  };
}

export function generateSuccessNotification(): StatusNotification {
  return {
    status: 'success',
    title: 'Success!',
    message: 'Message sent successfully!',
  };
}

export function generateFailureNotification(
  message: string
): StatusNotification {
  return {
    status: 'error',
    title: 'Error!',
    message,
  };
}
