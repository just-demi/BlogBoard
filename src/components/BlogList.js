import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Blogs from './Blogs';
import { getImageFromId } from './utils/api';

const keyExtractor = ({ id }) => id.toString();

export default class BlogList extends React.Component{
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    renderItem = ({item: {id, author}})=>(
        <Blogs
          fullname={author}
          image={{
              uri:getImageFromId(id),
          }}
          linkText = "Comments"
          onPressLinkText={()=>{
        console.log('Pressed link!');}}
          />
    )

    render(){
        const{items}= this.props;

        return(
            <FlatList
             data={items}
             renderItem={this.renderItem}
             keyExtractor={keyExtractor}
             />
        );

    }
}