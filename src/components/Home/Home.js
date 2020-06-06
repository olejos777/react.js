import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
    description: PropTypes.string,
    image: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const { title, subtitle, lists, addList } = this.props;

    return (
      
      <main className={styles.component}>
        <Search />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        <div className={styles.creator}>
          <Creator
            text={settings.listCreatorText} action={addList} />
        </div>
      </main>
    );
  }
}

export default Home;

