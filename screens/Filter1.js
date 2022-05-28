import React from 'react'
import { Image, View } from 'react-native';

const Filter1 = (
    {face }
) => {
const width = face.bounds.size.width
const height = face.bounds.size.height
const left_eye=face.LEFT_EYE
const right_eye=face.RIGHT_EYE
    const glassesWidth = width
    const glassesHeight =  height / 3

    const transformAngle = (
        angleRad = Math.atan((right_eye.y - left_eye.y) / (right_eye.x - left_eye.x))
    ) => angleRad * 180 / Math.PI

    return (
<View style={
            {
                position: 'absolute',
                left: left_eye.x - glassesWidth * 0.675,
                top: left_eye.y - glassesHeight * 0.5
            }
        } >
<>
        <Image source={require('../assets/glasses.png')}
            style={
                {
                    width: glassesWidth,
                    height: glassesHeight,
                    resizeMode: 'contain',
                    transform: [{ rotate: `${transformAngle()}deg` }]
                }
            }
        /></></View >
    );
};

export default Filter1