import React from 'react';
import { Layout } from 'antd';
import { Row, Col, Button } from 'antd';
import { useTranslation } from "react-i18next";
import { Signup } from './Signup/Signup';

import { Login } from './Login/Login';

export const Auth = () => {

  const { Header, Content } = Layout;

  const { i18n } = useTranslation();

  const Selectlanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <Layout style={{ padding: '24px' }}>
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Row>
          <Col span={4}>           
            </Col>
            <Col span={4}>           
            </Col>
            <Col span={4}>
              <Button onClick={() => Selectlanguage("es")} type="link" icon="flag" >
                ESP
              </Button>
            </Col>
            <Col span={4}>
              <Button onClick={() => Selectlanguage("en")} type="link" icon="flag" >
                ENG
              </Button>
            </Col>
          </Row>
        </Header>
      </Layout>

      <Layout style={{ paddingTop: '24px' }}>
        <Content>
          <Row>
            <Col>
              <Signup />
              <Login/>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  )
}