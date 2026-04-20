import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Shield, Building2, Bot, FolderKanban, CalendarDays, ClipboardList, KeyRound, CheckCircle, AlertTriangle, GraduationCap, BarChart3, Stethoscope, Award, FileText, Phone } from 'lucide-react';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const advantages = [
    { icon: Sparkles, title: '智能驱动', desc: 'AI赋能，让医疗管理更智慧' },
    { icon: Heart, title: '温暖体验', desc: '以人为本，打造有温度的产品' },
    { icon: Building2, title: '全院覆盖', desc: '9大子系统，一站式解决方案' },
    { icon: Shield, title: '安全可靠', desc: '专业资质，医疗数据安全守护者' },
  ];

  const subsystems = [
    { icon: Bot, name: '小微智能体', desc: '智能助手，温暖陪伴', key: 'agent' },
    { icon: FolderKanban, name: '医院专业档案', desc: '档案管理，井然有序', key: 'archive' },
    { icon: CalendarDays, name: '全院排班管理', desc: '排班有序，医护无忧', key: 'scheduling' },
    { icon: ClipboardList, name: '工作日常管理', desc: '日常事务，高效协同', key: 'work' },
    { icon: KeyRound, name: '医疗权限管理', desc: '权限明晰，安全护航', key: 'permission' },
    { icon: CheckCircle, name: '全院质量检查', desc: '质量为先，持续改进', key: 'quality' },
    { icon: AlertTriangle, name: '全院不良事件', desc: '主动上报，守护安全', key: 'adverse' },
    { icon: GraduationCap, name: '全院考试培训', desc: '以考促学，以训提能', key: 'training' },
    { icon: BarChart3, name: '医疗指标管理', desc: '数据说话，科学决策', key: 'metrics' },
  ];

  const solutions = [
    { icon: Stethoscope, name: '医务管理解决方案', desc: '让医务管理更高效、更规范', color: 'from-orange-500 to-red-500' },
    { icon: Heart, name: '护理管理解决方案', desc: '守护护理安全，提升护理品质', color: 'from-pink-500 to-rose-500' },
    { icon: Award, name: '质量管理解决方案', desc: '以质量为核心，驱动持续改进', color: 'from-amber-500 to-orange-500' },
    { icon: FileText, name: '医护专业档案解决方案', desc: '医护临床档案数字化，管理智能化', color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <div className="overflow-hidden">
      <Seo
        title="微晖医疗官网"
        description="微晖医疗为医院提供临床职能科室一体化管理平台，覆盖医务、护理、质控、档案等核心管理场景。"
        keywords="微晖医疗,医院管理系统,医疗信息化,医务管理,护理管理,质量管理,医疗数字化"
        path="/"
      />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full text-white/80 text-xs sm:text-sm mb-4 sm:mb-6">
              专注医疗行业数智AI转型
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              让医院管理<span className="text-primary">更有温度</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 sm:mb-8 font-light">
              不啻微芒，造炬成阳
            </p>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8 sm:mb-10">
              微晖医疗——深耕临床职能科室管理领域，为医疗机构打造高效、安全、温暖的一体化管理平台
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/products" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all text-sm sm:text-base">
                了解产品 <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all text-sm sm:text-base">
                联系我们
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心优势</h2>
            <p className="text-gray-600">为什么选择微晖医疗</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">9大子系统</h2>
            <p className="text-gray-600 text-sm sm:text-base">一站式解决临床职能科室管理需求</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subsystems.map((item, idx) => (
              <motion.div key={item.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} whileHover={{ y: -5 }} className="group bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-primary hover:shadow-xl transition-all cursor-pointer">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                    <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-white mb-1">{item.name}</h3>
                    <p className="text-gray-600 group-hover:text-white/80 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">四大解决方案</h2>
            <p className="text-gray-400 text-sm sm:text-base">为不同场景提供专业解决方案</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {solutions.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br p-6 sm:p-8 text-white cursor-pointer" style={{ background: `linear-gradient(135deg, ${idx === 0 ? '#ea5704, #f97316' : idx === 1 ? '#ec4899, #f43f5e' : idx === 2 ? '#f59e0b, #ea5704' : '#3b82f6, #06b6d4'})` }}>
                <div className="relative z-10">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <item.icon className="w-6 sm:w-7 h-6 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{item.name}</h3>
                  <p className="text-white/80 text-sm sm:text-base">{item.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">品牌故事</h2>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">不啻微芒，造炬成阳</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "微晖"二字，源自成语"不啻微芒，造炬成阳"。我们相信——哪怕只是微弱的光芒，汇聚起来也能照亮前行的道路。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                微晖医疗是一家专注于医疗行业数字化转型的科技企业，深耕临床职能科室管理领域。我们致力于以智能化技术为驱动，为医疗机构提供温暖、高效、安全的临床职能科室管理解决方案。
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                我们不做诊疗，不直接服务病人，只专注于为临床科室提供高效的后勤管理支撑。从细微处着手，以智能化之力，为医疗机构打造高效、安全、温暖的管理平台。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">开启数字化转型之旅</h2>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">联系我们，获取专属解决方案</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a href="tel:18969041110" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
                <Phone className="mr-2 w-4 sm:w-5 h-4 sm:h-5" /> 18969041110
              </a>
              <Link to="/about" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-colors text-sm sm:text-base">
                在线咨询 <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
