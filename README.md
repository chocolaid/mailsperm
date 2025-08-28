# Mail Sender Application

A React application with React Router v7 for sending professional emails using CashApp and Coinbase templates via Resend API.

## Features

- **React Router v7** for client-side routing
- **CashApp Mail Sender** with custom form fields
- **Coinbase Mail Sender** with crypto currency support
- **Professional Email Templates** with variable substitution
- **Resend Integration** for reliable email delivery
- **Responsive Design** with modern UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Resend API Key
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=your_resend_api_key_here

# Your domain for sending emails
# Make sure this domain is verified in Resend
FROM_EMAIL=noreply@yourdomain.com
```

### 3. Resend Setup

1. Sign up at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Verify your domain in Resend
4. Update the `FROM_EMAIL` in your `.env` file

### 4. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## Usage

### CashApp Mail Sender
- Navigate to `/about` or click "CashApp" in the navigation
- Fill in the form fields:
  - **Recipient Name**: Name of the person receiving the email
  - **Recipient Email**: Email address to send to
  - **Email Subject**: Custom subject line for the email
  - **Amount**: Payment amount (optional)
  - **Message**: Custom message content
- Click "Send CashApp Mail" to send the email

### Coinbase Mail Sender
- Navigate to `/contact` or click "Coinbase" in the navigation
- Fill in the form fields:
  - **Recipient Name**: Name of the person receiving the email
  - **Recipient Email**: Email address to send to
  - **Email Subject**: Custom subject line for the email
  - **Amount**: Transaction amount (optional)
  - **Currency**: Select from BTC, ETH, USDC, or LTC
  - **Message**: Custom message content
- Click "Send Coinbase Mail" to send the email

## Email Templates

The application uses HTML email templates with variable substitution:

### Available Variables
- `$name` - Recipient's name
- `$message` - Custom message content
- `$amount` - Payment/transaction amount
- `$currency` - Currency type (Coinbase only)

### Template Features
- Professional branding matching CashApp/Coinbase
- Responsive design for mobile and desktop
- Variable substitution for dynamic content
- Clean, modern styling

## API Endpoints

### POST `/api/send-cashapp-mail`
Sends a CashApp-themed email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Payment Received",
  "message": "Thank you for your payment!",
  "amount": "$50.00"
}
```

### POST `/api/send-coinbase-mail`
Sends a Coinbase-themed email.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Transaction Complete",
  "message": "Your transaction has been processed.",
  "amount": "0.001",
  "currency": "BTC"
}
```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout with navigation
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── cashapp.tsx        # CashApp mail sender
│   └── coinbase.tsx       # Coinbase mail sender
├── router.tsx             # React Router configuration
└── main.tsx              # Application entry point

api/
├── send-cashapp-mail.ts   # CashApp email API endpoint
└── send-coinbase-mail.ts  # Coinbase email API endpoint

templates/
├── cashapp-template.ts    # CashApp email template
└── coinbase-template.ts   # Coinbase email template
```

## Technologies Used

- **React 19** - Frontend framework
- **React Router v7** - Client-side routing
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Resend** - Email delivery service
- **ESLint** - Code linting

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## License

MIT License