import React from "react";
import { Form } from "reactstrap";

function Footer(props) {
  return (
    <footer className="site-footer text-center">
      <div className="container">
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-6 col-sm-3">
            <a
              className="btn btn-social-icon buttonStyle m-1"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon buttonStyle m-1"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon buttonStyle m-1"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon buttonStyle m-1"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
        <div>
          <Form>
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="subscribeNewsletter"
                    className="form-control"
                  />
                  <label className="form-label" for="subscribeNewsletter">
                    Email address
                  </label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn buttonStyle mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
