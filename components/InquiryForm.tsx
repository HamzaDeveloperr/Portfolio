
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { CONFIG } from '../constants';

interface InquiryFormProps {
  defaultService?: string;
  showTitle?: boolean;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ defaultService = 'Web Development', showTitle = true }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  // List of common temporary email domains to block
  const tempEmailDomains = [
    'mailinator.com', 'temp-mail.org', 'guerrillamail.com', 
    '10minutemail.com', 'trashmail.com', 'sharklasers.com', 
    'dispostable.com', 'getnada.com', 'tempmail.com', 'yopmail.com',
    'temp.mail', 'tempmail.net'
  ];

  const validateEmail = (emailValue: string) => {
    const lowerEmail = emailValue.toLowerCase();
    const domain = lowerEmail.split('@')[1];
    
    if (lowerEmail.includes('tempmail') || lowerEmail.includes('temp-mail')) {
       setEmailError('Temporary email addresses are not allowed. Please use a valid personal or business email.');
       return false;
    }

    if (domain && tempEmailDomains.some(d => domain.includes(d))) {
      setEmailError('Temporary email addresses are not allowed. Please use a valid personal or business email.');
      return false;
    }
    
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (val) validateEmail(val);
    else setEmailError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    setLoading(true);
    setSubmitError('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mbdypgbn", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      setSubmitError('Unable to send message. Please check your connection.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl text-center reveal scale-100">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received!</h3>
        <p className="text-gray-500 mb-8">Thank you for reaching out. Hamza will get back to you within 2 hours.</p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setEmail('');
            setWhatsappNumber('');
            setSubmitError('');
          }}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl reveal">
      {showTitle && <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready to start your project?</h3>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal delay-100">
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
            <input required name="name" type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all placeholder:text-gray-300" />
          </div>
          <div className="reveal delay-200">
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input required name="email" type="email" value={email} onChange={handleEmailChange} placeholder="example@email.com" className={`w-full px-5 py-4 rounded-2xl border ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50'} outline-none transition-all placeholder:text-gray-300`} />
            {emailError && <div className="flex items-center gap-2 mt-2 text-red-600 text-xs font-bold animate-pulse"><AlertCircle size={14} />{emailError}</div>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal delay-300">
            <label className="block text-sm font-bold text-gray-700 mb-2">WhatsApp Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input required name="whatsapp" type="tel" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} placeholder="+923xxxxxxx" className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all placeholder:text-gray-300" />
            </div>
          </div>
          <div className="reveal delay-400">
            <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
            <select name="service" defaultValue={defaultService} className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat">
              <option value="Web Development">Web Development</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="Full Branding">Full Branding</option>
            </select>
          </div>
        </div>

        <div className="reveal delay-500">
          <label className="block text-sm font-bold text-gray-700 mb-2">Project Message</label>
          <textarea required name="message" rows={4} placeholder="Describe your goals..." className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all placeholder:text-gray-300"></textarea>
        </div>

        {submitError && <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center gap-2"><AlertCircle size={18} />{submitError}</div>}

        <button type="submit" disabled={loading || !!emailError} className={`w-full py-4 bg-indigo-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-95 ${loading || !!emailError ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {loading ? 'Sending...' : <>Send Inquiry <Send size={18} /></>}
        </button>
        
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase font-black text-gray-400 tracking-[0.2em]"><span className="bg-white px-4">OR CHAT DIRECTLY</span></div>
        </div>

        <a href={`https://wa.me/${CONFIG.whatsapp}?text=Hi Hamza, I have an inquiry about ${defaultService}.`} target="_blank" rel="noopener noreferrer" className="w-full py-4 border-2 border-green-500 text-green-600 rounded-2xl font-black text-center flex items-center justify-center gap-2 hover:bg-green-50 transition-all active:scale-95">
          Message on WhatsApp
        </a>
      </form>
    </div>
  );
};

export default InquiryForm;
