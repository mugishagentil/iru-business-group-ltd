import React, { useState } from 'react';
import { Mail } from "lucide-react";

// Type declaration for emailjs
declare global {
  interface Window {
    emailjs: any;
  }
}

const NewsSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const componentStyles = `
    .gradient-text {
      background: linear-gradient(90deg, #F59E0B, #CA8A04);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    const templateParams = {
      to_email: email,
      from_name: 'Your Company',
      message: 'Thank you for subscribing to our newsletter!',
    };

    window.emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setIsSubscribed(true);
        setTimeout(() => {
          setEmail('');
          setIsSubscribed(false);
        }, 4000);
      })
      .catch(() => {
        setError('Subscription failed. Please try again.');
      });
  };

  return (
    <div className="min-h-fit flex items-center justify-center font-sans py-8 px-4" style={{ background: '#f5faff' }}>
      <style>{componentStyles}</style>
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden px-6 py-10 lg:py-12 text-gray-800 border-t-8 border-yellow-500">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">    

        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center lg:justify-start justify-center mb-4">
            <span className="p-3 rounded-full bg-yellow-100 text-yellow-500">
              <Mail className="h-6 w-6"/>
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold leading-snug mb-2">
            Subscribe to Our <span className="gradient-text">Newsletter</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Get the latest updates, news, and insights directly in your inbox. No spam, we promise.
          </p>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 w-full">
          {isSubscribed ? (
            <div className="p-4 bg-green-500 text-white rounded-lg text-center font-semibold animate-pulse">
              Thank you for subscribing! 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center w-full gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800 shadow-sm transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-yellow-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-yellow-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          )}
          {error && <p className="mt-3 text-red-500 text-sm text-center sm:text-left">{error}</p>}
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewsSubscription;
