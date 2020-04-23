import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tab/tab1';
import Tab2 from './tab/tab2';

export default class TabScreen extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading="오늘 메세지">
                        <Tab1 />
                    </Tab>
                    <Tab heading="지난 메세지">
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}