import {ILine, IText, ITouch, IView} from 'components';
import React, {useRef} from 'react';
import {Animated, Platform, TouchableOpacity} from 'react-native';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {FONTSIZE_MEDIUM} from 'styles/typography';
import {NavigationUtils} from 'utils';

export function AlertScreen(props: any) {
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
    <IView fit backgroundColor={'transparent'} centerVertical>
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
        margin
        padding={20}
        borderRadius
        backgroundColor={Colors.WHITE}
        elevation={Platform.OS === 'ios' ? 12 : 0}>
        <IText
          color={Colors.SECONDARY}
          fontSize={FONTSIZE_MEDIUM}
          fontWeight="medium">
          Information
        </IText>
        <ILine height={10} />
        <IText>
          Your transaction will revert if there is a large, unfavorable price
          movement before it is confirmed.
        </IText>
        <ILine height={20} />

        <IView>
          <PrimaryButtonComponent
            onPress={() => {
              fadeAnim.setValue(0);

              NavigationUtils.pop();
            }}>
            OK
          </PrimaryButtonComponent>
        </IView>
      </IView>
    </IView>
  );
}
