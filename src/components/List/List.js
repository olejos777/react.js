import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I'm going to do nothing</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero 
         titleText={this.props.title} 
        imageSource={this.props.image}
        />

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column title='Family' />
          <Column title='Kodilla' />
          <Column title='Home construction' />
        </div>
      </section>
    )
  }
}

export default List;

