require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer');

var validator = require("email-validator");

const formSubmit = async (req, res) => {

    // console.log(req.body)
    try {

        const { fullName, email, phone, subject, message } = req.body;


        const externalData = {
            "name": fullName,
            "email": email,
            "phone": phone,
            "subject": subject,
            "message": message,

        }

        // console.log(externalData)
        // console.log(process.env.EMAIL)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.EMAIL}`,
                pass: `${process.env.PASSWORD}`
            }
        });

        const mailOptions = {
            from: 'VicpoloEmpire',
            to: 'support@vicpoloempire.com',
            subject: externalData.subject,
            html: `<html>
                      <body>
                          <h2 style="font-size:18px;font-weight:600;color:green"> Information From Adane Technology:</h2>
                          <table style="border-collapse: collapse; width: 100%;">
                              <tr>
                                  <th style="border: 1px solid black; padding: 8px; text-align: left; background-color: #f2f2f2;">Field</th>
                                  <th style="border: 1px solid black; padding: 8px; text-align: left; background-color: #f2f2f2;">Value</th>
                              </tr>
                              ${Object.entries(externalData).map(([field, value]) => `
                                  <tr>
                                      <td style="border: 1px solid black; padding: 8px; text-align: left;">${field}</td>
                                      <td style="border: 1px solid black; padding: 8px; text-align: left;">${value}</td>
                                  </tr>
                              `).join('')}
                          </table>
                      </body>
                  </html>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            message: 'Successfully submitted the form',
            data: {
                data: externalData
            }
        });

    } catch (err) {

        console.log(err);
        res.status(500).json({
            status: 'fail',
            error: err.message,
        });
    }
};








module.exports = { formSubmit }