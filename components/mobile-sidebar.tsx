// @ts-nocheck

import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { Link } from 'react-router';
import { NavItems } from './nav-items';

export const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
          <h1>Tour</h1>
        </Link>
        <button onClick={() => sidebar.toggle()}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent width={270} ref={(Sidebar) => (sidebar = Sidebar)} created={() => sidebar.hide()} closeOnDocumentClick={true} showBackdrop={true} type="over">
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};
