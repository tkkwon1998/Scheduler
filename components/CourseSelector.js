import React, { useState, useEffect } from 'react';
import Course from './Course';
import { hasConflict } from '../utils/course';


import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



const CourseSelector = ({courses, view}) => {
    const [selected, setSelected] = useState([]);
  
    const toggle = course => setSelected(selected => (
      selected.includes(course) ? selected.filter(x => x !== course) : [...selected, course]
    ));
  
    return (
      <View style={styles.courseList}>
        { 
          courses.map(course => (
            <Course key={course.id} course={course} 
              select={toggle}
              isDisabled = {hasConflict(course, selected)}
              isSelected={selected.includes(course)}
              view={view}
            />
          ))
        }
      </View>
    );
  };


  const styles = StyleSheet.create({

    courseList: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    courseText:{
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    },
  });

  export default CourseSelector;