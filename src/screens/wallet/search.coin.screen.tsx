import {
  IGradient,
  IIcon,
  IImage,
  ILine,
  IList,
  IScroll,
  IText,
  ITextInput,
  ITouch,
  IView,
} from 'components';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'styles';
import {Icons, Images} from 'assets';
import {HomeToolbarComponent} from '../components/home.toolbar.component';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SUPER,
  RADIUS_ORIGIN,
  SHADOW,
} from 'styles/typography';
import LinearGradient from 'react-native-linear-gradient';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {SecondaryButtonComponent} from 'screens/components/secondary.button.component';
import {FooterComponent} from 'screens/components/footer.component';
import {NavigationUtils} from 'utils';
import {SECONDARY} from 'styles/colors';
import {BaseProps} from 'screens/base.screen';
import {ModalToolbarComponent} from 'screens/components/modal.toolbar.component';

interface ItemModel {
  icon: any;
  name: string;
}

interface ItemProps {
  data: {
    index: number;
    item: ItemModel;
  };
  callback?: (data: ItemModel) => void;
}

export interface SearchWalletScreenParams {
  callback: (data: ItemModel) => void;
}

const items: ItemModel[] = [
  {
    icon: Icons.ETH,
    name: 'ETH',
  },
  {
    icon: Icons.BNB,
    name: 'BNB',
  },
  {
    icon: Icons.DINO,
    name: 'DINO',
  },
  {
    icon: Icons.ETH,
    name: 'ETH',
  },
  {
    icon: Icons.BNB,
    name: 'BNB',
  },
  {
    icon: Icons.DINO,
    name: 'DINO',
  },
  {
    icon: Icons.ETH,
    name: 'ETH',
  },
  {
    icon: Icons.BNB,
    name: 'BNB',
  },
  {
    icon: Icons.DINO,
    name: 'DINO',
  },
  {
    icon: Icons.ETH,
    name: 'ETH',
  },
  {
    icon: Icons.BNB,
    name: 'BNB',
  },
  {
    icon: Icons.DINO,
    name: 'DINO',
  },
  {
    icon: Icons.ETH,
    name: 'ETH',
  },
  {
    icon: Icons.BNB,
    name: 'BNB',
  },
  {
    icon: Icons.DINO,
    name: 'DINO',
  },
];

export function SearchCoinScreen(props: BaseProps) {
  //   const [coin, setCoin] = useState(props.route.params.data);
  //   React.useLayoutEffect(() => {
  //     props.navigation.setOptions({
  //       data: coin,
  //     });
  //   }, [props.navigation, coin]);

  let callback = props.route?.params?.callback;
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IView style={{flex: 1}}>
        <ModalToolbarComponent title="Select a token" />
        <Search />
        <IList
          data={items}
          renderItem={({item, index}) => {
            return (
              <ITouch
                key={index}
                onPress={() => {
                  if (callback) {
                    callback(item);
                  }
                  props.navigation.goBack();
                  //   NavigationUtils.pop();
                }}>
                <IView padding horizontal centerVertical>
                  <IIcon xml={item.icon} size={40} />
                  <ILine width={10} />
                  <IText fontWeight="medium">{item.name}</IText>
                </IView>
              </ITouch>
            );
          }}
          contentContainerStyle={{padding: 10}}
        />
      </IView>
    </IView>
  );
}

function Search() {
  return (
    <IView padding={20}>
      <ITextInput
        padding
        placeholder="Search name or paste address"
        style={{
          borderWidth: 1,
          borderRadius: RADIUS_ORIGIN,
          borderColor: Colors.SECONDARY,
        }}
        autoCapitalize="characters"
      />
    </IView>
  );
}
