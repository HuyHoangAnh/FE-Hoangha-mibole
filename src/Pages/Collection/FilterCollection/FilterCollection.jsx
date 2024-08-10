import React from 'react'
import styles from "./FilterCollection.module.scss"
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const FilterCollection = () => {
  return (
    <div className={cx('v5-list-filters')}>FilterCollection</div>
  )
}

export default FilterCollection