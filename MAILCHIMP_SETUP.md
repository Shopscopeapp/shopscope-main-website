# Mailchimp Integration Setup Guide

## Prerequisites
- Mailchimp account (free tier works fine)
- ShopScope website code

## Step 1: Get Mailchimp API Key

1. **Login to Mailchimp**
   - Go to [mailchimp.com](https://mailchimp.com)
   - Sign in to your account

2. **Navigate to API Keys**
   - Click your profile icon (bottom left)
   - Select "Account & billing"
   - Click "Extras" dropdown
   - Select "API keys"

3. **Create API Key**
   - Click "Create A Key"
   - Give it a name like "ShopScope Website"
   - Copy the API key (you won't be able to see it again!)

## Step 2: Get Audience ID

1. **Go to Audience**
   - Click "Audience" in the main menu
   - Click "All contacts"

2. **Access Audience Settings**
   - Click "Settings" dropdown
   - Select "Audience name and defaults"

3. **Find Audience ID**
   - Look for "Audience ID" 
   - Copy the ID (looks like: `a1b2c3d4e5`)

## Step 3: Identify Server Prefix

Your server prefix is in your API key:
- If your API key ends with `-us1`, your prefix is `us1`
- If it ends with `-us2`, your prefix is `us2`
- Common prefixes: `us1`, `us2`, `us3`, `us19`, `us21`

## Step 4: Configure Environment Variables

1. **Create `.env.local` file** in your project root:

```bash
# In the shopscope folder
touch .env.local
```

2. **Add your Mailchimp credentials:**

```env
MAILCHIMP_API_KEY=your_actual_api_key_here
MAILCHIMP_AUDIENCE_ID=your_actual_audience_id_here
MAILCHIMP_SERVER_PREFIX=us1
NEXT_PUBLIC_SITE_URL=https://shopscope.app
```

3. **Replace the placeholder values** with your actual credentials

## Step 5: Test the Integration

1. **Start your dev server:**
```bash
npm run dev
```

2. **Test the waitlist form:**
   - Go to your homepage
   - Enter an email in the waitlist form
   - Submit

3. **Check Mailchimp:**
   - Go to Audience > All contacts
   - You should see the new subscriber
   - They should have the "Waitlist" tag

4. **Test the brand form:**
   - Go to the "For Brands" section
   - Fill out the brand application
   - Submit

5. **Check Mailchimp:**
   - The brand should appear in your contacts
   - Should have tags: "Brand Partner" and "Waitlist"
   - Notes should contain brand details

## Step 6: Deploy to Production

### For Vercel:
1. Go to your Vercel project
2. Settings > Environment Variables
3. Add all three variables:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_AUDIENCE_ID`
   - `MAILCHIMP_SERVER_PREFIX`

### For Netlify:
1. Go to Site settings
2. Build & deploy > Environment
3. Add the environment variables

## Mailchimp Features Configured

### Waitlist Subscribers Get:
- ✅ Added to your audience
- ✅ Tagged with "Waitlist"
- ✅ Email address stored
- ✅ Ready for email campaigns

### Brand Applications Get:
- ✅ Added to your audience
- ✅ Tagged with "Brand Partner" and "Waitlist"
- ✅ Name and phone stored in merge fields
- ✅ Brand details stored in notes:
  - Brand name
  - Shopify status
  - Number of products
  - Style of clothing
  - Additional message

## Creating Email Campaigns

1. **Welcome Email for Waitlist**
   - Go to Campaigns > Create Campaign
   - Choose "Email"
   - Select your audience
   - Filter by tag: "Waitlist"
   - Create welcome message with launch updates

2. **Brand Onboarding Email**
   - Create another campaign
   - Filter by tag: "Brand Partner"
   - Send partnership details and next steps

## Troubleshooting

### "Server configuration error"
- Check that all environment variables are set
- Restart your dev server after adding `.env.local`

### "Failed to subscribe"
- Verify your API key is correct
- Check that the Audience ID matches
- Confirm server prefix is correct

### "Member Exists"
- This is normal! The person is already subscribed
- The form will show a success message anyway

## Security Notes

⚠️ **Never commit `.env.local` to git!**
- It's already in `.gitignore`
- Never share your API key publicly
- Rotate your API key if it's compromised

## Support

For Mailchimp-specific issues:
- [Mailchimp API Documentation](https://mailchimp.com/developer/)
- [API Error Codes](https://mailchimp.com/developer/marketing/docs/errors/)

For ShopScope issues:
- Email: info@shopscope.app

---

✅ **You're all set!** Your waitlist and brand forms now save directly to Mailchimp.

