import React from 'react';
import styles from './ContactStyles.modules.css';

const Contact=()=> {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5c8151c-64bd-4e6a-940c-62fe98b97064");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle"
      data-aos="zoom-in-up" data-aos-duration="1200">
      Contact
      </h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup" data-aos="zoom-in-up" data-aos-duration="1200">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name='name'
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
            name='email'
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
