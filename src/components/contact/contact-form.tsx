import { FormEvent, useEffect } from 'react';
import classes from './contact-form.module.css';

import React, { useState } from 'react';
import { Message } from '@/models/message';
import {
  generateFailureNotification,
  generateSuccessNotification,
} from '@/models/status-notification';
import Notification from '../ui/notification';

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [enteredName, setEnteredName] = useState<string>('');
  const [enteredMessage, setEnteredMessage] = useState<string>('');
  const [requestStatus, setRequestStatus] = useState<string>('');
  const [requestError, setRequestError] = useState<string>('');

  useEffect(() => {
    if (['success', 'error'].includes(requestStatus)) {
      const timer = setTimeout(() => {
        setRequestStatus('');
        setRequestStatus('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: FormEvent) {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await createMessage({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus('success');
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'success') {
    notification = generateSuccessNotification();
  } else if (requestStatus === 'error') {
    notification = generateFailureNotification(requestError);
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Submit Message</button>
        </div>
      </form>
      {notification && <Notification notification={notification} />}
    </section>
  );
}

async function createMessage(message: Message) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

export default ContactForm;
