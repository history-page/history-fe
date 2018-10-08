import * as React from 'react'
import Card from './Card'
import { Row, Col } from 'antd'

const gridConfig = {
  0: { xs: 24, sm: 12, md: 24, lg: 16, xl: 16 },
  1: { xs: 24, sm: 12, md: 8, lg: 8, xl: 8 },
  2: { xs: 24, sm: 12, md: 8, lg: 12, xl: 12 },
  3: { xs: 24, sm: 12, md: 8, lg: 12, xl: 12 },
  default: { xs: 24, sm: 12, md: 6, lg: 6, xl: 6 }
}

const heightConfig = {
  0: 400,
  1: 400,
  2: 400,
  3: 400,
  default: 200
}

export default class List extends React.Component {
  render() {
    const { storyList = [] } = this.props
    return (
      <div>
        <Row type="flex" justify="start">
          {storyList.map((item, index) => {
            const config = gridConfig[index] || gridConfig['default']
            const isDetail = index <= 3
            return (
              <Col {...config} key={index}>
                <Card
                  story={item}
                  index={index}
                  height={heightConfig[index] || heightConfig['default']}
                  isDetail={isDetail}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}
