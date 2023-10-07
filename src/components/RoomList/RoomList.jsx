import React, { useEffect, useState } from 'react';
import styles from './RoomList.module.css';

import { socket } from '../../options/socket';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { useAuth } from 'hooks/auth';
import { useDispatch } from 'react-redux';
import { addFriend } from 'redux/friend/operations';

function RoomList({ isOpen, params }) {
  const [users, setUsers] = useState(0);
  const [userList, setUserList] = useState('');
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('room', ({ data: { users } }) => {
      setUsers(users.length);
      setUserList(users);
    });
  }, []);

  const handlerAddFriends = (name, avatar) => {
    const { _id } = user;
    dispatch(addFriend({ name, avatarURL: avatar, _id }));
  };

  return (
    <>
      <div className={styles.containerRoom}>
        <div className={styles.roomOnline}>
          <p className={styles.room}>Room: {params.room}</p>
          <p className={styles.users}>Users online: {users}</p>
        </div>
        <ul className={styles.roomList}>
          {userList &&
            userList.map(({ name, avatar }, i) => (
              <li key={i} className={styles.roomItem}>
                <div className={styles.userContainer}>
                  <img
                    className={styles.avatarRoom}
                    src={avatar}
                    alt="avatar"
                  />
                  <p className={styles.nameUser}>{name}</p>
                </div>
                <div className={styles.btnContainer}>
                  {user.name !== name && (
                    <button
                      className={styles.btnAdd}
                      onClick={handlerAddFriends(name, avatar)}
                    >
                      <AiOutlineUsergroupAdd />
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
      {isOpen && (
        <div className={styles.containerRoomMobile}>
          <div className={styles.roomOnlineMobile}>
            <p className={styles.roomMobile}>Room: {params.room}</p>
            <p className={styles.usersMobile}>
              Users online: {users}
            </p>
          </div>
          <ul className={styles.roomList}>
            {userList &&
              userList.map(({ name, avatar }, i) => (
                <li key={i} className={styles.roomItemMobile}>
                  <div className={styles.userContainer}>
                    <img
                      className={styles.avatarRoom}
                      src={avatar}
                      alt="avatar"
                    />
                    <p className={styles.nameMobile}>{name}</p>
                  </div>

                  <div className={styles.btnContainer}>
                    {user.name !== name && (
                      <button
                        className={styles.btnAdd}
                        onClick={handlerAddFriends(name, avatar)}
                      >
                        <AiOutlineUsergroupAdd />
                      </button>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default RoomList;
