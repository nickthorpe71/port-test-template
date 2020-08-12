import React from 'react';

export default function Contact(props) {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">If you are looking for a a committed versatile developer, or you are interested
          in connecting to discuss and work on innovative ventures.
            </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue size={35} id="contactName" name="contactName" />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          {/* contact-warning */}
          <div id="message-warning"> Error boy</div>
          {/* contact-success */}
          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <ul className="address">
              <li>Nick Thorpe</li>
              <li>Chicago, IL</li>
              <li>(347)583-3555</li>
              <li>nickthorpe71@gmail.com</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};
