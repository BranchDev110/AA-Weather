import React, { Component } from 'react';
import '../Styles/CityItem.css';

type Props = {
  name: String,
  isActive: Boolean
}
class CityItem extends Component<Props> {
  render() {
    return (
      <div className='city__item'>
        <p className={this.props.isActive ? 'city__item--active' : 'city__item--normal'}>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default CityItem;