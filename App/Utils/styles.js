import {StyleSheet} from 'react-native'
import { FONT_SIZE, Colors } from './theme'


export const CommonStyles = StyleSheet.create({
  normalText: {
    fontSize: FONT_SIZE.MEDIUM,
    color: Colors.TEXT
  },
  boldText: {
    fontSize: FONT_SIZE.MEDIUM,
    color: Colors.TEXT,
    fontWeight: 'bold'
  },
})