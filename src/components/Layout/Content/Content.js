import React from 'react'
import './Content.less'
import { Layout } from 'antd'

const { Content } = Layout

export default ({ children, ...rest }) => (
  <Content className="layout-body">
    { children }
  </Content>
)
