/**
 *
 * FAQ
 *
 */

import React from "react";

const styles = {
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "grey",
  arrowColor: "red",
};

const config = {
  animate: true,
  tabFocus: true,
};

const PrivacyPolicy = (props) => {
  return (
    <div style={{ width: "700px", margin: "auto" }}>
      <h3>Privacy Policy for GroceBook</h3>
      <p>
        This privacy policy governs the collection, storage, use and protection
        of personal data of users of our online grocery web application.
      </p>
      <h6>Information Collection:</h6>
      <li>
        We collect information that users provide to us voluntarily, including
        name, address, email, phone number, and payment information.
      </li>{" "}
      <li>
        We may also collect information about users' activities on our platform,
        including items they purchase, search history, and browsing behavior.
      </li>{" "}
      <h6>Information Use:</h6>
      <li>
        {" "}
        We use collected information to fulfill user orders, process payments,
        send updates, provide customer support and improve our services.
      </li>
      <li>
        {" "}
        We may also use the information to send promotional emails and/or
        offers.
      </li>
      <h6> Information Sharing:</h6>
      <li>
        {" "}
        We do not sell, trade, or rent users' personal information to any third
        parties.{" "}
      </li>
      <li>
        We may share personal information with our partners, contractors, and
        service providers to help us provide our services and support our
        business operations.{" "}
      </li>
      <li>
        In case of legal obligation or to protect the rights and safety of our
        users and the public, we may share personal information with law
        enforcement agencies or other third parties.
      </li>
      <h6> Data Security:</h6>
      <li>
        {" "}
        We implement reasonable security measures to protect personal
        information from unauthorized access, disclosure, alteration, or
        destruction.
      </li>
      <li>
        {" "}
        However, no security measures are perfect, and we cannot guarantee the
        complete protection of personal information.
      </li>
      <h6> User Control:</h6>
      <li>
        Users may access, update, or delete their personal information at any
        time by logging into their account.{" "}
      </li>
      <li>
        Users may also opt-out of receiving promotional emails by clicking the
        “unsubscribe” link at the bottom of such emails.
      </li>
      <h6></h6>
      <li>
        {" "}
        Changes to This Policy: We reserve the right to update this privacy
        policy at any time.{" "}
      </li>
      <li>
        Any changes to this policy will be posted on our website, and users are
        encouraged to review the policy periodically.
      </li>
      <h6>Contact Us:</h6>
      <li>
        {" "}
        If you have any questions or concerns about this privacy policy, please
        contact us at 03087293542. Effective Date: Feb 2023.
      </li>
    </div>
  );
};

export default PrivacyPolicy;
