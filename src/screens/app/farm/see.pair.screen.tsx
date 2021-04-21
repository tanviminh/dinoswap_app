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
import React, {useState} from 'react';
import {AppToolbarComponent} from 'screens/components/app.toolbar.component';
import {BarChartComponent} from 'screens/components/bar.chart.component';
import {FooterComponent} from 'screens/components/footer.component';
import {LineChartComponent} from 'screens/components/line.chart.component';
import {Colors} from 'styles';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SMALL,
  FONTSIZE_SUPER,
  RADIUS_ORIGIN,
  RADIUS_ROUND,
} from 'styles/typography';

export function SeePairScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <AppToolbarComponent mode="dark" />
      <IScroll style={{flex: 1}}>
        <Chart key="Chart" />
        <PairDetail key="PairDetail" />
        <Tokens key="tokens" />
        <Liquidity key="liquidity" />
        <Table key="table" />
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
      <ITouch centerVertical paddingVertical horizontal>
        <IIcon xml={Icons.BACK} size={24} fill={Colors.BROWN} />
        <IText>Back</IText>
      </ITouch>
      <ILine height={10} />
      <IView>
        <LineChartComponent />
      </IView>
    </IView>
  );
}

function PairDetail() {
  return (
    <IView padding marginTop={20}>
      <IView horizontal spaceBetween centerVertical>
        <IText fontSize={FONTSIZE_SUPER} fontWeight="medium">
          Pair Details
        </IText>
      </IView>
      <ILine height={10} />
      <IView horizontal>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>Total liquidity</IText>
          <IView horizontal marginTop={4} centerVertical>
            <IText fontWeight="medium" fontSize={FONTSIZE_MEDIUM}>
              $343,454,445
            </IText>
            <ILine width={10} />
            <IText color={Colors.BEAR}>-0.71%</IText>
          </IView>
        </IView>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>Volume (24hrs)</IText>
          <IView horizontal marginTop={4} centerVertical>
            <IText fontWeight="medium" fontSize={FONTSIZE_MEDIUM}>
              $123.544
            </IText>
            <ILine width={10} />
            <IText color={Colors.BULL}>+0.71%</IText>
          </IView>
        </IView>
      </IView>
      <ILine height={10} />
      <IView horizontal>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>Fee (24hrs)</IText>
          <IView horizontal marginTop={4} centerVertical>
            <IText fontWeight="medium" fontSize={FONTSIZE_MEDIUM}>
              $343.45
            </IText>
            <ILine width={10} />
            <IText color={Colors.BEAR}>-0.71%</IText>
          </IView>
        </IView>
        <IView fit></IView>
      </IView>
    </IView>
  );
}

function Tokens() {
  return (
    <IView margin>
      <IText fontSize={FONTSIZE_MEDIUM} fontWeight="medium">
        Tokens
      </IText>
      <ILine height={10} />
      <IView borderRadius style={{borderWidth: 1, borderColor: Colors.LINE}}>
        <IView padding horizontal centerVertical>
          <IIcon xml={Icons.DINO} size={24} />
          <ILine width={10} />
          <IView fit>
            <IText>1 DINO = 0.23467 ETH ($496.34)</IText>
          </IView>
          <ILine width={10} />
          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY}>View tokens</IText>
            <ILine width={4} />
            <IIcon xml={Icons.NEXT} size={16} fill={Colors.SECONDARY} />
          </IView>
        </IView>
        <ILine height={1} color={Colors.LINE} />
        <IView padding horizontal centerVertical>
          <IIcon xml={Icons.DINO} size={24} />
          <ILine width={10} />
          <IView fit>
            <IText>1 DINO = 0.23467 ETH ($496.34)</IText>
          </IView>
          <ILine width={10} />
          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY}>View tokens</IText>
            <ILine width={4} />
            <IIcon xml={Icons.NEXT} size={16} fill={Colors.SECONDARY} />
          </IView>
        </IView>
      </IView>
    </IView>
  );
}

function Liquidity() {
  return (
    <IView margin>
      <IText fontSize={FONTSIZE_MEDIUM} fontWeight="medium">
        Underlying Liquidity
      </IText>
      <ILine height={10} />
      <IView borderRadius style={{borderWidth: 1, borderColor: Colors.LINE}}>
        <IView padding horizontal centerVertical>
          <IIcon xml={Icons.DINO} size={24} />
          <ILine width={10} />
          <IView fit>
            <IText>1 DINO = 0.23467 ETH ($496.34)</IText>
          </IView>
          <ILine width={10} />
          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY}>View tokens</IText>
            <ILine width={4} />
            <IIcon xml={Icons.NEXT} size={16} fill={Colors.SECONDARY} />
          </IView>
        </IView>
        <ILine height={1} color={Colors.LINE} />
        <IView padding horizontal centerVertical>
          <IIcon xml={Icons.DINO} size={24} />
          <ILine width={10} />
          <IView fit>
            <IText>1 DINO = 0.23467 ETH ($496.34)</IText>
          </IView>
          <ILine width={10} />
          <IView horizontal centerVertical>
            <IText color={Colors.SECONDARY}>View tokens</IText>
            <ILine width={4} />
            <IIcon xml={Icons.NEXT} size={16} fill={Colors.SECONDARY} />
          </IView>
        </IView>
      </IView>
    </IView>
  );
}

function Table() {
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(0);
  return (
    <IView margin marginTop={20}>
      <IView horizontal center>
        {['All', 'Swaps', 'Adds', 'Removes'].map((item, index) => {
          const active = selected === index;
          return (
            <ITouch
              paddingHorizontal
              onPress={() => {
                setSelected(index);
              }}>
              <IText color={active ? Colors.BLACK : Colors.TEXT_GRAY}>
                {item}
              </IText>
              <ILine height={4} />
              <IView
                width={'100%'}
                height={2}
                backgroundColor={active ? Colors.SECONDARY : 'transparent'}
              />
            </ITouch>
          );
        })}
      </IView>
      <ILine height={10} />
      <IView
        backgroundColor={Colors.PRIMARY}
        horizontal
        padding
        style={{
          borderTopLeftRadius: RADIUS_ORIGIN,
          borderTopRightRadius: RADIUS_ORIGIN,
        }}>
        <IView fit={1.5}></IView>
        <IView fit center>
          <IText fontSize={FONTSIZE_SMALL} color={Colors.PINK}>
            Total value
          </IText>
        </IView>
        <IView fit center>
          <IText fontSize={FONTSIZE_SMALL} color={Colors.PINK}>
            Time
          </IText>
        </IView>
      </IView>
      {[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, index) => {
        return <Item key={index} />;
      })}

      <ILine height={10} />
      <IView horizontal center>
        <IText color={Colors.TEXT_GRAY}>page</IText>
        <ILine width={20} />
        {[{}, {}, {}, {}, {}, {}].map((item, index) => {
          const active = page === index ? true : false;
          return (
            <ITouch
              key={index}
              marginHorizontal={2}
              style={{minWidth: 32, minHeight: 32, borderRadius: RADIUS_ROUND}}
              backgroundColor={active ? Colors.SECONDARY : Colors.LIGHT_GRAY}
              center
              onPress={() => {
                setPage(index);
              }}>
              <IText
                fontSize={FONTSIZE_SMALL}
                color={Colors.WHITE}
                fontWeight="medium">
                {index + 1}
              </IText>
            </ITouch>
          );
        })}
      </IView>
    </IView>
  );
}

function Item() {
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <IView
      style={{
        borderTopLeftRadius: RADIUS_ORIGIN,
        borderTopRightRadius: RADIUS_ORIGIN,
        borderBottomWidth: 1,
        borderColor: Colors.LINE,
      }}>
      <IView horizontal padding centerVertical>
        <IView fit={1.5}>
          <IText color={Colors.SECONDARY} fontSize={FONTSIZE_SMALL}>
            Add ETH and DINO
          </IText>
        </IView>
        <IView fit center>
          <IText fontSize={FONTSIZE_SMALL}>$20.17</IText>
        </IView>
        <IView fit centerVertical horizontal spaceBetween>
          <IText fontSize={FONTSIZE_SMALL}>10 days ago</IText>
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
        <IView padding backgroundColor={Colors.PINK}>
          <IView horizontal spaceBetween>
            <IText color={Colors.PRIMARY} fontSize={FONTSIZE_SMALL}>
              Token Amount
            </IText>
            <IText
              color={Colors.PRIMARY}
              fontWeight="bold"
              fontSize={FONTSIZE_SMALL}>
              0.00045 ETH
            </IText>
          </IView>
          <ILine height={10} />
          <IView horizontal spaceBetween>
            <IText color={Colors.PRIMARY} fontSize={FONTSIZE_SMALL}>
              Token Amount
            </IText>
            <IText
              color={Colors.PRIMARY}
              fontWeight="bold"
              fontSize={FONTSIZE_SMALL}>
              0.0034 DINO
            </IText>
          </IView>
          <ILine height={10} />

          <IView horizontal spaceBetween>
            <IText color={Colors.PRIMARY} fontSize={FONTSIZE_SMALL}>
              Account
            </IText>
            <IText
              width={100}
              numberOfLines={1}
              color={Colors.SECONDARY}
              fontWeight="bold"
              fontSize={FONTSIZE_SMALL}
              ellipsizeMode="middle">
              0xA33fC4B4953f96B64a3444hf7BfD31D5E62F053A
            </IText>
          </IView>
        </IView>
      ) : null}
    </IView>
  );
}
