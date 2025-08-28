export const cashappTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>CashApp Notification</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #00d4aa, #00a86b); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 28px;">CashApp</h1>
        <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Payment Notification</p>
    </div>
    
    <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #00d4aa;">
        <h2 style="color: #00a86b; margin-top: 0;">Hello $name,</h2>
        <p style="font-size: 16px; margin-bottom: 20px;">$message</p>
    </div>
    
    <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f1f3f4; border-radius: 8px;">
        <p style="margin: 0; color: #666; font-size: 14px;">
            This is an automated message from CashApp. Please do not reply to this email.
        </p>
    </div>
</body>
</html>
`
