import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 代码分割 - 按需加载页面组件
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const About = React.lazy(() => import('./pages/About'));

// 加载占位组件
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
