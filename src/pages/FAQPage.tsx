import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "الطلب والشراء",
      questions: [
        {
          question: "كيف يمكنني إجراء طلب؟",
          answer:
            "يمكنك إجراء طلب بسهولة من خلال تصفح المنتجات، إضافتها للسلة، ثم الذهاب لصفحة إتمام الطلب وملء البيانات المطلوبة.",
        },
        {
          question: "ما هي وسائل الدفع المتاحة؟",
          answer:
            "نوفر حالياً خدمة الدفع عند التسليم. قريباً سنضيف وسائل دفع إلكترونية أخرى مثل فيزا وماستركارد وفوري.",
        },
        {
          question: "هل يمكنني تعديل أو إلغاء طلبي؟",
          answer:
            "يمكنك تعديل أو إلغاء طلبك خلال ساعة من إجرائه عبر التواصل معنا. بعد ذلك قد لا نتمكن من التعديل إذا تم تجهيز الطلب.",
        },
      ],
    },
    {
      category: "الشحن والتوصيل",
      questions: [
        {
          question: "كم تستغرق مدة التوصيل؟",
          answer:
            "عادة ما يستغرق التوصيل من 2-5 أيام عمل داخل القاهرة والجيزة، و3-7 أيام للمحافظات الأخرى.",
        },
        {
          question: "ما هي تكلفة الشحن؟",
          answer:
            "الشحن مجاني للطلبات أكثر من 1000 جنيه. للطلبات الأقل، تكلفة الشحن 50 جنيه داخل القاهرة والجيزة، و75 جنيه للمحافظات الأخرى.",
        },
        {
          question: "هل يمكنني تتبع طلبي؟",
          answer:
            "نعم، سنرسل لك رقم تتبع عبر الرسائل النصية والبريد الإلكتروني بمجرد شحن طلبك.",
        },
      ],
    },
    {
      category: "الضمان والاستبدال",
      questions: [
        {
          question: "ما هي مدة الضمان؟",
          answer:
            "جميع منتجاتنا تأتي بضمان كامل لمدة سنة من تاريخ الشراء، بالإضافة لضمان الوكيل المعتمد.",
        },
        {
          question: "هل يمكنني استبدال المنتج؟",
          answer:
            "يمكنك استبدال المنتج خلال 14 يوم من تاريخ الاستلام، بشرط أن يكون في حالته الأصلية مع العبوة والملحقات.",
        },
        {
          question: "ماذا لو وصل المنتج تالفاً؟",
          answer:
            "في حالة وصول المنتج تالفاً، يرجى التواصل معنا فوراً وسنقوم بالاستبدال أو الاسترداد الفوري.",
        },
      ],
    },
    {
      category: "الحساب والأمان",
      questions: [
        {
          question: "هل أحتاج لإنشاء حساب للشراء؟",
          answer:
            "يمكنك الشراء بدون حساب، لكن إنشاء حساب يتيح لك تتبع طلباتك وحفظ عناوينك المفضلة.",
        },
        {
          question: "هل بياناتي آمنة؟",
          answer:
            "نعم، نحن نحمي بياناتك بأعلى معايير الأمان ولا نشاركها مع أي طرف ثالث.",
        },
        {
          question: "نسيت كلمة المرور، ماذا أفعل؟",
          answer:
            'يمكنك إعادة تعيين كلمة المرور من صفحة تسجيل الدخول عبر النقر على "نسيت كلمة المرور".',
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-100 p-4 rounded-full">
            <HelpCircle size={48} className="text-orange-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          الأسئلة الشائعة
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          نجيب هنا على أكثر الأسئلة شيوعاً. إذا لم تجد إجابة سؤالك، لا تتردد في
          التواصل معنا.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            {/* Category Header */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <h2 className="text-xl font-bold text-orange-800">
                {category.category}
              </h2>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const globalIndex = categoryIndex * 100 + questionIndex;
                const isOpen = openItems.includes(globalIndex);

                return (
                  <div
                    key={questionIndex}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 flex-1">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp
                          size={20}
                          className="text-orange-600 flex-shrink-0 mr-4"
                        />
                      ) : (
                        <ChevronDown
                          size={20}
                          className="text-orange-600 flex-shrink-0 mr-4"
                        />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-8 text-white text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">لم تجد إجابة سؤالك؟</h2>
          <p className="text-orange-100 mb-6">
            فريق خدمة العملاء متاح لمساعدتك على مدار الساعة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+201552920076"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <Phone size={24} />
              <div className="text-right">
                <p className="font-semibold">اتصل بنا</p>
                <p className="text-sm text-orange-100 arabic-nums">
                  +201552920076
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/201552920076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <MessageCircle size={24} />
              <div className="text-right">
                <p className="font-semibold">واتساب</p>
                <p className="text-sm text-orange-100">دردشة مباشرة</p>
              </div>
            </a>

            <a
              href="mailto:info@aliensstore.com"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
            >
              <Mail size={24} />
              <div className="text-right">
                <p className="font-semibold">البريد الإلكتروني</p>
                <p className="text-sm text-orange-100">info@aliensstore.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
