<body style="font-family: Segoe UI; margin: 0; padding: 0;">
  <div class="container" style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f8f8; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <div class="logo" style="text-align: center; margin-bottom: 20px;">
      <img style="max-width: 100px; height: auto;" src="https://i.ibb.co/prgtPZg/logo1.png" alt="Company Logo">
    </div>
    <h1 class="headtitle" style="color: green; text-align: center;">{{title}} Order Confirmation</h1>
    <p style="font-size:18px">Hello <span class="customer-name" style="color: green;">{{Name}}</span>,</p>
    <p >{{firstMessege}}</p>

    <h2 style="color: green;">{{secondTitle}}</h2>
    <p >{{secondMessege}}</p>
    
    <div class="order-details" style="margin-top: 20px;">
      <h2 style="color: green;">Order Details:</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr>
            <th style="background-color: green; color:white; padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Currency</th>
            <th style="background-color: green; color:white; padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{SecondRow}}</th>
            <th style="background-color: green; color:white; padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Rate</th>
            <th style="background-color: green; color:white; padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{FourthRow}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{CurrencyName}}</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{TotalMoney}}</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{Rate}}</td>
            <td style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">{{FxAmount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
     <div>
     <p></p>
     </div>
    <p style="color: green;">{{title}} Location:</p>
    <p class="branch-details" >Branch Address: {{Address}} <br> Email: contact@m4fx.co.uk</p>