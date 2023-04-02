import React from 'react';

function Register() {
  return (
    <form>
      <h2>新規登録</h2>
      <label>
        ユーザー名:
        <input type="text" name="username" />
      </label>
      <label>
        パスワード:
        <input type="password" name="password" />
      </label>
      <button type="submit">登録する</button>
    </form>
  );
}

export default Register;