# Puppeteer Naukri.com Profile Updater

This Node.js script automates the process of updating your Naukri.com profile's resume headline using Puppeteer.

## Prerequisites

Before running the script, ensure you have Node.js installed on your system.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies using npm:
   ```
   npm install
   ```

## Configuration

1. Create a copy of the .env.example file and name it .env.
2. Open the .env file and provide your Naukri.com login credentials inside the double quotes.
   ```
   EMAIL_ID = "your_email@example.com"
   PASSWORD = "your_password"
   ```

## Usage

To run the script:

```
node index.js
```

The script will launch a headless browser, log in to your Naukri.com account, navigate to the profile page, and update the resume headline with the current text.
You can also automate the script to run daily using Cron jobs.

## Important Note

- Ensure that you have provided valid login credentials in the .env file before running the script.
- Make sure to review and understand the script's functionality before execution.
- If you encounter any issues, please don't hesitate to reach out to me.
