import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = () => {

  // const handleSubmit
  return (
    <Form className="offset-4 col-lg-4 mt-5 p-5 bg-secondary text-light rounded">
      <h2 className="text-center text-warning">Login</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2 mt-5">
      <Button variant="warning" type="submit" >
        Log in
      </Button>
      </div>
    </Form>
  );
};

export default LoginPage;
