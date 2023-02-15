import React from 'react';
import { Text, View } from 'react-native';
import Query from '../Query/Query';
import Reply from '../Reply/Reply';

const Container = ({ data, query }) => {
    return (
        <View>
            {data ? data.map(item => <>
                <Query key={item._id} query={item.message} />
                <Reply key={item.reply} reply={item.reply} />
            </>) : <Text>loading...</Text>}
        </View>
    );
};

export default Container;