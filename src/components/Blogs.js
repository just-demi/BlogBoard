import {Image, StyleSheet, View} from 'react-native';
import propTypes from 'prop-types';
import React from 'react';
import { Image as ImageNative, Platform } from 'react-native';

import AuthorRow from './AuthorRow';

export default class Blogs extends React.Component{
    static propTypes = {
        fullname: propTypes.string.isRequired,
        //image: propTypes.object.isRequired,
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
        ...Platform.select({
            android:{
                backgroundColor: 'rgba(0,0,0,0.02)',
            },
            default:{
                backgroundColor: 'rgba(0,0,0,0.02)',
                height: '500%',
                width: '100%',
            }
        })
        
    }
});

