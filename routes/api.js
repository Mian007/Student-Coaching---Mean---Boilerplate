const User = require('../models/user');
const emailSubscriber = require('../models/email-subscriber')
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const config = require('../config/db');

router.get('/get-all-teachers', (req, res) => {
    // Search database for all blog posts
    User.find({isTeacher: 'true'}, (err, teachers) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if teachers were found in database
        if (teachers.length === 0) {
          res.json({ success: false, message: 'No teachers found' }); // Return error of no teachers found
        } else {
          res.json({ success: true, teachers: teachers }); // Return success and teachers array
        }
      }
    }).sort({ '_id': -1 }); // Sort teachers from newest to oldest
  });

  router.post('/email-subscriber', (req, res) => {
    if(!req.body.email){
      res.json({success: false, message: 'You must provide an email'});
    } else {
      let emailSubscribers = new emailSubscriber({
        email: req.body.email.toLowerCase()
      });
      emailSubscribers.save((err) => {
        if(err) {
          if(err.code === 11000) {
            res.json({success: false, message: "This email is already waiting for the newest updates!"});
          } else {
            if (err.errors) {
              if(err.errors.email) {
                return res.json({success: false, message: err.errors.email.message});
            }
            return res.json({success: false, message: 'Could not subscrite at this time. Please try again later. Error: ', err});
          }
        }
      } else {
        res.json({ success: true, message: 'Successfully Subscribed!'});
      }
    })
  }
});

router.get('/check-subscriber-email/:emailSubscriber', (req, res) => {
  if(!req.params.emailSubscriber) {
    res.json({ succes: false, message: "E-mail was not provided"});
  } else {
    emailSubscriber.findOne({ emailSubscriber: req.params.emailSubscriber}, (err, emailSubscriber) => {
      if(err) {
        res.json({ succes: false, message: err})
      } else {
        if (emailSubscriber) {
          res.json({ success: false, message: "This email is already subscribed"})
        } else {
          res.json({ success: true, message: "You are ready to receive some awesome updates!"})
        }
      }
    })
  }
})

module.exports = (router);
