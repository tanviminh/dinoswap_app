import {Linking} from 'react-native';
import {InAppBrowser} from 'react-native-inappbrowser-reborn';
import {Colors} from 'styles';

async function openLink(url: string) {
  try {
    if (await InAppBrowser.isAvailable()) {
      const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'close',
        preferredBarTintColor: Colors.PRIMARY,
        preferredControlTintColor: Colors.WHITE,
        readerMode: true,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,

        // Android Properties
        showTitle: false,
        toolbarColor: Colors.PRIMARY,
        secondaryToolbarColor: Colors.SECONDARY,
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        // animations: {
        //   startEnter: 'slide_in_right',
        //   startExit: 'slide_out_left',
        //   endEnter: 'slide_in_left',
        //   endExit: 'slide_out_right',
        // },
        // headers: {
        //   'my-custom-header': 'my custom header value',
        // },
      });
    } else Linking.openURL(url);
  } catch (error) {}
}

export {openLink};
