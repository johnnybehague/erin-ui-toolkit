import React from 'react';
import { Content, Footer, Page, Sidebar, Topbar } from '../../components/layouts';
import './ButtonsPage.styles.scss';

const ButtonsPage = () => {
  return (
        <Page>
            <Sidebar/>
            <Topbar/>
            <Content/>
            <Footer/>
        </Page>
  );
}

export default ButtonsPage;