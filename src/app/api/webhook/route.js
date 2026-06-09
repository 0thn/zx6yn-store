import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    // Check kar rahe hain ki payment successfully capture hui ya nahi
    if (body.event === 'payment.captured' || body.event === 'payment_link.paid') {
      
      // Razorpay se automatic email aur price nikalna
      const email = body.payload.payment.entity.email;
      const amount = body.payload.payment.entity.amount / 100; // Paise ko Rupees mein convert kiya

      if (!email) return NextResponse.json({ status: 'No email found' });

      // Tera Gmail setup
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      let subject = '';
      let htmlContent = '';

      // Agar price ₹199 ya ₹499 hai, toh matlab Hacking Book kharidi hai
      if (amount === 199 || amount === 499) {
        subject = '🕵️‍♂️ Access Granted: Ethical Hacking Blueprint';
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #00ff41;">
            <h2 style="color: #00ff41; text-align: center;">Welcome to the Elite Hacker Tier</h2>
            <p>Hello,</p>
            <p>Your payment of ₹${amount} was successful. Here is your permanent VIP access link to the <strong>Ethical Hacking Blueprint</strong>.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://zx6yn.xyz/success-hack?access=hack_premium" style="background-color: #00ff41; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 5px; text-transform: uppercase;">Access Your Ebook Here</a>
            </div>
            <p style="color: #888; font-size: 12px; text-align: center;">Do not share this private link.</p>
          </div>
        `;
      } 
      // Warna AI Book bhej do (Price ₹99 ya ₹249 hogi)
      else {
        subject = '🤖 Access Granted: AI Earning Blueprint';
        htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0a0a0a; color: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #D4AF37;">
            <h2 style="color: #D4AF37; text-align: center;">Welcome to the AI VIP Tier</h2>
            <p>Hello,</p>
            <p>Your payment of ₹${amount} was successful. Here is your permanent VIP access link to the <strong>AI Earning Blueprint</strong>.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://zx6yn.xyz/success?access=zx6yn_premium" style="background-color: #D4AF37; color: #000000; padding: 15px 30px; text-decoration: none; font-weight: bold; border-radius: 5px; text-transform: uppercase;">Access Your Ebook Here</a>
            </div>
            <p style="color: #888; font-size: 12px; text-align: center;">Do not share this private link.</p>
          </div>
        `;
      }

      // Automatically mail bhej do
      await transporter.sendMail({
        from: `"ZX6YN Store" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: subject,
        html: htmlContent,
      });

      console.log(`Auto-Email sent to ${email} for ₹${amount}`);
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}