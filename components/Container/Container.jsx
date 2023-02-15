import React from 'react';
import { Text, View } from 'react-native';
import Query from '../Query/Query';
import Reply from '../Reply/Reply';

const Container = ({ data, query }) => {
    return (
        <View>
            {data ? data.map(item => <>
                <Query query={item.message} />
                <Reply reply={item.reply} />
            </>) : <Text>loading...</Text>}
        </View>
    );
};

export default Container;