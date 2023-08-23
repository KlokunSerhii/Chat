import React, { useState } from 'react';
import {
  ButtonSubmit,
  Div,
  Input,
  Form,
  IconUser,
  IconPassword,
  Title,
  Img
} from './SigningChatForm.styled';
import { Link } from 'react-router-dom';
import { useAuth } from '../../huks/auth';

const FIELDS = {
  NAME: 'name',
  ROOM: 'room',
};

function SigningChatForm() {
  const { NAME, ROOM } = FIELDS;
  const { user } = useAuth();

  const [values, setValues] = useState({
    [NAME]: '',
    [ROOM]: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = e => {
    if (!values[ROOM]) e.preventDefault();
  };

  return (
    <Div>
      <Title>Join</Title>
      <Img src={user.avatarURL} alt="avatar" />
      <Form>
        <Input
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="enter name"
          autoComplete="off"
          disabled
          required
        />
        <IconUser />
        <Input
          type="text"
          value={values[ROOM]}
          name="room"
          onChange={handleChange}
          placeholder="enter RoomID"
          autoComplete="off"
          required
        />
        <IconPassword />
        <Link
          to={`/chat?name=${user.name}&room=${values[ROOM]}&avatar=${user.avatarURL}`}
        >
          <ButtonSubmit type="submit" onClick={handleClick}>
            Join
          </ButtonSubmit>
        </Link>
      </Form>
    </Div>
  );
}

export default SigningChatForm;
