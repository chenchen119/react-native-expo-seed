import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base'
import { TextInput, Text } from '@shoutem/ui'

const defaultProps = {
  secureTextEntry: false,
  multiline: false,
};

const FormInput = (props) => {
  const {
    input: { value, onChange, onBlur },
    meta: { touched, error },
    placeholder,
    secureTextEntry,
    multiline,
    icon,
    ...otherProps
  } = props;

  return (
    <View>
      {/* <TextInput
        style={{opacity: 0.7}}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          onChangeText={value => onChange(value)}
          value={value}
          {...otherProps}
      /> */}
      <Form>
        <Item>
          <Icon active name={icon} />
          <Input
            multiline={multiline}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            onChangeText={value => onChange(value)}
            value={value}
            {...otherProps}
          />
        </Item>
      </Form>
      <View>
        {touched && error ?
            <Text styleName="bright h-center bold">{error}</Text> :
            <Text style={{opacity: 0}}>test</Text>
        }
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

FormInput.defaultProps = defaultProps;

export { FormInput }
