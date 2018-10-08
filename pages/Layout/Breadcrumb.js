import * as React from 'react'
import css from './Breadcrumb.css'
import { Breadcrumb } from 'antd'

export default class BreadcrumbComponent extends React.Component {
  render() {
    const { config } = this.props
    return (
      <div className={css.breadcrumbWrapper}>
        <Breadcrumb>
          {config.slice(0, -1).map(({ title }) => {
            return <Breadcrumb.Item key={title}>{title}</Breadcrumb.Item>
          })}
          <Breadcrumb.Item>{config[config.length - 1].title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}
