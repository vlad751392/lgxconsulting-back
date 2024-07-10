const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'igx.consulting.no.replay@gmail.com',
        pass: 'ozwn mgap xmoh djlu'
    }
});

app.post('/send-email', (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, phone, companyWebsite, monthlyShippingVolume, averageShippingWeight } = req.body;
    console.log( firstName, lastName, email, phone, companyWebsite, monthlyShippingVolume, averageShippingWeight);
    

    const mailOptions = {
        from: 'igx.consulting.no.replay@gmail.com',
        to: 'support@lgxconsulting.com',
        subject: 'New Request',
        html: `
            <div style="background: aliceblue; padding: 40px;">
            <h2 class="font-size:32px">New request</h2>
            <table border="1" style="border-color:#837c7a;" cellpadding="10" cellspacing="0">
                <tr style="border-color:#837c7a;">
                    <th>Name</th>
                    <td>${firstName} ${lastName}</td>
                </tr>
                <tr style="border-color:#837c7a;">
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr style="border-color:#837c7a;">
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr style="border-color:#837c7a;">
                    <th>Company Website</th>
                    <td>${companyWebsite}</td>
                </tr>
                <tr style="border-color:#837c7a;">
                    <th>Monthly Shipping Volume</th>
                    <td>${monthlyShippingVolume}</td>
                </tr>
                <tr style="border-color:#837c7a;">
                    <th>Average Shipping Weight</th>
                    <td>${averageShippingWeight}</td>
                </tr>
            </table>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
