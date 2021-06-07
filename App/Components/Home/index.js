import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {getUsers} from '../../Redux/Actions/userAction';
import UserList from './userList';
import {Colors} from '../../Utils/theme';
import {CommonStyles} from '../../Utils/styles';

const {height, width} = Dimensions.get('window');

function Homecontainer(props) {
  const {navigation} = props;
  useEffect(() => {
    //Prevent re-calling when props available
    if (!props.userlist.user) props.fecthUsers();
  }, []);

  const BulletText = ({text}) => (
    <Text style={[CommonStyles.normalText, {marginTop: 5}]}> • {text}</Text>
  );

  return (
    <View style={{flex: 1, backgroundColor: Colors.PRIMARY}}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <Text style={CommonStyles.boldText}>Welcome to React Native </Text>
        </View>

        <View style={styles.featureContainer}>
          <BulletText text="React Native latest 0.64" />
          <BulletText text="React Navigation 5" />
          <BulletText text="Redux implemented" />
          <BulletText text="Redux Thunk" />
          <BulletText text="Network calling function with axios" />
          <BulletText text="React Hooks & Redux using hooks" />
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Button
              title="Navigate to profile"
              onPress={() => navigation.navigate('Profile')}
            />
            <View style={styles.sectionContainer}>
              <UserList
                data={props.userlist.user ? props.userlist.user.data : []}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

mapStateToProps = state => {
  return {
    userlist: state.userdata,
  };
};

mapDispatchToProps = dispatch => {
  return {
    fecthUsers: () => {
      dispatch(getUsers());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homecontainer);

const styles = StyleSheet.create({
  scrollView: {
    height,
    backgroundColor: Colors.PRIMARY,
  },
  container: {
    alignItems: 'center',
    paddingVertical: height * 0.04,
    backgroundColor: Colors.PRIMARY,
  },
  featureContainer: {
    marginHorizontal: width * 0.05,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
    padding: 10,
  },
  body: {
    backgroundColor: Colors.PRIMARY,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
