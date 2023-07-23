import { Text as TextView, View} from 'react-native';
import React from 'react';
import { Fonts } from '../../assets/styles';

const Text = ({
      children,
      fontSize=14,
      color='#160520',
      regular=true,
      semiBold=false,
      bold=false,
      style,
      ...props
}) => {

      return (
            <TextView {...props} style={[
                  style, {fontSize: fontSize, color: color, lineHeight: fontSize * 1.5},
                  regular && {fontFamily: Fonts.Nunito.Regular},
                  semiBold && {fontFamily: Fonts.Nunito.semiBold},
                  bold && {fontFamily: Fonts.Nunito.Bold},

            ]}>
                  {children}
            </TextView>
      )
}


export default Text;
