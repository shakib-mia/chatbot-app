import React from 'react';
import { Text, View } from 'react-native';
import Query from '../Query/Query';
import Reply from '../Reply/Reply';

const Container = ({data}) => {
    console.log(data[0]);
    return (
        <View>
            <Query query={data[0]?.message} />
            <Reply reply={data[0]?.reply}/>
        </View>
    );
};

export default Container;