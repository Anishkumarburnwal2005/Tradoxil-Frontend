import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonIcon from "@mui/icons-material/Person";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import PaidIcon from "@mui/icons-material/Paid";

function CreateTicket() {
  return (
    <div className="container">
      <h5 style={{ color: "#424242" }}>
        To create a ticket, select a relevant topic
      </h5>

      <div className="row mt-5">
        <div className="col">
          <p>
            <a href="/" className="ctMainLink">
              <AddCircleOutlineIcon sx={{ fontSize: 18 }} /> &nbsp; Account
              Opening
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Resident individual
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Minor
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Non Resident Indian (NRI)
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Company, Partnership, HUF and LLP
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Glossary
            </a>
          </p>
        </div>

        <div className="col">
          <p>
            <a href="/" className="ctMainLink">
              <PersonIcon sx={{ fontSize: 18 }} /> &nbsp; Your Zerodha Account
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Your Profile
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Account modification
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Nomination
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Transfer and conversion of securities
            </a>
          </p>
        </div>
        <div className="col">
          <p>
            <a href="/" className="ctMainLink">
              <GraphicEqIcon sx={{ fontSize: 18 }} /> &nbsp; Kite
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              IPO
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Trading FAQs
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Margin Trading Facility (MTF) and Margins
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Charts and orders
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              Alerts and Nudges
            </a>
          </p>

          <p className="pMainLink">
            <a href="/" className="ct2ndLink">
              General
            </a>
          </p>
        </div>

        <div className="row mt-5">
          <div className="col">
            <p>
              <a href="/" className="ctMainLink">
                <HomeRepairServiceIcon sx={{ fontSize: 18 }} /> &nbsp; Funds
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Add money
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Withdraw money
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Add bank accounts
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                eMandates
              </a>
            </p>
          </div>

          <div className="col">
            <p>
              <a href="/" className="ctMainLink">
                <PermDataSettingIcon sx={{ fontSize: 18 }} /> &nbsp; Console
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Portfolio
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Corporate actions
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Funds statement
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Reports
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Profile
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Segments
              </a>
            </p>
          </div>

          <div className="col">
            <p>
              <a className="ctMainLink">
                <PaidIcon sx={{ fontSize: 18 }} /> &nbsp; Coin
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Mutual funds
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                National Pension Scheme (NPS)
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Fixed Deposit (FD)
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Features on Coin
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                Payments and Orders
              </a>
            </p>

            <p className="pMainLink">
              <a href="/" className="ct2ndLink">
                General
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
