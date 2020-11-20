import {Image, StyleSheet, View} from 'react-native';
import propTypes from 'prop-types';
import React from 'react';
import { Image as ImageNative } from 'react-native';

import AuthorRow from './AuthorRow';

export default class Blogs extends React.Component{
    static propTypes = {
        fullname: propTypes.string.isRequired,
        image: propTypes.any.isRequired,
        linkText: propTypes.string,
        onPressLinkText: propTypes.func,
    };

    static defaultProps = {
        linkText: '',
        onPressLinkText: ()=>{},
    };

    render(){
        const {fullname, image, linkText, onPressLinkText}= this.props;
        return(
            <View>
                <AuthorRow
                  fullname={fullname}
                  linkText={linkText}
                  onPressLinkText={onPressLinkText}
                />
                <Image style={styles.image} source={{uri: 'https://unsplash.it/600/600'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image:{
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
});

/*source: propTypes.oneOfType([
    propTypes.shape({
      uri: propTypes.string,
      headers: propTypes.objectOf(propTypes.string)
    }),
    propTypes.number,
    propTypes.arrayOf(
      propTypes.shape({
        uri: propTypes.string,
        width: propTypes.number,
        height: propTypes.number,
        headers: propTypes.objectOf(propTypes.string)
      })
    )
  ])*/
