import React, { useState } from 'react';
import axios from 'axios';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/messages', formData);
      alert('Message sent successfully!');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section className={styles.contactmain}>
      <div className={styles.content}>
        <div className={styles.leave}>
          <div className={styles.container}>
            <h2 className={styles.title}>Leave Me Your Info</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label><h4>Your Full Name ( Required )</h4></label>
              <input
                type="text"
                className={styles.input}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label><h4>Your Email ( Required )</h4></label>
              <input
                type="email"
                className={styles.input}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label><h4>Subject</h4></label>
              <input
                type="text"
                className={styles.input}
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <label><h4>Your Message</h4></label>
              <textarea
                name="message"
                className={styles.textarea}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className={styles.button}>SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.head2}>
            <h2>Contact</h2>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.boxlogo} >
                <div className={styles.eclipse}>
                  <div className={styles.eclipseimg}>
                    <img src={getImageUrl("contact/location.png")} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.boxtext} >
                <div>
                  <h4>Country:</h4>
                  <p>Bangladesh</p>
                </div>
                <div>
                  <h4>City:</h4>
                  <p>Dhaka</p>
                </div>
                <div>
                  <h4>Street:</h4>
                  <p>35 Vhatara, Badda</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxlogo} >
                <div className={styles.eclipse}>
                  <div className={styles.eclipseimg}><img src={getImageUrl("contact/mail.png")} alt="" /></div>

                </div>
              </div>
              <div className={styles.boxtext} >
                <div>
                  <h4>Email:</h4>
                  <p>sammansaini@gmail.com</p>
                </div>
                <div>
                  <h4>Skype:</h4>
                  <p>@SammanSaini</p>
                </div>
                <div>
                  <h4>Telegram:</h4>
                  <p>@sammansaini</p>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.boxlogo} >
                <div className={styles.eclipse}><div className={styles.eclipseimg}><img src={getImageUrl("contact/Mobile.png")} alt="" /></div>
                </div>
              </div>
              <div className={styles.boxtext} >
                <div>
                  <h4>Support Service:</h4>
                  <p>12323</p>
                </div>
                <div>
                  <h4>Office:</h4>
                  <p>+91 (012)323 434 343</p>
                </div>
                <div>
                  <h4>Personal:</h4>
                  <p>+91 7983875186</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
