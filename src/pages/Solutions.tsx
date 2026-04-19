import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Shield, FolderOpen, Check, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';

const solutions = [
  {
    id: 'medical',
    icon: Stethoscope,
    title: '医务管理解决方案',
    subtitle: '让医务管理更高效、更规范',
    description: '为医务科提供全面的数字化管理工具，涵盖医师执业管理、医疗技术管理、医疗纠纷处理等核心业务流程，实现医务管理的标准化、精细化。',
    benefits: ['医师执业全生命周期管理', '医疗技术准入与追踪', '医疗纠纷闭环处理', '医务数据统计分析'],
    scenarios: ['三级医院医务科', '二级医院医务部', '医疗集团管理中心'],
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'nursing',
    icon: Heart,
    title: '护理管理解决方案',
    subtitle: '守护护理安全，提升护理品质',
    description: '围绕护理质量管理、护理人员管理、护理培训考核等维度，构建护理管理闭环，助力医院提升护理服务水平和患者满意度。',
    benefits: ['护理质量持续改进', '护理人员分层管理', '护理培训在线化', '护理排班智能化'],
    scenarios: ['护理部统一管理', '科室护理质量管理', '护理人员培训考核'],
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'quality',
    icon: Shield,
    title: '质量管理解决方案',
    subtitle: '以质量为核心，驱动持续改进',
    description: '建立全面的医疗质量管理体系，覆盖质量检查、不良事件、指标监测等模块，实现质量管理的数字化、智能化、闭环化。',
    benefits: ['全院质量检查闭环', '不良事件主动上报', '质量指标实时监测', 'PDCA持续改进'],
    scenarios: ['质控科日常管理', '全院质量体系建设', '等级评审准备'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'archive',
    icon: FolderOpen,
    title: '医护专业档案解决方案',
    subtitle: '医护临床档案数字化，管理智能化',
    description: '为医护人员建立完整的电子档案，涵盖人事档案、业务档案、培训档案等，实现档案的规范化管理和便捷查询。',
    benefits: ['档案电子化存储', '档案规范化管理', '档案便捷查询', '档案安全可控'],
    scenarios: ['人事档案管理', '业务档案归档', '职称评审支撑'],
    color: 'from-emerald-500 to-teal-500'
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="解决方案"
        description="微晖医疗提供医务管理、护理管理、质量管理、医护专业档案四大解决方案，助力医疗机构实现高效数字化管理。"
        keywords="医疗解决方案,医务管理,护理管理,质控管理,医院数字化转型"
        path="/solutions"
      />

      <section className="relative py-24 bg-gradient-to-br from-dark via-gray-900 to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              四大解决方案
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              针对不同管理场景，提供专业的数字化解决方案，助力医院管理升级
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${solution.color}`} />
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{solution.title}</h3>
                      <p className="text-primary font-medium">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      核心优势
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">适用场景</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.scenarios.map((scenario, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {scenario}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/about" className="mt-6 w-full py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center group/btn">
                    了解详情
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">需要定制化解决方案？</h2>
            <p className="text-gray-600 mb-8">我们的专业团队将根据您的实际需求，提供个性化的解决方案</p>
            <Link to="/about" className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl inline-block">
              联系我们获取方案
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
