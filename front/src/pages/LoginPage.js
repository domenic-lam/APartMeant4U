import "../styles/userPage.css";

export default function LoginPage() {
  return (
    <div className="userPage" id="login">
      <form action="/login" method="post">
        <div>
          <label>
            Username: <input type="text" name="username" id="username"/>
          </label>
        </div>
        <div>
          <label>
            Password: <input type="password" name="password" id="password"/>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}