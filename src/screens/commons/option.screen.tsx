import {ILine, IText, ITouch, IView} from 'components';
import React, {useRef} from 'react';
import {Animated, Platform, TouchableOpacity} from 'react-native';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function OptionScreen(props: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0.3,
      duration: 400,
      useNativeDriver: false,
      delay: 200,
    }).start();
  }, [fadeAnim]);
  return (
    <IView
      fit
      backgroundColor={'transparent'}
      style={{justifyContent: 'flex-end'}}>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.BLACK,
          opacity: fadeAnim,
        }}>
        <ITouch
          fit
          onPress={() => {
            fadeAnim.setValue(0);
            NavigationUtils.pop();
          }}></ITouch>
      </Animated.View>
      <IView
        padding={20}
        borderRadius
        backgroundColor={Colors.WHITE}
        elevation={Platform.OS === 'ios' ? 12 : 0}>
        <IText
          color={Colors.SECONDARY}
          fontSize={FONTSIZE_MEDIUM}
          fontWeight="medium">
          Select
        </IText>
        <ILine height={10} />
        {[{}, {}, {}].map((item, index) => {
          return (
            <ITouch
              paddingVertical
              key={index}
              onPress={() => {
                fadeAnim.setValue(0);
                NavigationUtils.pop();
              }}>
              <IText>Option {index + 1}</IText>
            </ITouch>
          );
        })}
      </IView>
    </IView>
  );
}
