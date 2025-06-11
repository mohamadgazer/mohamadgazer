import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
                <Laptop className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">AliensStore</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              متجرك المتخصص في أجهزة اللابتوب والإكسسوارات التقنية. نوفر أفضل المنتجات بأسعار تنافسية وخدمة عملاء ممتازة.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  جميع المنتجات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  عن المتجر
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-400 transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">الأقسام</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog?category=laptops" className="text-gray-300 hover:text-orange-400 transition-colors">
                  أجهزة لابتوب
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=accessories&subcategory=mice" className="text-gray-300 hover:text-orange-400 transition-colors">
                  ماوس وفأرة
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=accessories&subcategory=keyboards" className="text-gray-300 hover:text-orange-400 transition-colors">
                  لوحات المفاتيح
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=accessories&subcategory=bags" className="text-gray-300 hover:text-orange-400 transition-colors">
                  شنط وحقائب
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=accessories&subcategory=chargers" className="text-gray-300 hover:text-orange-400 transition-colors">
                  الشواحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-400" />
                <span className="text-gray-300 arabic-nums">01012345678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-400" />
                <span className="text-gray-300">info@aliensstore.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-1" />
                <span className="text-gray-300">
                  شارع التحرير، وسط البلد<br />
                  القاهرة، مصر
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AliensStore. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                سياسة الخصوصية
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                شروط الاستخدام
              </Link>
              <Link to="/returns" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                سياسة الاستبدال
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;