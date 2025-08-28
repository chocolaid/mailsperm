export const cashappTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CashApp Payment</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #00D632;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #333;
        }
        .amount {
            background-color: #f8f9fa;
            border: 2px solid #00D632;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            margin: 20px 0;
        }
        .amount-label {
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
        }
        .amount-value {
            font-size: 32px;
            font-weight: bold;
            color: #00D632;
        }
        .message {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin: 20px 0;
            border-left: 4px solid #00D632;
        }
        .footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        .button {
            display: inline-block;
            background-color: #00D632;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin: 20px 0;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Cash App</div>
            <div>Payment Notification</div>
        </div>
        
        <div class="content">
            <div class="greeting">Hello $name,</div>
            
            <div class="amount">
                <div class="amount-label">Payment Notification</div>
                <div class="amount-value">CashApp</div>
            </div>
            
            <div class="message">
                <strong>Message:</strong><br>
                $message
            </div>
            
            <p>This payment has been processed through Cash App. You can view your transaction history in the Cash App mobile application.</p>
            
            <div style="text-align: center;">
                <a href="#" class="button">View in Cash App</a>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated message from Cash App. Please do not reply to this email.</p>
            <p>© 2024 Cash App. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
