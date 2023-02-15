import React from 'react';
import { Text, View } from 'react-native';

const Reply = ({ reply }) => {
    return (
        <Text style={{ color: "white", backgroundColor: '#8e44ad', paddingHorizontal: 10, paddingVertical: 15 }}>
            {reply}
        </Text>
    );
};

export default Reply;