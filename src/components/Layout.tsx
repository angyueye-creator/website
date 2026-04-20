import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isLightHeader =
    location.pathname === '/products' ||
    location.pathname === '/solutions' ||
    location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLightHeader) {
      setIsScrolled(true);
    }
  }, [location.pathname, isLightHeader]);

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/products', label: '产品' },
    { path: '/solutions', label: '解决方案' },
    { path: '/about', label: '关于我们' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isLightHeader ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/assets/weihui-english-朝阳橙.svg"
                alt="微晖医疗"
                className="h-7 sm:h-8 md:h-10 w-auto"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary'
                      : isScrolled || isLightHeader
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:18969041110"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  isScrolled || isLightHeader
                    ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                    : 'bg-white/20 text-white hover:bg-white hover:text-primary'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">18969041110</span>
              </a>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-6 h-6 ${isScrolled || isLightHeader ? 'text-gray-900' : 'text-white'}`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${isScrolled || isLightHeader ? 'text-gray-900' : 'text-white'}`}
                />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <nav className="px-4 py-4 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-medium ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/assets/weihui-english-朝阳橙.svg"
                  alt="微晖医疗"
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                专注于医疗行业数字化转型的科技力量，让医院管理更有温度。
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                >
                  <i className="fab fa-weixin text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                >
                  <i className="fab fa-weibo text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">产品服务</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/products"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    9大子系统
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    解决方案
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    定制开发
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    技术支持
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">关于我们</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    品牌故事
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    发展历程
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    加入我们
                  </a>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    联系方式
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">联系我们</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:18969041110"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    18969041110
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:yeangyue@weihuiyiliao.com"
                    className="text-gray-400 hover:text-primary transition-colors cursor-pointer"
                  >
                    yeangyue@weihuiyiliao.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © 2026 微晖医疗科技有限公司 | 不啻微芒，造炬成阳
              <br className="sm:hidden" />
              <a
                href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002017744"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                浙公网安备33011002017744号
              </a>{' '}
              |{' '}
              <a
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                浙ICP备2024061320号-1
              </a>
            </p>
            <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                服务条款
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm transition-colors cursor-pointer"
              >
                网站地图
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
