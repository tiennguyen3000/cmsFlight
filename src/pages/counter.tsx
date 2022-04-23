import React from 'react';
import { RootState } from 'service/app/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
} from 'service/app/features/counter/counterSlice';
import { userSlice } from 'service/app/store/user';
import { useRouter } from 'next/router';

const href = 'flights/vi';
const Counter = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const router = useRouter()
  const style = {
    marginRight: 10,
    color: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e) => {
    e.preventDefault();
    let a = {
      name: 'test',
      age: 'test',
      department: 'test',

    };
    let b = window.btoa(JSON.stringify(a));
    router.push(`${href}?data=${b}`);
  }

  const handleConfirm = () => {
    // eslint-disable-next-line
    console.log(user);
  };

  const handleUpdate = () => {
    dispatch(
      userSlice.actions.updateUser({
        name: 'name',
        age: 28,
        email: 'email',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        history: [],
      }),
    );
  };

  const handleReset = () => {
    dispatch(userSlice.actions.reset());
  };

  const handleAddHistory = () => {
    dispatch(userSlice.actions.addHistory('push'));
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button type="button" onClick={handleConfirm}>
          確認
        </button>
        <button type="button" onClick={handleUpdate}>
          update
        </button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
        <button type="button" onClick={handleAddHistory}>
          addHistory
        </button>
      </div>
      <a href={href} onClick={handleClick} style={style} >
        Hello
      </a>

    </div>
  );
};

export default Counter;
