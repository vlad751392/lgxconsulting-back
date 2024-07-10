const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

const sendEmail = (data) => {
    const { nameFirst, nameLast, email, phone, companyWebsite, shippingVolume, shippingWeight } = data;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient@example.com',
        subject: 'Shipping Information',
        html: `
            <h2>Shipping Information</h2>
            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>Name</th>
                    <td>${nameFirst} ${nameLast}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Company Website</th>
                    <td>${companyWebsite}</td>
                </tr>
                <tr>
                    <th>Monthly Shipping Volume</th>
                    <td>${shippingVolume}</td>
                </tr>
                <tr>
                    <th>Average Shipping Weight</th>
                    <td>${shippingWeight}</td>
                </tr>
            </table>
        `
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
