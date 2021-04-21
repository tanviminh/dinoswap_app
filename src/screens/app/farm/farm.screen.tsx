import {Icons} from 'assets';
import {IIcon, ILine, IList, IText, ITouch, IView} from 'components';
import {
  ALERT_SCREEN,
  LIST_WALLET_SCREEN,
  OPTION_SCREEN,
  SEE_PAIR_SCREEN,
} from 'navigations/routes';
import React, {createRef, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {FooterComponent} from 'screens/components/footer.component';
import {GrayButtonComponent} from 'screens/components/gray.button.component';
import {PrimaryButtonComponent} from 'screens/components/primary.button.component';
import {Colors} from 'styles';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SMALL,
  FONTSIZE_SUPER,
  MARGIN,
  RADIUS_ORIGIN,
  RADIUS_ROUND,
} from 'styles/typography';
import {NavigationUtils} from 'utils';
const items = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
let ilistRef: FlatList | null = null;
export function FarmScreen() {
  return (
    <IView fit backgroundColor={Colors.PRIMARY}>
      <AppToolbarComponent mode="light" />
      <IList
        createRef={(ref: FlatList) => {
          ilistRef = ref;
        }}
        data={items}
        refreshing={false}
        onRefresh={() => {}}
        contentContainerStyle={{
          padding: 10,
          borderRadius: RADIUS_ORIGIN,
          overflow: 'hidden',
        }}
        ItemSeparatorComponent={() => {
          return <ILine height={1} color={Colors.LINE} />;
        }}
        ListHeaderComponent={() => {
          return <Header />;
        }}
        renderItem={data => {
          return <Item data={data} key={data.index} />;
        }}
        ListFooterComponent={() => {
          return <Footer />;
        }}
      />
    </IView>
  );
}

function Header() {
  const [finished, setFinished] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <IView>
      <IText color={Colors.PINK} fontSize={FONTSIZE_SUPER} fontWeight="medium">
        Farms
      </IText>
      <IText color={Colors.WHITE}>
        Stake Liquidity Pool (LP) tokens to earn.
      </IText>
      <ILine height={20} />
      <IView horizontal centerVertical>
        <IView fit>
          <ITouch
            onPress={() => {
              setFinished(!finished);
            }}>
            <IIcon
              xml={finished ? Icons.FINISHED_ON : Icons.LIVE_ON}
              height={24}
              width={100}
            />
          </ITouch>
          <ILine height={10} />
          <IView horizontal centerVertical>
            <ITouch
              onPress={() => {
                setToggle(!toggle);
              }}>
              <IIcon
                xml={toggle ? Icons.TOGGLE_ON : Icons.TOGGLE_OFF}
                height={24}
                width={46}
              />
            </ITouch>
            <ILine width={10} />

            <IText color={Colors.LIGHT_BROWN}>Stack only</IText>
          </IView>
        </IView>
        <IView fit>
          <IText color={Colors.LIGHT_BROWN}>Sort by</IText>
          <ILine height={5} />
          <ITouch
            onPress={() => {
              NavigationUtils.navigate(OPTION_SCREEN);
            }}>
            <IView
              horizontal
              padding
              centerVertical
              borderRadius={RADIUS_ROUND}
              backgroundColor={Colors.WHITE}>
              <IView fit>
                <IText fontWeight="medium">APR</IText>
              </IView>
              <IIcon xml={Icons.DOWN} fill={Colors.BROWN} size={20} />
            </IView>
          </ITouch>
        </IView>
      </IView>
      <ILine height={40} />
    </IView>
  );
}

function Item(props: any) {
  const {item, index} = props.data;
  if (index === items.length - 1) {
    return (
      <ITouch
        width="100%"
        height={40}
        onPress={() => {
          if (ilistRef) {
            ilistRef.scrollToOffset({animated: true, offset: 0});
          }
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#EF476F', '#FF7697']}
          style={{
            width: '100%',
            height: '100%',

            borderBottomLeftRadius: RADIUS_ORIGIN,
            borderBottomRightRadius: RADIUS_ORIGIN,
          }}>
          <IView fit center paddingHorizontal>
            <IText
              fontSize={FONTSIZE_MEDIUM}
              fontWeight="medium"
              color={Colors.WHITE}>
              To Top
            </IText>
          </IView>
        </LinearGradient>
      </ITouch>
    );
  }
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <IView
      backgroundColor={Colors.WHITE}
      style={{
        overflow: 'hidden',
        borderTopLeftRadius: index == 0 ? RADIUS_ORIGIN : 0,
        borderTopRightRadius: index == 0 ? RADIUS_ORIGIN : 0,
      }}>
      <IView padding>
        <IView horizontal>
          <IView fit>
            <IView horizontal>
              <IIcon xml={Icons.DINO} size={16} />
              <IIcon xml={Icons.BNB} size={16} />
            </IView>
            <ILine height={4} />
            <IText fontWeight="medium">DINO-ETH</IText>
          </IView>
          <IView fit>
            <IText color={Colors.TEXT_GRAY} fontSize={FONTSIZE_SMALL}>
              Earned
            </IText>
            <ILine height={4} />
            <IText fontWeight="medium">100,000</IText>
          </IView>

          <IView fit>
            <IText color={Colors.TEXT_GRAY} fontSize={FONTSIZE_SMALL}>
              APR
            </IText>
            <ILine height={4} />
            <IText fontWeight="medium">87.56%</IText>
          </IView>
          <ITouch
            padding
            onPress={() => {
              setExpand(!expand);
            }}>
            <IIcon
              xml={!expand ? Icons.DOWN : Icons.UP}
              size={16}
              fill={Colors.SECONDARY}
            />
          </ITouch>
        </IView>
      </IView>
      {expand ? (
        <IView backgroundColor={Colors.PINK} padding>
          <IView>
            <IView horizontal centerVertical>
              <IView fit>
                <IText fontSize={FONTSIZE_SMALL}>Multiplier</IText>
              </IView>
              <IView fit horizontal spaceBetween>
                <IText fontSize={FONTSIZE_SMALL} fontWeight="bold">
                  40x
                </IText>
                <ITouch>
                  <IIcon xml={Icons.SWAP} size={16} fill={Colors.SECONDARY} />
                </ITouch>
              </IView>
            </IView>

            <ILine height={10} />
            <IView horizontal centerVertical>
              <IView fit>
                <IText fontSize={FONTSIZE_SMALL}>Liquidity</IText>
              </IView>
              <IView fit horizontal spaceBetween>
                <IText fontSize={FONTSIZE_SMALL} fontWeight="bold">
                  $566.765.344
                </IText>
                <ITouch
                  onPress={() => {
                    NavigationUtils.navigate(ALERT_SCREEN);
                  }}>
                  <IIcon
                    xml={Icons.QUESTION}
                    size={16}
                    fill={Colors.SECONDARY}
                  />
                </ITouch>
              </IView>
            </IView>
            <ILine height={10} />
            <IView horizontal centerVertical>
              <IText
                color={Colors.SECONDARY}
                fontWeight="medium"
                textAlignCenter>
                Get DINO-ETH LP
              </IText>
              <ILine width={10} />
              <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
            </IView>
            <ILine height={10} />
            <IView horizontal centerVertical>
              <IText
                color={Colors.SECONDARY}
                fontWeight="medium"
                textAlignCenter>
                View contract
              </IText>
              <ILine width={10} />
              <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
            </IView>
            <ILine height={10} />
            <ITouch
              horizontal
              centerVertical
              onPress={() => {
                NavigationUtils.navigate(SEE_PAIR_SCREEN);
              }}>
              <IText
                color={Colors.SECONDARY}
                fontWeight="medium"
                textAlignCenter>
                See pair info
              </IText>
              <ILine width={10} />
              <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
            </ITouch>
          </IView>
          <ILine height={10} />

          <IView padding backgroundColor={Colors.WHITE} borderRadius>
            <IText fontWeight="medium" color={Colors.BROWN}>
              Cake earned
            </IText>
            <IText fontWeight="medium" fontSize={FONTSIZE_MEDIUM}>
              ?
            </IText>
            <IText color={Colors.TEXT_GRAY}>-0.000USD</IText>
            <IView
              style={{position: 'absolute', right: MARGIN, bottom: MARGIN}}>
              <GrayButtonComponent>Harvest</GrayButtonComponent>
            </IView>
          </IView>
          <ILine height={10} />

          <IView
            padding
            backgroundColor={Colors.WHITE}
            borderRadius
            spaceBetween>
            <IText fontWeight="medium" color={Colors.BROWN}>
              Start farming
            </IText>
            <ILine height={10} />

            <PrimaryButtonComponent
              onPress={() => {
                NavigationUtils.navigate(LIST_WALLET_SCREEN);
              }}>
              Unlock wallet
            </PrimaryButtonComponent>
          </IView>
        </IView>
      ) : null}
    </IView>
  );
}

function Footer() {
  return (
    <IView>
      <FooterComponent />
    </IView>
  );
}
