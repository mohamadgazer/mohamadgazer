import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Shield, Headphones, Star, Zap } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  const featuredProducts = products.filter(product => product.featured);
  const laptops = products.filter(product => product.category === 'laptops').slice(0, 2);
  const accessories = products.filter(product => product.category === 'accessories').slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                أفضل متجر للتكنولوجيا
                <span className="block text-yellow-300">في مصر</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-orange-100 leading-relaxed">
                اكتشف أحدث أجهزة اللابتوب والإكسسوارات التقنية بأفضل الأسعار وأعلى جودة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/catalog"
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  تسوق الآن
                  <ArrowLeft size={20} />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  عن المتجر
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="أجهزة لابتوب متطورة"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-orange-800 px-4 py-2 rounded-full font-bold">
                  عروض خاصة!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">شحن سريع ومجاني</h3>
              <p className="text-gray-600 text-sm">
                شحن مجاني لجميع الطلبات أكثر من 1000 جنيه
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">ضمان شامل</h3>
              <p className="text-gray-600 text-sm">
                ضمان كامل على جميع المنتجات لمدة سنة
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-purple-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">دعم فني 24/7</h3>
              <p className="text-gray-600 text-sm">
                فريق دعم فني متخصص متاح على مدار الساعة
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-orange-600" size={28} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">جودة مضمونة</h3>
              <p className="text-gray-600 text-sm">
                منتجات أصلية 100% من أفضل الماركات العالمية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              المنتجات المميزة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              اكتشف أفضل منتجاتنا المختارة بعناية لتلبية احتياجاتك التقنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              عرض جميع المنتجات
              <ArrowLeft size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              تسوق حسب الفئة
            </h2>
            <p className="text-lg text-gray-600">
              اختر من مجموعة متنوعة من المنتجات التقنية عالية الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Laptops Category */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="أجهزة لابتوب"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">أجهزة لابتوب</h3>
                  <p className="text-gray-200">أحدث الموديلات بأفضل الأسعار</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {laptops.map(laptop => (
                    <div key={laptop.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img src={laptop.image} alt={laptop.name} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <p className="font-medium text-sm text-gray-800 line-clamp-1">{laptop.name}</p>
                        <p className="text-orange-600 font-bold text-sm arabic-nums">{laptop.price.toLocaleString()} جنيه</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/catalog?category=laptops"
                  className="w-full bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
                >
                  عرض جميع اللابتوبات
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>

            {/* Accessories Category */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="إكسسوارات"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">الإكسسوارات</h3>
                  <p className="text-gray-200">كل ما تحتاجه لتجربة أفضل</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {accessories.map(accessory => (
                    <div key={accessory.id} className="text-center p-3 bg-gray-50 rounded-lg">
                      <img src={accessory.image} alt={accessory.name} className="w-12 h-12 rounded object-cover mx-auto mb-2" />
                      <p className="font-medium text-xs text-gray-800 line-clamp-1">{accessory.name}</p>
                      <p className="text-orange-600 font-bold text-xs arabic-nums">{accessory.price.toLocaleString()} ج</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/catalog?category=accessories"
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  عرض جميع الإكسسوارات
                  <ArrowLeft size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-orange-600 p-4 rounded-full">
                <Zap size={32} />
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              كن أول من يعرف بالعروض الجديدة
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              اشترك في نشرتنا الإلكترونية واحصل على خصم 10% على طلبك الأول
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;