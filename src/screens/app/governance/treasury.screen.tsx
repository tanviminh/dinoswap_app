import {IIcon, ILine, IList, IText, ITouch, IView} from 'components';
import {ALERT_SCREEN, OPTION_SCREEN} from 'navigations/routes';
import React, {useState} from 'react';
import {FooterComponent} from 'screens/components/footer.component';
import {Colors} from 'styles';
import {
  FONTSIZE_LARGE,
  FONTSIZE_MEDIUM,
  FONTSIZE_SMALL,
  RADIUS_ROUND,
  SHADOW,
} from 'styles/typography';
import {NavigationUtils} from 'utils';
import {Icons} from '../../../assets';

export function TreasuryScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        ListHeaderComponent={() => {
          return <Header />;
        }}
        refreshing={false}
        onRefresh={() => {}}
        renderItem={data => {
          return <Item data={data} />;
        }}
        ItemSeparatorComponent={() => {
          return (
            <ILine
              style={{marginVertical: 10}}
              height={1}
              color={Colors.LINE}
            />
          );
        }}
        ListFooterComponent={() => {
          return (
            <IView padding>
              <FooterComponent />
            </IView>
          );
        }}></IList>
    </IView>
  );
}

function Header() {
  return (
    <IView padding>
      <IText
        fontWeight="medium"
        fontSize={FONTSIZE_LARGE}
        color={Colors.PRIMARY}>
        Multisignature Commission
      </IText>
      <ILine height={10} />
      <IText fontWeight="medium">The path to decentralization</IText>

      <IText fontWeight="medium" color={Colors.GRAY}>
        9 signers were selected from 50 candidates. 7 out of 9 signers must
        approve action items from proposals. The signing committee can also fast
        track proposals given timely necessity...
      </IText>
      <ILine height={10} />
      <IView>
        <IText color={Colors.LIGHT_BROWN}>Sort by</IText>
        <ILine height={10} />
        <ITouch
          horizontal
          borderRadius={RADIUS_ROUND}
          padding
          elevation={2}
          style={{
            borderWidth: 1,
            borderColor: Colors.LINE,
            overflow: 'hidden',
            backgroundColor: Colors.WHITE,
          }}
          onPress={() => {
            NavigationUtils.navigate(OPTION_SCREEN);
          }}>
          <IView fit horizontal>
            <IText fontWeight="medium">Team</IText>
            <ILine width={4} />
            <IText fontWeight="medium" color={Colors.BROWN}>
              (5)
            </IText>
          </IView>
          <ITouch>
            <IIcon xml={Icons.DOWN} size={16} fill={Colors.SECONDARY} />
          </ITouch>
        </ITouch>
      </IView>
    </IView>
  );
}

function Item(props: any) {
  const {index} = props.data;
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <IView
      backgroundColor={Colors.WHITE}
      margin
      style={{
        overflow: 'hidden',
      }}>
      <IView>
        <IView horizontal centerVertical>
          <IView horizontal>
            <IText
              fontSize={FONTSIZE_MEDIUM}
              color={Colors.BROWN}
              fontWeight="bold">
              #{index + 1}
            </IText>
            <ILine width={20} />
          </IView>
          <IView horizontal fit={2}>
            <IIcon xml={Icons.AVATAR} size={32} />
            <ILine width={10} />

            <IView fit>
              <IText>@SBF_Alameda</IText>
              <IText fontSize={FONTSIZE_SMALL} color={Colors.TEXT_GRAY}>
                (Contributor)
              </IText>
            </IView>
          </IView>

          <IView fit>
            <IView
              fit
              height={4}
              backgroundColor={Colors.BEAR}
              borderRadius={RADIUS_ROUND}
              style={{overflow: 'hidden'}}>
              <IView
                elevation={SHADOW}
                height={'100%'}
                width={index * 10 + '%'}
                backgroundColor={Colors.BULL}
                borderRadius={RADIUS_ROUND}></IView>
            </IView>
            <ILine height={10} />
            <IText fontSize={FONTSIZE_SMALL} color={Colors.BULL}>
              95.5% Yes
            </IText>
            <IText fontSize={FONTSIZE_SMALL} color={Colors.BEAR}>
              4.5% No
            </IText>
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
        <ILine height={10} />
      </IView>
      {expand ? (
        <IView backgroundColor={Colors.PINK} padding horizontal>
          <IView fit>
            <IText
              fontWeight="medium"
              fontSize={FONTSIZE_MEDIUM}
              color={Colors.BULL}>
              Yes
            </IText>
            <ILine height={4} />
            <IText fontWeight="medium">245,565</IText>
            <IText fontSize={FONTSIZE_SMALL} color={Colors.TEXT_GRAY}>
              245 wallets
            </IText>
          </IView>
          <IView fit>
            <IText
              fontWeight="medium"
              fontSize={FONTSIZE_MEDIUM}
              color={Colors.BEAR}>
              No
            </IText>
            <ILine height={4} />
            <IText fontWeight="medium">5,565</IText>
            <IText fontSize={FONTSIZE_SMALL} color={Colors.TEXT_GRAY}>
              12 wallets
            </IText>
          </IView>
          <IView fit style={{justifyContent: 'flex-end'}}>
            <ITouch horizontal center>
              <IText fontWeight="medium" color={Colors.SECONDARY}>
                Snapshot
              </IText>
              <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
            </ITouch>
          </IView>
        </IView>
      ) : null}
    </IView>
  );
}
