import React from 'react';
import ListItem from './ListItem.jsx';

const testdata = [{"id":1, "text":"cucumber"},{"id":2, "text":"onion"},{"id":3, "text":"peanuts"}];

export default class List extends React.Component {

  render() {

    let listItems = testdata.map((item) => {
      return <ListItem key={item.id} ingredient={item.text} />
    });

    return ( <ul>{listItems}</ul> )

  }
}
