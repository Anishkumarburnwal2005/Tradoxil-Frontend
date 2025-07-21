import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./footer.css";

function Footer() {
  return (
    <div className="mt-5 mb-5 footer">
      <div className="row">
        <div className="col">
          <img src="/images/logo.svg" alt="logo_img" style={{ width: "60%" }} />
          <p className="text-muted mt-3">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div>
            <XIcon className="footer_icon" />
            <FacebookIcon className="footer_icon" />
            <InstagramIcon className="footer_icon" />
            <LinkedInIcon className="footer_icon" />
          </div>
          <hr />
          <div>
            <YouTubeIcon className="footer_icon" />
            <WhatsAppIcon className="footer_icon" />
            <TelegramIcon className="footer_icon" />
          </div>
        </div>
        <div className="col footer_docs">
          <h2 className="fs-5">Support</h2>
          <a href="/" className="footer_link">
            Contact us
          </a>
          <br />
          <a href="/" className="footer_link">
            Support portal
          </a>
          <br />
          <a href="/" className="footer_link">
            How to file a complaint?
          </a>
          <br />
          <a href="/" className="footer_link">
            Status of your complaints
          </a>
          <br />
          <a href="/" className="footer_link">
            Bulletin
          </a>
          <br />
          <a href="/" className="footer_link">
            Circular
          </a>
          <br />
          <a href="/" className="footer_link">
            Z-Connect blog
          </a>
          <br />
          <a href="/" className="footer_link">
            Downloads
          </a>
        </div>

        <div className="col">
          <h2 className="fs-5">Company</h2>

          <a href="/" className="footer_link">
            About
          </a>
          <br />
          <a href="/" className="footer_link">
            Philosophy
          </a>
          <br />
          <a href="/" className="footer_link">
            Press & media
          </a>
          <br />
          <a href="/" className="footer_link">
            Careers
          </a>
          <br />
          <a href="/" className="footer_link">
            Zerodha Cares (CSR)
          </a>
          <br />
          <a href="/" className="footer_link">
            Z-Connect blog
          </a>
          <br />
          <a href="/" className="footer_link">
            Zerodha.tech
          </a>
          <br />
          <a href="/" className="footer_link">
            Open source
          </a>
        </div>

        <div className="col">
          <h2 className="fs-5">Quick links</h2>

          <a href="/" className="footer_link">
            Upcoming IPOs
          </a>
          <br />
          <a href="/" className="footer_link">
            Brokerage charges
          </a>
          <br />
          <a href="/" className="footer_link">
            Market holidays
          </a>
          <br />
          <a href="/" className="footer_link">
            Economic calendar
          </a>
          <br />
          <a href="/" className="footer_link">
            Calculators
          </a>
          <br />
          <a href="/" className="footer_link">
            Markets
          </a>
          <br />
          <a href="/" className="footer_link">
            Sectors
          </a>
        </div>
      </div>

      <div className="row mt-5 footer_text">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          &nbsp;&nbsp;
          <a href="/" className="textLink">
            complaints@zerodha.com
          </a>
          , for DP related to &nbsp;&nbsp;
          <a href="/" className="textLink">
            dp@zerodha.com
          </a>
          . Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on{" "}
          <a href="/" className="textLink">
            SEBI SCORES
          </a>
          : Register on SCORES portal. Mandatory details for filing complaints
          on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>
        <a href="/" className="textLink">
          Smart Online Dispute Resolution
        </a>
        <a href="/" className="textLink">
          Grievances Redressal Mechanism{" "}
        </a>
        <p className="mt-3">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          &nbsp;&nbsp;
          <a href="/" className="textLink">
            create a ticket here.
          </a>
        </p>
        <div className="footerBottomLinks">
          <a href="/" className="footerBottom_Link">
            Terms & conditions
          </a>
          <a href="/" className="footerBottom_Link">
            Policies & procedures
          </a>
          <a href="/" className="footerBottom_Link">
            Privacy policy
          </a>
          <a href="/" className="footerBottom_Link">
            Disclosure
          </a>
          <a href="/" className="footerBottom_Link">
            For investor's attention
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
