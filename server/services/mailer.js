const nodemailer = require('nodemailer');

const template = require('../config/template');
const keys = require('../config/keys');
const sender = 'grocebookapp@gmail.com';
const hosti = 'http://localhost:3000';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: 'eyttbkdxyorwozmc'
  },
  tls: {
    rejectUnauthorized: false
},
  port: 465,
  host: 'smtp.gmail.com'
});

exports.sendMail = async (email, type, hosti, data) => {
    try {
      const message = prepareTemplate(type, hosti, data);
  
      const config = {
        from: sender,
        to: email,
        subject: message.subject,
        text: message.text
      };
  
      return await transporter.sendMail(config);
    } catch (error) {
      return error;
    }
  };
  const prepareTemplate = (type, hosti, data) => {
    let message;
  
    switch (type) {
      case 'reset':
        message = template.resetEmail(hosti, data);
        break;
  
      case 'reset-confirmation':
        message = template.confirmResetPasswordEmail();
        break;
  
      case 'signup':
        message = template.signupEmail(data);
        break;
  
      case 'merchant-signup':
        message = template.merchantSignup(hosti, data);
        break;
  
      case 'merchant-welcome':
        message = template.merchantWelcome(data);
        break;
  
      case 'newsletter-subscription':
        message = template.newsletterSubscriptionEmail();
        break;
  
      case 'contact':
        message = template.contactEmail();
        break;
  
      case 'merchant-application':
        message = template.merchantApplicationEmail();
        break;
  
      case 'order-confirmation':
        message = template.orderConfirmationEmail(data);
        break;
  
      default:
        message = '';
    }
  
    return message;
  };
  