import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import WrapperPage from './WrapperPage'
import { lightTheme, darkTheme } from '@demo-ui-toolkit/mui-themes'
import Grid from '@material-ui/core/Grid'
import { InputText, Button, Card } from '../index'

import card1 from '../../public/card1.jpg'
import card2 from '../../public/card2.jpg'
import card3 from '../../public/card3.jpg'

const lightThemeExample = {
    themeName: 'Light Theme',
    ...lightTheme,
    ...{
        background: {
            paper: "#000",
            default: "#000"
        }
    }
};

const darkThemeExample = {
    themeName: 'Dark Theme',
    ...darkTheme
};

storiesOf('Showcase page', module)
    .addDecorator(muiTheme([lightThemeExample, darkThemeExample]))
    .add('Check your holiday', () => (
        <WrapperPage>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <InputText
                        label="Firstname"
                        placeholder="Type your firstname" />
                </Grid>
                <Grid item xs={6}>
                    <InputText
                        label="Lastname"
                        placeholder="Type your lastname" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputText
                        label="Location"
                        placeholder="Type your location" />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card
                        title="Relaxing day in"
                        subtitle="Lakes of Killarney"
                        photo={card1} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card
                        title="Night in"
                        subtitle="Makarska"
                        photo={card2} />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Card
                        title="Sunny day in"
                        subtitle="Maldive"
                        photo={card3} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button text="Apply for holiday" />
                </Grid>
            </Grid>
        </WrapperPage>
    ));