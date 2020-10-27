import React from 'react';
import { Button, TextInput, View ,Text} from 'react-native';
import { Formik } from 'formik';
import { globlestyles } from '../mystyles/globleStyle';
import * as yup from 'yup'
import MyButton from './MyButton';

const yupSchema = yup.object(
  {
    title:yup.string().required().min(4),
    body:yup.string().required().min(10),
    age:yup.string().required(),
    rating:yup.string().required()
    .test('rating-test','Rating must be from 1-5',(val) =>(
      parseInt(val)<6 && parseInt(val)>0
    ))
  }
)

export const Example = props => (
  <Formik
    initialValues={{ title: '',body:'',age:'',rating:'' }}
    onSubmit={values => props.addReview(values)}
    validationSchema={yupSchema}
  >
    {({ handleChange, handleBlur, handleSubmit, values ,errors,touched}) => (
      <View>
        <TextInput
        style={globlestyles.input}
          onChangeText={handleChange('title')}
          placeholder='title'
          onBlur={handleBlur('title')}
          value={values.title}
        />
        <Text style={globlestyles.mytext} >{touched.title && errors.title}</Text>
        <TextInput
        multiline
        style={globlestyles.input}
          onChangeText={handleChange('body')}
          placeholder='body'
          onBlur={handleBlur('body')}
          value={values.body}
        />
         <Text style={globlestyles.mytext} >{touched.body && errors.body}</Text>
        <TextInput
        keyboardType='numeric'
        style={globlestyles.input}
        placeholder='Age'
          onChangeText={handleChange('age')}
          onChange={handleChange('age')}
          onBlur={handleBlur('age')}
          value={values.age}
        />
         <Text style={globlestyles.mytext} >{touched.age && errors.age}</Text>
        <TextInput
        keyboardType='numeric'
        style={globlestyles.input}
        placeholder='1-5'
          onChangeText={handleChange('rating')}
          onChange={handleChange('rating')}
          onBlur={handleBlur('rating')}
          value={values.rating}
        />
         <Text style={globlestyles.mytext} >{touched.rating && errors.rating}</Text>
   
   
         <MyButton  onPress={handleSubmit} text="Submit"  />
        {/* <Button onPress={handleSubmit} title="Submit" /> */}
      </View>
    )}
  </Formik>
);