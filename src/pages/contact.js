import React from 'react';

// Styles
import styles from '../CSS/contact.module.css'
import styled from 'styled-components'

// components
import Layout from '../components/Layout' // navigation and footers

///// WORK IN PROGESS /////

const ContentStyle = styled.main`
max-width: 80%;
margin: 0 auto;
`


const Contact = () => {


  const handleChange = ({name, email, subject, content}) => {
    // TODO: use apollo client to send data to back end, return condition
    console.log({name, email, subject, content})
  };


  return (
    <Layout>

    <ContentStyle>
      <button onClick={handleChange({name: 'isaac', email: 'b', subject: 'c', content: 'd'})}>
          send request
      </button>
      <p>dont use this yet, it is being worked on!</p>
      <form name="contact" method="POST" data-netlify="true">
          <div className={styles.login}>
              <input type="text" placeholder="Your Name" className={styles.input} />
              <input type="text" placeholder="Your Email Address" className={styles.input} />
          </div>
          
          <div className={styles.subject}>
              <input type="text" placeholder="Subject" className={styles.input} />
          </div>
          
          <div className={styles.msg}>
              <textarea  className={styles.area} placeholder="dont use this yet, it is being worked on!"></textarea>
          </div>


              <div className={styles.btn}>Send Message</div>
        </form>

    </ContentStyle>
    </Layout>
  );
};

export default Contact;
