import React from 'react';
import { Text, View } from 'react-native';

const Reply = ({ reply }) => {
    // console.log(reply.slice(0, 2));
    return (
        <Text style={{ color: "white", backgroundColor: '#8e44ad', paddingHorizontal: 10, paddingVertical: 15 }}>
            {reply.trim()}
        </Text>
    );
};

export default Reply;