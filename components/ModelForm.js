import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Rating from '../components/Rating';

import { globlestyles } from '../mystyles/globleStyle';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';

export default function ModalForm({addReview}) {
  return (
    <View style={globlestyles.container}>
        
          <Formik
                 initialValues={{ title:'',  age:'', body:'', rating:'' }}

                 onSubmit={values => console.log(values)}

          >
{
    ({handleChange,values,handleSubmit,handleBlur}) =>(<View>
        
            <TextInput
            style={globlestyles.input}
            placeholder='title'
            onChange={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}

            />
            <TextInput
            keyboardType='numeric'
            placeholder='Age'
            style={globlestyles.input}
            onChange={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}

            />
            <TextInput
            multiline
            style={globlestyles.input}
            placeholder='Comment'
            onChange={handleChange('body')}
            onBlur={handleBlur('body')}
            value={values.body}

            />
            <TextInput
            keyboardType='numeric'
            placeholder='1-5'
            style={globlestyles.input}
            onChange={handleChange('rating')}
            onBlur={handleBlur('rating')}
            value={values.rating}

            />
            <Button
            title='submit'
            color='red'
            onPress={handleSubmit}
            />
        </View>
    )
}

          </Formik>
          


      <Rating/>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
