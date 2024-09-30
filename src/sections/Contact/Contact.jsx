import React from 'react';
import styles from './ContactStyles.modules.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle"
      data-aos="zoom-in-up" data-aos-duration="1200">
      Contact
      </h1>
      <form action="">
        <div className="formGroup" data-aos="zoom-in-up" data-aos-duration="1200">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup"
        data-aos="zoom-in-up" data-aos-duration="1200">

          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup"
        data-aos="zoom-in-up" data-aos-duration="1200">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" data-aos="zoom-in-up" data-aos-duration="1200" />
      </form>
    </section>
  );
}

export default Contact;
