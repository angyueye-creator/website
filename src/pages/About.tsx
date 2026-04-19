import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Lightbulb, Shield, Building2, Award, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Seo from '../components/Seo';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const values = [
    { icon: Heart, title: '温暖', desc: '以人为本，打造有温度的产品' },
    { icon: Award, title: '专业', desc: '深耕医疗，专注临床职能科室' },
    { icon: Lightbulb, title: '创新', desc: 'AI赋能，驱动管理智能化' },
    { icon: Shield, title: '责任', desc: '守护数据安全，承担社会责任' },
  ];

  const clients = [
    { name: '浙江大学医学院附属邵逸夫医院', shortName: '邵医', logo: '' },
    { name: '浙江大学医学院附属第二医院', shortName: '浙二', logo: '' },
    { name: '湖州市卫生健康委员会', shortName: '湖州卫健', logo: '' },
    { name: '浙江医院', shortName: '浙医', logo: '' },
    { name: '浙江省人民医院', shortName: '省人民', logo: '' },
    { name: '乐清县域医共体三家医院', shortName: '乐清医共体', logo: '' },
  ];

  const contactInfo = [
    { icon: Mail, title: '电子邮箱', content: 'yeangyue@weihuiyiliao.com' },
    { icon: Phone, title: '服务热线', content: '18969041110' },
    { icon: MapPin, title: '公司地址', content: '杭州余杭区乐富海邦园17幢7楼' },
  ];

  const faqs = [
    { q: '如何申请产品试用？', a: '您可以通过页面表单提交申请，或拨打服务热线联系我们的销售团队。' },
    { q: '支持哪些医院类型？', a: '我们支持综合医院、专科医院、社区医院等多种医疗机构类型。' },
    { q: '系统部署周期多久？', a: '标准部署周期为2-4周，具体根据医院规模和定制需求而定。' },
    { q: '是否提供培训服务？', a: '是的，我们提供完整的系统使用培训和持续的技术支持服务。' }
  ];

  return (
    <div className="bg-white">
      <Seo
        title="关于我们"
        description="了解微晖医疗的品牌愿景、服务客户与核心价值观。我们专注医疗行业数智化管理，打造更高效、更温暖的医院管理体验。"
        keywords="微晖医疗,医疗科技公司,医院数字化,医疗管理服务商"
        path="/about"
      />

      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            关于<span className="text-primary">微晖</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            不啻微芒，造炬成阳
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">品牌由来</h2>
              <p className="text-gray-600 mb-4">
                "微晖"二字，源自成语"不啻微芒，造炬成阳"。我们相信——哪怕只是微弱的光芒，汇聚起来也能照亮前行的道路。
              </p>
              <p className="text-gray-600">
                在医疗行业数字化转型的征程中，我们愿做那一点微光，与每一位医护人员携手，共同汇聚成照亮行业未来的火炬。
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-white text-center"
            >
              <div className="text-5xl font-bold mb-4">不啻微芒</div>
              <div className="text-3xl opacity-80">造炬成阳</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们是谁</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              微晖医疗是一家专注于医疗行业数智AI转型的科技企业，深耕临床职能科室管理领域。我们不做诊疗，不直接服务病人，只专注于为临床科室提供高效的后勤管理支撑。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">服务客户</h2>
            <p className="text-gray-600">携手行业标杆，共创智慧医疗</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="h-28 flex items-center justify-center mb-6">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {client.shortName.slice(0, 2)}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center">{client.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 md:p-16 text-white"
          >
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的愿景</h2>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              以AI之力，重塑医疗管理新范式
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              致力于成为医疗行业领先的AI数字化赋能者，用智能科技温暖每一位医护工作者，让医疗机构的管理更高效、更智慧、更有温度。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">价值观</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
            <p className="text-gray-600">期待与您的合作，让医院管理更有温度</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">常见问题</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
