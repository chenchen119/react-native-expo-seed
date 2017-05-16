import React from 'react'
import { DrawerItems } from 'react-navigation';
import { View } from 'react-native'
import styles from './styles/DrawerStyles'
import { FontAwesome } from '@expo/vector-icons';


const DrawerContentComponent = (props) => (
  <View style={styles.container}>
    {/* <Divider />
    <View>
      <Row styleName="small" style={{ backgroundColor: 'transparent' }}>
          <Icon name="comment" style={{ color: 'white' }}/>
          <Text style={{ color: 'white' }}>Notifications</Text>
          <Icon styleName="disclosure" name="right-arrow" style={{ color: 'white' }} />
      </Row>
    </View> */}
    {/* <View style={styles.textWithIcon}>
        <View style={styles.withIcon}>
            <FontAwesome
                style={styles.iconWithText}
                name="bell"
                color="white"
                size={20}
            />
            <Text style={styles.text}>My Notifications</Text>
        </View>
        <FontAwesome
            style={styles.rightIcon}
            name="angle-right"
            color="white"
            size={25}
        />
    </View> */}
    <DrawerItems {...props} />
  </View>
);

export default DrawerContentComponent
