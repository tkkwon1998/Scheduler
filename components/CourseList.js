import Course from './Course';
import TermSelector from './TermSelector';
import React, { useState, useEffect } from 'react';
import CourseSelector from './CourseSelector';

import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

const CourseList = ({courses, view}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    
    return (
        <View>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>

      <ScrollView contentContainerStyle={styles.courseList}>
        <CourseSelector courses={termCourses} view = {view}/>
      </ScrollView>
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

export default CourseList;
