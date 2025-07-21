function ChargesAccount() {
  return (
    <div className="container">
      <div className="row">
        <h3
          className="fs-4"
          style={{ color: "#424242", margin: "10rem 0 2rem 0" }}
        >
          Charges for account opening
        </h3>

        <table class="table table-striped border mb-5">
          <thead>
            <tr>
              <th scope="col" className="fs-5 fw-medium">
                Type of account
              </th>
              <th scope="col" className="fs-5 fw-medium">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td>
                <span class="free-tag">Free</span>
              </td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td>
                <span class="free-tag">Free</span>
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>

        <h3
          className="fs-4"
          style={{ color: "#424242", margin: "8rem 0 2rem 0" }}
        >
          Charges for optional value added services
        </h3>

        <table class="table table-striped border">
          <thead>
            <tr>
              <th scope="col" className="fs-5 fw-medium">
                Service
              </th>
              <th scope="col" className="fs-5 fw-medium">
                Billing Frquency
              </th>
              <th scope="col" className="fs-5 fw-medium">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tickertape</td>
              <td>Monthly / Annual</td>
              <td> Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr>
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>

            <tr>
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td> Connect: 500 | Historical: 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChargesAccount;
