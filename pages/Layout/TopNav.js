import * as React from 'react'
import css from './TopNav.css'
import { Link } from '../../src/routes/pages'

export default class TopNav extends React.Component {
  render() {
    const { categoryList = [] } = this.props
    return (
      <div className={css.topNavWarpper}>
        {categoryList.map(({ name, id }) => (
          <Link route={`/categorys/${id}`} params={{ id }} key={id}>
            <span className={css.topNavItem}>{name}</span>
          </Link>
        ))}
      </div>
    )
  }
}
