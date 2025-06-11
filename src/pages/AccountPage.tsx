import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Settings, LogOut, Edit, Save, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AccountPage = () => {
  const navigate = useNavigate();
  const { state, logout, updateProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'settings'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: state.user?.name || '',
    email: state.user?.email || '',
    phone: state.user?.phone || '',
    address: state.user?.address || ''
  });

  // Mock orders data
  const orders = [
    {
      id: 'ORD001',
      date: '2024-01-15',
      status: 'تم التسليم',
      total: 45000,
      items: [
        { name: 'لابتوب Dell XPS 13', quantity: 1, price: 45000 }
      ]
    },
    {
      id: 'ORD002',
      date: '2024-01-10',
      status: 'قيد التجهيز',
      total: 2950,
      items: [
        { name: 'ماوس لوجيتك MX Master 3', quantity: 1, price: 2500 },
        { name: 'شنطة لابتوب أنيقة', quantity: 1, price: 450 }
      ]
    }
  ];

  if (!state.isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleSaveProfile = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditData({
      name: state.user?.name || '',
      email: state.user?.email || '',
      phone: state.user?.phone || '',
      address: state.user?.address || ''
    });
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'تم التسليم':
        return 'text-green-600 bg-green-100';
      case 'قيد التجهيز':
        return 'text-orange-600 bg-orange-100';
      case 'في الطريق':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-4 rounded-full">
                <User size={32} className="text-orange-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  مرحباً، {state.user?.name}
                </h1>
                <p className="text-gray-600">{state.user?.email}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={20} />
              تسجيل الخروج
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <User size={20} />
                  الملف الشخصي
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Package size={20} />
                  طلباتي
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-right transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-orange-100 text-orange-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings size={20} />
                  الإعدادات
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-800">الملف الشخصي</h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      <Edit size={18} />
                      تعديل
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveProfile}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Save size={18} />
                        حفظ
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <X size={18} />
                        إلغاء
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg">{state.user?.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg">{state.user?.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => setEditData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg arabic-nums">
                        {state.user?.phone || 'غير محدد'}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      العنوان
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.address}
                        onChange={(e) => setEditData(prev => ({ ...prev, address: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    ) : (
                      <p className="px-4 py-3 bg-gray-50 rounded-lg">
                        {state.user?.address || 'غير محدد'}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">طلباتي</h2>
                
                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package size={64} className="mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      لا توجد طلبات بعد
                    </h3>
                    <p className="text-gray-600 mb-6">
                      ابدأ التسوق واطلب منتجاتك المفضلة
                    </p>
                    <button
                      onClick={() => navigate('/catalog')}
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      ابدأ التسوق
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map(order => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              طلب رقم: <span className="arabic-nums">{order.id}</span>
                            </h3>
                            <p className="text-sm text-gray-600 arabic-nums">
                              تاريخ الطلب: {order.date}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>

                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center text-sm">
                              <span>{item.name}</span>
                              <span className="arabic-nums">
                                {item.quantity} × {item.price.toLocaleString()} جنيه
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <span className="font-semibold">الإجمالي:</span>
                          <span className="font-bold text-orange-600 arabic-nums">
                            {order.total.toLocaleString()} جنيه
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">الإعدادات</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">إعدادات الإشعارات</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between">
                        <span>إشعارات البريد الإلكتروني</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600" />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>إشعارات العروض والخصومات</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600" />
                      </label>
                      <label className="flex items-center justify-between">
                        <span>إشعارات حالة الطلب</span>
                        <input type="checkbox" defaultChecked className="w-4 h-4 text-orange-600" />
                      </label>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">الخصوصية والأمان</h3>
                    <div className="space-y-3">
                      <button className="w-full text-right py-2 text-orange-600 hover:text-orange-700">
                        تغيير كلمة المرور
                      </button>
                      <button className="w-full text-right py-2 text-orange-600 hover:text-orange-700">
                        إعدادات الخصوصية
                      </button>
                      <button className="w-full text-right py-2 text-orange-600 hover:text-orange-700">
                        تنزيل بياناتي
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-4">إدارة الحساب</h3>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      حذف الحساب
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;