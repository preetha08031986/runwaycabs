import { useState , useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import {toast} from 'react-toastify'
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const navigate = useNavigate();
 const dispatch = useDispatch();
 
 const [login, {isLoading}] = useLoginMutation();

 const {userInfo} = useSelector((state) => state.auth);
  
 useEffect(() => {
  if (userInfo) {
    navigate('/login');
}
 },[navigate, userInfo]);
 
 const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({email,password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/')
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <FormContainer>
      <h1 className='text-center mb-4' style={{ color: 'teal' }}>
        Sign In
      </h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Row className='py-3 d-flex justify-content-center'>
        <Col xs={12} md={6} className='text-center'>
          <Button type='submit' variant='primary' className='mt-3'>
            Sign In
          </Button>
        </Col>
      </Row>
      </Form>

      <Row className='py-3 d-flex justify-content-center'>
        <Col xs={12} md={6} className='text-center'>
          New Customer? <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;