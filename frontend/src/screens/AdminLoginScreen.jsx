import { useState , useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { adminLoginMutation } from '../slices/usersApiSlice'
import { setAdminCredentials } from '../slices/adminslice'
import {toast} from 'react-toastify'

const AdminLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const navigate = useNavigate();
 const dispatch = useDispatch();
 
 const [adminlogin, {isLoading}] = adminLoginMutation();

 const {adminInfo} = useSelector((state) => state.auth);
  
 useEffect(() => {
  if (adminInfo) {
    navigate('/admin');
}
 },[navigate, adminInfo]);
 
 const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await adminlogin({email,password}).unwrap();
      dispatch(setAdminCredentials({...res}))
      navigate('/admin')
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
          New Customer? <Link to={`/adminregister`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default AdminLoginScreen;