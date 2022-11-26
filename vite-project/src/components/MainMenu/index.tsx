import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items:MenuItem[] = [
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: '栏目3',
    key: '/page3',
    icon: <PieChartOutlined />,
    children: [
      {
        label: '栏目3-1',
        key: '/page3/page3-1',
      },
      {
        label: '栏目3-2',
        key: '/page3/page2',
      }
    ]
  },
  {
    label: '栏目4',
    key: '/page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏4-1',
        key: '/page4/page1',
      },
      {
        label: '栏目4-2',
        key: '/page4/page2',
      }
    ]
  },
  {
    label: '栏目5',
    key: '/page5',
    icon: <FileOutlined />,
    children: [
      {
        label: '栏5-1',
        key: '/page5/page1',
      },
      {
        label: '栏目5-2',
        key: '/page5/page2',
      }
    ]
  },
]

const MenuSide:React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()

  let firstOpenKey: string = ''
  const findKey = (obj: {key: string}) => {
    return obj.key === currentRoute.pathname
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i]!['children'] && 
      items[i]!['children'].length > 0 && 
      items[i]!['children'].find(findKey)
    ) {
      firstOpenKey = (items[i]!.key as string)
      break
    }
  }


  // 设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([''])
  

  const menuClick = (e: {key: string}) => {
    navigateTo(e.key)
  }

  const handleChange = (keys: string[]) => {
    console.log(keys)
    setOpenKeys([keys[keys.length - 1]])
  }


  return (
    <Menu theme="dark" 
      defaultSelectedKeys={[currentRoute.pathname]} 
      mode="inline" 
      // 菜单数据
      items={items} 
      onClick={menuClick}
      onOpenChange={handleChange}
      openKeys={openKeys}
    />
  )
}

export default MenuSide