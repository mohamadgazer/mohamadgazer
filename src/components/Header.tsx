import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Laptop,
  Phone,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { state: cartState } = useCart();
  const { state: authState, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const totalItems = cartState.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              +201552920076
            </span>
            <span>شحن مجاني للطلبات أكثر من 1000 جنيه</span>
          </div>
          <div className="hidden md:block">
            مرحباً بك في AliensStore - أفضل متجر إلكترونيات في مصر
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-slate-800 hover:text-orange-600 transition-colors"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-lg">
              <Laptop className="text-white" size={32} />
            </div>
            <span>AliensStore</span>
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن المنتجات..."
                className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* User Account */}
            <div className="relative group">
              <Link
                to={authState.isAuthenticated ? "/account" : "/login"}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User size={20} />
                <span className="hidden md:block">
                  {authState.isAuthenticated
                    ? authState.user?.name
                    : "تسجيل الدخول"}
                </span>
              </Link>

              {authState.isAuthenticated && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/account"
                    className="block px-4 py-2 hover:bg-gray-50 rounded-t-lg"
                  >
                    حسابي
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-right px-4 py-2 hover:bg-gray-50 rounded-b-lg text-red-600"
                  >
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="hidden md:block">السلة</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center arabic-nums">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن المنتجات..."
              className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-slate-50 border-t ${
          isMenuOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                جميع المنتجات
              </Link>
            </li>
            <li>
              <Link
                to="/catalog?category=laptops"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                أجهزة لابتوب
              </Link>
            </li>
            <li>
              <Link
                to="/catalog?category=accessories"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                الإكسسوارات
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                عن المتجر
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-700 hover:text-orange-600 font-medium transition-colors"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
