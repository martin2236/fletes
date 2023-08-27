import {useState} from 'react';
import { Layout} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.css'
import logo from '../../assets/logo.png';
const { Header } = Layout;

export const HeaderComponent = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        setCollapsed(true);
    };

    const menuItems = [
        { key: 'nosotros', label: 'Nosotros' },
        { key: 'servicios', label: 'Servicios' },
        { key: 'vehiculos', label: 'Vehículos' },
        { key: 'contacto', label: 'Contacto' },
      ];

return(
    <Header className="navbar">
    <div className="navbar__logo">
      <a onClick={() => scrollToSection('home')}>
        <img  className='navbar__img' src={logo} alt="logo" />
      </a>
    </div>
    <div className={`navbar__menu ${collapsed ? 'collapsed' : ''}`}>
      {menuItems.map(item => (
        <div key={item.key} className="navbar__menu-item">
          <a onClick={() => scrollToSection(item.key)}>{item.label}</a>
        </div>
      ))}
    </div>
    <div className="navbar__mobile-menu">
      <MenuOutlined onClick={toggleCollapsed} />
    </div>
  </Header>
)
}
