import React from 'react'

export const Authorisation = () => {
  return (
    <div>
      <div>
        <h2>Authorisation</h2>
        <p>
          Please enter your username and password to access the application.
        </p>
      </div>
      <form>
        <label>
          User name:
          <input type="text" name="userName" />
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
