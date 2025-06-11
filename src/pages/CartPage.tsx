import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="text-gray-400 mb-6">
            <ShoppingBag size={80} className="mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            السلة فارغة
          </h1>
          <p className="text-gray-600 mb-8">
            لم تقم بإضافة أي منتجات إلى السلة بعد
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            ابدأ التسوق
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">سلة التسوق</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md">
            {state.items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="p-6 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {item.category === 'laptops' ? 'لابتوب' : 'إكسسوار'}
                    </p>
                    <p className="text-lg font-bold text-orange-600 arabic-nums">
                      {item.price.toLocaleString()} جنيه
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-2 font-medium arabic-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="mt-4 text-left">
                  <span className="text-sm text-gray-600">الإجمالي: </span>
                  <span className="font-semibold text-gray-800 arabic-nums">
                    {(item.price * item.quantity).toLocaleString()} جنيه
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">ملخص الطلب</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">المجموع الفرعي:</span>
                <span className="font-semibold arabic-nums">
                  {state.total.toLocaleString()} جنيه
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">الشحن:</span>
                <span className="font-semibold text-green-600">
                  {state.total >= 1000 ? 'مجاني' : '50 جنيه'}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-800">الإجمالي:</span>
                  <span className="text-lg font-bold text-orange-600 arabic-nums">
                    {(state.total + (state.total >= 1000 ? 0 : 50)).toLocaleString()} جنيه
                  </span>
                </div>
              </div>
            </div>

            {state.total < 1000 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-orange-700">
                  اضف منتجات بقيمة{' '}
                  <span className="font-semibold arabic-nums">
                    {(1000 - state.total).toLocaleString()} جنيه
                  </span>{' '}
                  إضافية للحصول على شحن مجاني!
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Link
                to="/checkout"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center block"
              >
                إتمام الطلب
              </Link>
              
              <Link
                to="/catalog"
                className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center block"
              >
                متابعة التسوق
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-3">وسائل الدفع المقبولة</h3>
              <div className="flex gap-2">
                <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">
                  دفع عند التسليم
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">
                  فيزا
                </div>
                <div className="bg-gray-100 px-3 py-2 rounded text-xs font-medium">
                  فوري
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;