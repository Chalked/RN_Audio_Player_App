import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import Controls from './Controls';
import Video from 'react-native-video';
import AudioSession, { AudioCategories, AudioOptions, AudioModes } from 'react-native-audio-session';


export default class Player extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paused: true,
            totalLength: 1,
        };
    }

    // comment

    componentDidMount = () => {
        AudioSession.setActive(true)
        .then(() => { console.log('AudioSession is now active.') })
        .catch(error => { console.log('AudioSession error') });
        AudioSession.setMode(AudioModes.SpokenAudio)
        .then(() => { console.log('Audio set to Playback.') })
        .catch(error => { console.log('AudioSession setCategory error.') });
    }

    setDuration(data) {
        this.setState({ totalLength: Math.floor(data.duration) });
    }

    render() {
        const audio = 'https://s3.us-east-2.amazonaws.com/giide-dev-assets/giides/the_life_brief/audio/the_life_brief_teacher_introduction.mp3';
        const video = (
            <Video source={{ uri: audio }}
                ref='audioElement'
                paused={this.state.paused}
                repeat={true}
                onLoadStart={this.loadStart}
                onLoad={this.setDuration.bind(this)}
                onError={this.videoError}
                style={styles.audioElement}
                ignoreSilentSwitch={'ignore'}
                playInBackground={true} />
        );

        return (
            <View style={styles.container}>
            <Text style={{ color: 'white', paddingBottom: 10 }}>
                React Native Audio Player
            </Text>
                <Controls 
                    onPressPlay={() => this.setState({ paused: false })}
                    onPressPause={() => this.setState({ paused: true })}
                    paused={this.state.paused} />
                {video}
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 2,
        backgroundColor: 'rgb(4, 4, 4)',
        alignItems: 'center', 
        justifyContent: 'center',
        height: 50
    },
    audioElement: {
        height: 0,
        width: 0
    }
};