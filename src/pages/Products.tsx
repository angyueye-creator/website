import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FolderOpen, CalendarDays, ClipboardList, ShieldCheck, ClipboardCheck, AlertTriangle, GraduationCap, BarChart3 } from 'lucide-react';

const subSystems = [
  {
    id: 'xiaowei',
    name: '小微智能体',
    subtitle: '智能助手，温暖陪伴',
    description: '基于先进AI技术打造的智能助手，为职能科室医护人员提供24小时在线的智能问答、工作辅助和决策支持。',
    icon: Bot,
    features: ['智能问答', '工作辅助', '决策支持', '24小时在线'],
  },
  {
    id: 'archive',
    name: '医院专业档案',
    subtitle: '档案管理，井然有序',
    description: '专业化的医院档案管理系统，实现人事档案、业务档案的电子化、规范化管理。',
    icon: FolderOpen,
    features: ['人事档案', '业务档案', '电子化管理', '规范存储'],
  },
  {
    id: 'scheduling',
    name: '全院排班管理',
    subtitle: '排班有序，医护无忧',
    description: '智能化的排班管理系统，支持多科室、多班次的灵活排班，自动检测冲突、合理调配资源。',
    icon: CalendarDays,
    features: ['多科室排班', '自动冲突检测', '资源调配', '灵活班次'],
  },
  {
    id: 'work',
    name: '工作日常管理',
    subtitle: '日常事务，高效协同',
    description: '统一的工作平台，涵盖事务审批、通知公告、日程管理、工作汇报等功能模块。',
    icon: ClipboardList,
    features: ['事务审批', '通知公告', '日程管理', '工作汇报'],
  },
  {
    id: 'permission',
    name: '医疗权限管理',
    subtitle: '资质分级，精准授权',
    description: '全周期管理医师核心资质，灵活配置手术、麻醉、药品及报告权限。',
    icon: ShieldCheck,
    features: ['手术分级授权', '麻醉操作权限', '特殊药品处方', '诊断报告签发'],
  },
  {
    id: 'quality',
    name: '全院质量检查',
    subtitle: '质量为先，持续改进',
    description: '全面的医疗质量检查系统，支持检查计划制定、现场检查、数据采集、问题整改、效果追踪的闭环管理。',
    icon: ClipboardCheck,
    features: ['检查计划', '现场检查', '问题整改', '效果追踪'],
  },
  {
    id: 'adverse',
    name: '全院不良事件',
    subtitle: '主动上报，守护安全',
    description: '便捷的不良事件上报平台，支持匿名上报、分级处理、原因分析、改进措施追踪。',
    icon: AlertTriangle,
    features: ['匿名上报', '分级处理', '原因分析', '改进追踪'],
  },
  {
    id: 'training',
    name: '全院考试培训',
    subtitle: '以考促学，以训提能',
    description: '完整的在线培训考试系统，支持题库管理、在线组卷、模拟考试、成绩分析等功能。',
    icon: GraduationCap,
    features: ['题库管理', '在线组卷', '模拟考试', '成绩分析'],
  },
  {
    id: 'metrics',
    name: '医疗指标管理',
    subtitle: '数据说话，科学决策',
    description: '全面的医疗指标监测平台，汇聚关键业务指标，提供数据可视化、趋势分析、预警提醒等功能。',
    icon: BarChart3,
    features: ['指标监测', '数据可视化', '趋势分析', '预警提醒'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-24 bg-gradient-to-br from-primary/90 to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              产品中心
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              微晖医疗临床职能科室一体化管理平台，涵盖9大核心子系统，为医疗机构提供全方位数字化解决方案
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {subSystems.map((system) => {
              const IconComponent = system.icon;
              return (
                <motion.div
                  key={system.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{system.name}</h3>
                  <p className="text-primary font-medium mb-4">{system.subtitle}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{system.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {system.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
