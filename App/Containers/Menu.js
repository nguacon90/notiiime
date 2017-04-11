import React, { Component } from 'react'
import {View} from 'react-native'
import {List, ListItem} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

class MenuComp extends Component {
    constructor () {
        super();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
                <List containerStyle={{marginBottom: 20}}>
                    <ListItem
                        roundAvatar
                        onPress={() => {Actions.notiiimeHome();}}
                        title="Notiii me"
                    />
                </List>
            </View>
        );
    }
}

export default MenuComp