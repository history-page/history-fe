import * as React from 'react'
import Card from './Card'
import Banner from '../storysList/Card'
import { Row, Col } from 'antd'

const gridConfig = {
  0: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
  default: { xs: 24, sm: 12, md: 12, lg: 6, xl: 6 }
}

const heightConfig = {
  0: 400,
  default: 200
}

export default class List extends React.Component {
  render() {
    const { storyList = [] } = this.props
    return (
      <div>
        <Row type="flex" justify="start">
          <Col {...gridConfig[0]}>
            {storyList[0] && (
              <Banner
                story={storyList[0]}
                height={heightConfig[0] || heightConfig['default']}
                isDetail
              />
            )}
          </Col>
        </Row>
        <Row type="flex" justify="start">
          {storyList.slice(1).map((item, index) => {
            const config = gridConfig['default']
            return (
              <Col {...config} key={index}>
                <Card story={item} index={index} />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
