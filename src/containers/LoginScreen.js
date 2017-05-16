import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { View } from 'react-native';
import { FormInput } from '../components/FormInput';
import { Button, Text } from '@shoutem/ui';
import { connect } from 'react-redux';
import  loginActions  from '../redux/LoginRedux';
import { Container, Content, Form, Item, Input, Label, Icon } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';

class LoginForm extends Component {

  renderButton(){

    return(
      <View>
        <Button onPress={this.props.handleSubmit(data => this.onSubmit(data))}>
          <Text>LOG IN</Text>
        </Button>
      </View>
    )

  }

  onSubmit(data) {
    //const {email, password } = data
    this.props.attemptLogin(data)
  }

  render(){
   return(
     <Container>
       <Content>
         <View>
           <Field
            name="email"
            component={FormInput}
            placeholder="Email"
            icon="person"
            autoCapitalize={'none'}
          />
          <View style={{ margin: 5 }}></View>
          <Field
            name="password"
            component={FormInput}
            placeholder="Password"
            icon="lock"
            secureTextEntry
          />

          {this.renderButton()}

         </View>
         <Form>
           <Item>
             <Icon active name='person' />
             <Input name="email" placeholder="Email" />
           </Item>
           <Item>
             <Icon active name='lock' />
             <Input placeholder="Password" secureTextEntry={true} />
           </Item>
         </Form>
       </Content>
     </Container>
   );
  }
}

const validate = (props) => {
  const errors = {};
  const fields = ['email', 'password'];

  fields.forEach((f) => {
    if (!(f in props)) {
      errors[f] = `${f} is required`;
    }
  });


  if (props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
    errors.email = 'please provide valid email';
  }

  if (props.password && props.password.length < 6) {
    errors.password = 'minimum 6 characters';
  }

  return errors;
};

const LoginScreen = reduxForm({ form: 'login', validate: validate, })(LoginForm);


 const mapStateToProps = (state) => {
   return {
     fetching: state.login.fetching
   }
 }

 const mapDispatchToProps = (dispatch) => {
   return {

     attemptLogin: ({email, password}) => {
       dispatch(loginActions.loginRequest(email, password))
     }
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
