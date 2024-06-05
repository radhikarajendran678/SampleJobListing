import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet
} from "react-native"
import { useSelector } from "react-redux";


const HeaderBar = () => {

  const appliedJob = useSelector((state) => state.jobs.jobArray)
  const [appliedItem, setAppliedItem] = useState(0);

  useEffect(() => {
    console.log("appliedJob  "+ JSON.stringify(appliedJob.jobArray))
     setAppliedItem(appliedJob.length)
  })

  return (
    <View style={styles.header}>
      <View>
        <View style={styles.circle}>
          <Text style={styles.numberstyle}>{appliedItem}</Text>
        </View>
        <Text style={styles.appliedstyle}>applied</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  numberstyle: {
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 11,
    color: '#000'
  },
  header: {
    backgroundColor: '#ADD8E6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 16 / 2,
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  appliedstyle: {
    top: -5,
    color: '#fff'
  },

});


export default HeaderBar;



