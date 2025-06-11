import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send size={48} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            تم إرسال رسالتك بنجاح!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            إرسال رسالة أخرى
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          نحن هنا لمساعدتك. تواصل معنا عبر أي من الطرق التالية أو أرسل لنا رسالة
          مباشرة.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Store Location */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <MapPin size={24} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                موقع المتجر
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              شارع التحرير، وسط البلد
              <br />
              القاهرة، مصر
              <br />
              بجوار محطة مترو السادات
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">الهاتف</h3>
            </div>
            <div className="space-y-2">
              <a
                href="tel:01012345678"
                className="block text-gray-600 hover:text-orange-600 transition-colors arabic-nums"
              >
                +201552920076
              </a>
              <a
                href="tel:0223456789"
                className="block text-gray-600 hover:text-orange-600 transition-colors arabic-nums"
              >
                02-23456789
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Mail size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                البريد الإلكتروني
              </h3>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:info@aliensstore.com"
                className="block text-gray-600 hover:text-orange-600 transition-colors"
              >
                info@aliensstore.com
              </a>
              <a
                href="mailto:support@aliensstore.com"
                className="block text-gray-600 hover:text-orange-600 transition-colors"
              >
                support@aliensstore.com
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Clock size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                ساعات العمل
              </h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>السبت - الخميس:</span>
                <span className="arabic-nums">9:00 ص - 10:00 م</span>
              </div>
              <div className="flex justify-between">
                <span>الجمعة:</span>
                <span className="arabic-nums">2:00 م - 10:00 م</span>
              </div>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201552920076"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-600 text-white rounded-lg shadow-md p-6 hover:bg-green-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <MessageCircle size={24} />
              <div>
                <h3 className="text-lg font-semibold">واتساب</h3>
                <p className="text-green-100">دردشة مباشرة معنا</p>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              أرسل لنا رسالة
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    موضوع الرسالة *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="استفسار عن منتج">استفسار عن منتج</option>
                    <option value="مشكلة في الطلب">مشكلة في الطلب</option>
                    <option value="استبدال أو إرجاع">استبدال أو إرجاع</option>
                    <option value="شكوى">شكوى</option>
                    <option value="اقتراح">اقتراح</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الرسالة *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                } text-white`}
              >
                {isSubmitting ? (
                  "جاري الإرسال..."
                ) : (
                  <>
                    <Send size={20} />
                    إرسال الرسالة
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          موقعنا على الخريطة
        </h2>
        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg font-medium">خريطة تفاعلية</p>
            <p className="text-sm">شارع التحرير، وسط البلد، القاهرة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
