import {IIcon, ILine, IList, IText, ITouch, IView} from 'components';
import React from 'react';
import {FooterComponent} from 'screens/components/footer.component';
import {Colors} from 'styles';
import {FONTSIZE_LARGE, FONTSIZE_SMALL, RADIUS_ROUND} from 'styles/typography';
import {Icons} from '../../../assets';

export function TimelookScreen() {
  return (
    <IView fit backgroundColor={Colors.WHITE}>
      <IList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        ListHeaderComponent={() => {
          return (
            <IView padding>
              <IText fontWeight="bold">Security with Transparency</IText>
              <ILine height={10} />
              <IText fontWeight="medium" color={Colors.GRAY}>
                There is a 48 hour timelock on any updates performed on the
                Sushiswap smart contract. After functions exit the timelock they
                can be executed with 3 out of 5 team multisignatures.
              </IText>
              <ILine height={10} />

              <IView horizontal centerVertical>
                <IText
                  color={Colors.SECONDARY}
                  fontWeight="medium"
                  textAlignCenter>
                  Learn more
                </IText>
                <ILine width={10} />
                <IIcon xml={Icons.LINK} size={16} fill={Colors.SECONDARY} />
              </IView>
            </IView>
          );
        }}
        refreshing={false}
        onRefresh={() => {}}
        renderItem={() => {
          return <Item />;
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

function Item() {
  return (
    <IView padding>
      <IText
        color={Colors.PRIMARY}
        fontWeight="medium"
        fontSize={FONTSIZE_LARGE}>
        MasterChef
      </IText>
      <IText color={Colors.TEXT_GRAY} fontSize={FONTSIZE_SMALL}>
        unlocks in in 3 hours
      </IText>
      <ILine height={10} />
      <IView horizontal>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>Created</IText>
          <IText fontWeight="medium" color={Colors.PRIMARY}>
            {new Date().toUTCString()}
          </IText>
        </IView>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>End</IText>
          <IText fontWeight="medium" color={Colors.PRIMARY}>
            {new Date().toUTCString()}
          </IText>
        </IView>
        <IView fit>
          <IText color={Colors.TEXT_GRAY}>Function</IText>
          <IText fontWeight="medium" color={Colors.PRIMARY}>
            set(uint256,uint256,bool)
          </IText>
        </IView>
      </IView>
      <ILine height={10} />

      <IView>
        <IText color={Colors.TEXT_GRAY}>Data</IText>
        <IText numberOfLines={1} fontWeight="medium" color={Colors.PRIMARY}>
          0x000000000000000000000000000000000000000000000000000000000000008400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
        </IText>
      </IView>

      <ITouch
        style={{position: 'absolute', right: 10, top: 10}}
        borderRadius={RADIUS_ROUND}
        paddingVertical={4}
        paddingHorizontal={12}
        backgroundColor={Colors.PINK}>
        <IText color={Colors.BROWN} fontSize={FONTSIZE_SMALL}>
          Pending
        </IText>
      </ITouch>
    </IView>
  );
}
