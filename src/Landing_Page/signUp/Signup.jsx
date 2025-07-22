function Signup() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1 className="fw-medium fs-3">
          Open a free demat and trading account online
        </h1>
        <h3 className="text-muted fs-5 mt-4 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h3>

        <div
          className="row"
          style={{ marginTop: "7rem", marginBottom: "7rem" }}
        >
          <div className="col">
            <img
              src="/images/signup.png"
              alt="signUpImg"
              style={{ width: "110%" }}
            />
          </div>
          <div className="col" style={{ marginTop: "8rem" }}>
            <h2 className="fs-3 fw-medium">Signup now</h2>
            <p className="text-muted">Or track your existing application</p>
            <a className="nav-link" href="http://localhost:5174/">
              <button className="btn btn-primary">Signup</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
