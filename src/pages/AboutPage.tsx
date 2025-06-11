import React from 'react';
import { Award, Users, Truck, Shield, Heart, Target, Eye, Zap } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'عميل راضي', value: '10,000+' },
    { icon: Award, label: 'سنة خبرة', value: '15+' },
    { icon: Truck, label: 'طلب تم توصيله', value: '50,000+' },
    { icon: Shield, label: 'منتج أصلي', value: '100%' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'رضا العملاء',
      description: 'نضع رضا عملائنا في المقدمة ونسعى لتقديم أفضل تجربة تسوق ممكنة.'
    },
    {
      icon: Shield,
      title: 'الجودة والأصالة',
      description: 'نضمن أن جميع منتجاتنا أصلية 100% من الموزعين المعتمدين.'
    },
    {
      icon: Zap,
      title: 'الابتكار والتطوير',
      description: 'نواكب أحدث التقنيات ونطور خدماتنا باستمرار لنلبي احتياجاتكم.'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'فريقنا من الخبراء مدرب لتقديم أفضل النصائح والدعم الفني.'
    }
  ];

  const team = [
    {
      name: 'أحمد محمد',
      role: 'المدير العام',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'خبرة 20 سنة في مجال التكنولوجيا والتجارة الإلكترونية'
    },
    {
      name: 'فاطمة أحمد',
      role: 'مديرة خدمة العملاء',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'متخصصة في تطوير تجربة العملاء وحل المشاكل'
    },
    {
      name: 'محمد علي',
      role: 'مدير التقنية',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'خبير في أنظمة الكمبيوتر والشبكات والأمان السيبراني'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-slate-800 via-slate-700 to-slate-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              عن AliensStore
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed">
              رحلتنا بدأت من حلم بسيط: جعل التكنولوجيا في متناول الجميع. 
              اليوم نحن واحد من أكبر متاجر الإلكترونيات في مصر.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2 arabic-nums">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                قصتنا
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  بدأت AliensStore في عام 2009 كمتجر صغير في وسط القاهرة، بهدف توفير أجهزة الكمبيوتر 
                  والإكسسوارات عالية الجودة بأسعار معقولة للطلاب والمهنيين.
                </p>
                <p>
                  مع مرور السنوات، نمت ثقة عملائنا بنا وتوسعنا لنصبح واحداً من أكبر متاجر التكنولوجيا 
                  في مصر، مع فروع في عدة محافظات ومتجر إلكتروني يخدم جميع أنحاء الجمهورية.
                </p>
                <p>
                  اليوم، نفخر بخدمة أكثر من 10,000 عميل راضي ونواصل رحلتنا لنكون الخيار الأول 
                  لكل من يبحث عن التكنولوجيا والجودة.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="متجر AliensStore"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold arabic-nums">15+</div>
                <div className="text-sm">سنة من التميز</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Target size={32} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رسالتنا</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                نسعى لتوفير أحدث التقنيات وأفضل المنتجات التكنولوجية بأسعار تنافسية، 
                مع تقديم خدمة عملاء استثنائية ودعم فني متخصص لضمان رضا عملائنا الكامل.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Eye size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">رؤيتنا</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                أن نكون الوجهة الأولى والأكثر ثقة في الشرق الأوسط لكل ما يتعلق بالتكنولوجيا، 
                ونساهم في تطوير المجتمع من خلال نشر الثقافة التقنية والابتكار.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              قيمنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا يومياً لخدمة عملائنا بأفضل شكل ممكن
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              فريق العمل
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تعرف على الأشخاص المتميزين الذين يقفون وراء نجاح AliensStore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            انضم إلى عائلة AliensStore
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            اكتشف عالم التكنولوجيا معنا واستمتع بتجربة تسوق لا تُنسى
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/catalog"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              تسوق الآن
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;