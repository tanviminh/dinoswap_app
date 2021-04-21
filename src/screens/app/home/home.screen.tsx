import {Icons, Images} from 'assets';
import {
  IIcon,
  IImage,
  ILine,
  IScroll,
  IText,
  ITextInput,
  ITouch,
  IView,
} from 'components';
import {DOC_URL} from 'consts';
import {GOVERNANCE_SCREEN, LANGUAGE_SCREEN} from 'navigations/routes';
import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {BarChartComponent} from 'screens/components/bar.chart.component';
import {FooterComponent} from 'screens/components/footer.component';
import {LineChartComponent} from 'screens/components/line.chart.component';
import {Colors} from 'styles';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SUPER,
  RADIUS_ORIGIN,
  RADIUS_ROUND,
} from 'styles/typography';
import {BrowserUtils, NavigationUtils} from 'utils';

export function HomeScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <AppToolbarComponent mode="dark" />
      <IScroll style={{flex: 1}}>
        <Chart key="Chart" />
        <PopularList key="PopularList" />
        <Announcements key="Announcements" />
        <TopMove key="TopMove" />
        <TopEarners key="TopEarners" />
        <IView margin>
          <FooterComponent />
        </IView>
      </IScroll>
    </IView>
  );
}

function Chart() {
  return (
    <IView margin>
      <IView
        horizontal
        borderRadius
        elevation={2}
        padding
        style={{
          borderWidth: 1,
          borderColor: Colors.LINE,
          overflow: 'hidden',
          backgroundColor: Colors.LINE,
        }}>
        <IScroll horizontal>
          <IView horizontal centerVertical key="content">
            {[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => {
              return (
                <IText marginHorizontal>
                  DINOEX: $15.5 <IText color={Colors.BULL}>+12.2%</IText>
                </IText>
              );
            })}
          </IView>
        </IScroll>
      </IView>
      <ILine height={10} />
      <IView>
        <LineChartComponent />
      </IView>
      <ILine height={10} />
      <IView>
        <BarChartComponent />
      </IView>
      <ILine height={20} />
      <IView
        horizontal
        borderRadius={RADIUS_ROUND}
        elevation={2}
        centerVertical
        paddingHorizontal
        style={{
          borderWidth: 1,
          borderColor: Colors.LINE,
          overflow: 'hidden',
          backgroundColor: Colors.LINE,
        }}>
        <IView fit>
          <ITextInput paddingVertical />
        </IView>
        <IIcon xml={Icons.SEARCH} size={24} fill={Colors.LIGHT_GRAY} />
      </IView>
    </IView>
  );
}

function PopularList() {
  return (
    <IView padding marginTop={20}>
      <IView horizontal spaceBetween centerVertical>
        <IText fontSize={FONTSIZE_SUPER} fontWeight="medium">
          Popular list
        </IText>
        <ITouch>
          <IText color={Colors.SECONDARY}>View more</IText>
        </ITouch>
      </IView>
      <ILine height={10} />
      <IView horizontal spaceBetween>
        {[{}, {}, {}].map((item, index) => {
          return (
            <IView
              key={index}
              horizontal
              padding={4}
              backgroundColor={Colors.WHITE}
              borderRadius={RADIUS_ROUND}
              centerVertical
              elevation={4}>
              <IIcon xml={Icons.COINBASE} size={20} />
              <IView padding={4}>
                <IText>Stable coin</IText>
              </IView>
            </IView>
          );
        })}
      </IView>
    </IView>
  );
}

function Announcements() {
  return (
    <IView padding marginTop={20}>
      <IView horizontal spaceBetween centerVertical>
        <IText fontSize={FONTSIZE_SUPER} fontWeight="medium">
          Announcements
        </IText>
        <ITouch>
          <IText color={Colors.SECONDARY}>View more</IText>
        </ITouch>
      </IView>
      <ILine height={10} />
      <IView>
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => {
          return (
            <ITouch
              key={index}
              horizontal
              centerVertical
              marginTop
              paddingVertical
              style={{borderBottomWidth: 1, borderColor: Colors.LINE}}>
              <IView fit>
                <IText fontWeight="medium">
                  Introducing the Stablecoin List
                </IText>
                <ILine height={10} />
                <IText color={Colors.TEXT_GRAY} numberOfLines={3}>
                  Stablecoins are back with a new twist - algorithmic
                  stablecoins. Browse stablecoins in our new list. Add liquidity
                  to MIS-USDT only on DinoSwap.
                </IText>
                <ILine height={10} />

                <IView horizontal centerVertical>
                  <IText>stETH</IText>
                  <ILine width={4} />
                  <IIcon xml={Icons.INC} size={14} fill={Colors.BULL} />
                  <ILine width={4} />

                  <IText color={Colors.BULL}>12.3%</IText>
                </IView>
              </IView>
              <ILine width={10} />
              <IView
                borderRadius={10}
                width={100}
                height={100}
                style={{overflow: 'hidden', backgroundColor: 'red'}}>
                <IImage
                  source={Images.HOME_BACKGROUND}
                  width={'100%'}
                  height="100%"
                  resizeMode="cover"
                />
              </IView>
            </ITouch>
          );
        })}
      </IView>
    </IView>
  );
}

function TopMove() {
  return (
    <IView marginTop={20}>
      <IView padding>
        <IView horizontal spaceBetween centerVertical>
          <IText fontSize={FONTSIZE_SUPER} fontWeight="medium">
            Top Movers
          </IText>
          <ITouch>
            <IText color={Colors.SECONDARY}>View all token</IText>
          </ITouch>
        </IView>
        <ILine height={10} />
        <IText color={Colors.TEXT_GRAY}>Tokens making moves today</IText>
      </IView>

      <ILine height={10} />

      <IScroll horizontal>
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => {
          return (
            <IView>
              <IView
                backgroundColor={Colors.WHITE}
                borderRadius={RADIUS_ORIGIN}
                elevation
                margin
                padding
                style={{minWidth: 128, minHeight: 128}}>
                <IText fontSize={FONTSIZE_LARGE} fontWeight="medium">
                  ZLOT
                </IText>
                <IText color={Colors.TEXT_GRAY}>zLOT</IText>
                <IView fit></IView>
                <IText
                  fontSize={FONTSIZE_LARGE}
                  fontWeight="bold"
                  color={Colors.BULL}>
                  $456.76
                </IText>
                <IText color={Colors.BULL}>+56.76%</IText>
              </IView>
            </IView>
          );
        })}
      </IScroll>
    </IView>
  );
}

function TopEarners() {
  return (
    <IView marginTop={20}>
      <IView padding>
        <IView horizontal spaceBetween centerVertical>
          <IText fontSize={FONTSIZE_SUPER} fontWeight="medium">
            Top Earners
          </IText>
          <ITouch>
            <IText color={Colors.SECONDARY}>View all pair</IText>
          </ITouch>
        </IView>
        <ILine height={10} />
        <IText color={Colors.TEXT_GRAY}>Pairs with the highest APY today</IText>
      </IView>

      <ILine height={10} />

      <IScroll horizontal>
        {[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => {
          return (
            <IView padding backgroundColor={Colors.WHITE}>
              <IView
                backgroundColor={Colors.WHITE}
                borderRadius={RADIUS_ORIGIN}
                elevation
                padding
                style={{minWidth: 128, minHeight: 128}}>
                <IText fontSize={FONTSIZE_LARGE} fontWeight="medium">
                  ETH-AXS
                </IText>

                <IView fit></IView>
                <IText
                  fontSize={FONTSIZE_LARGE}
                  fontWeight="bold"
                  color={Colors.BULL}>
                  192.34%
                </IText>
              </IView>
            </IView>
          );
        })}
      </IScroll>
    </IView>
  );
}
