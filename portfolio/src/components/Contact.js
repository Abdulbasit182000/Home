import React from "react";
import Typewriter from "./TypeWriter";

const Contact = () => {
    return ( 
        <div className="contact">
          <h1>
            <Typewriter text= "Welcome to my Contact Page" delay={100} />
          </h1>
          <p>
            <Typewriter text= "To Contact me for any enquries email me at abdulbasit.jalil@gmail.com" delay={100} />
          </p>
        </div>
     );
}
export default Contact;