import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import propTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';
//import getAvatarColor from '../utils/getAvatarColor';
import getInitials from './utils/getInitials';

export default function AuthorRow({fullname, linkText, onPressLinkText}){
    return(
        <View style={styles.container}>
            <Avatar
              size={35}
              initials={getInitials(fullname)}
              backgroundColor={'blue'}
              />
              <Text style={styles.text} numberOfLines={1}>
                  {fullname}
              </Text>
              {!!linkText && (
                  <TouchableOpacity onPress={onPressLinkText}>
                      <Text numberOfLines={1}>{linkText}</Text>
                  </TouchableOpacity>
              )}
        </View>
    )
}

AuthorRow.propTypes = {
    fullname: propTypes.string.isRequired,
    linkText: propTypes.string.isRequired,
    onPressLinkText: propTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    },
});