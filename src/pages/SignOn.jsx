import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../authentication/firebase';
import {
  Form,
  Input,
  Button,
  Typography,
  Card,
  Modal,
} from 'antd';

const SignOn = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [registerForm] = Form.useForm();

  const handleSignIn = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignUp = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsModalVisible(false);
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', width: '100vw', paddingTop: '8rem' }}>
      <Card style={{ width: 500 }}>
        <Typography.Title level={3}>Please Sign In</Typography.Title>
        <Form form={form} onFinish={handleSignIn} layout="horizontal">
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <Typography.Text type="secondary">
          Don’t have an account?{' '}
          <Button type="link" onClick={() => setIsModalVisible(true)} style={{ padding: '0rem' }}>
            Register here
          </Button>
        </Typography.Text>
      </Card>

      {/* Register Modal */}
      <Modal
        title="Create an Account"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={registerForm} onFinish={handleSignUp} layout="horizontal">
          <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, min: 6 }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SignOn;