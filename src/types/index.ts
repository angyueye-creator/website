export interface SubSystem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Solution {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: string[];
  modules: string[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  path: string;
  label: string;
}
