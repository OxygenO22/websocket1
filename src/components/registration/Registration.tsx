import React from 'react'

export const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      <form>
        <label>
          User name:
          <input type="text" name="userName" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
