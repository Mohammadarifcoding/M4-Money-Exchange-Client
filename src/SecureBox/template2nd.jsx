<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Ready for Collection</title>
  <style>
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0;">
  <div class="container" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
    <div class="logo" style="text-align: center; margin-bottom: 20px;">
     <img style="max-width: 100px; height: auto;" src="https://i.ibb.co/prgtPZg/logo1.png" alt="Company Logo">
    </div>
    <h2 class="mtitle" style="color: white; font-weight: bold; text-align: center; font-size: 25px; background-color: green; margin-top: 0; padding-top: 20px;">Good News: Your Order is Ready for Collection</h2>
    <p>Hello {{Name}},</p>
    <p>Your order {{Order_Id}} is now ready for collection at our {{Address}}.</p>
    <p>This will be held at the exchange rate which was confirmed at the time of order for 24-hours. If you are not able to collect your currency within 24 hours, the exchange rate may be subject to change.</p>
    <p><strong class="st" style="color: green; font-size: 18px; text-decoration: underline;">Collecting your order:</strong></p>
    <p>When collecting your order you will need to provide proof of ID in the form of photographic ID (passport or driving license). In addition, please note that proof of address, such as a utility bill or a bank/credit card statement dated within the past 90 days, may also be needed in certain circumstances.</p>
    <p>If you need any help with your order, please get in touch with our customer services team on <a href="mailto:support@brightonfx.com" style="color: green;">support@brightonfx.com</a> (09:30 to 17:30 Monday to Saturday).</p>
    
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Name:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{Name}}</td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Email:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{Email}}</td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Mobile:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{Phone_Number}}</td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Currencies Ordered:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Currency</th>
              <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">{{SecondRow}}</th>
              <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Rate</th>
              <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">{{FourthRow}}</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{CurrencyName}}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{TotalMoney}}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{Rate}}</td>
              <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{FxAmount}}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Collection Location:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">{{Address}}</td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Phone:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">01273 030708</td>
      </tr>
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: left;">Email:</th>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">support@brightonfx.com</td>
      </tr>
    </table>
    
    <p><strong style="color: green;">Opening Times:</strong></p>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Mon</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Tue</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Wed</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Thu</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Fri</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Sat</th>
        <th style="background-color: green; color: white; border: 1px solid #ddd; padding: 8px; text-align: center;">Sun</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">9:30 - 17:30</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">Closed</td>
      </tr>
    </table>
    
    <p class="footer" style="text-align: center; margin-top: 20px;">Have feedback? We would love to hear how we are doing; search for our store on Google and leave us a Google rating and review.</p>
    
    <p class="footer" style="text-align: center;">Thank you for ordering your travel money with us,<br>Brighton FX</p>
  </div>
</body>