import React from 'react';
import { Text } from 'react-native';

const Query = ({query}) => {
    return (
        <Text  style={{ color: "white", paddingHorizontal: 10, paddingVertical: 15 }}>
            {query}
        </Text>
    );
};

export default Query;