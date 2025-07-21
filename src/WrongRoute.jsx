import Alert from "@mui/material/Alert";

export default function WrongRoute() {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "rgba(13, 187, 240, 1)",
        paddingTop: "1rem",
      }}
    >
      <div
        className="alert alert-warning fw-semibold"
        style={{
          backgroundColor: "#ffc2c2",
          width: "50%",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "21rem",
        }}
        role="alert"
      >
        <h2>Not Found, Please try again!</h2>
      </div>

      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDV5NTMyZmc0eTdtOXYzN3dueDZsbHN6ZDlkbXJtb3F0eXNtNDQybyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9dgnO4jts7kmsFcSPq/giphy.webp"
        alt="wrongRoute_img"
        style={{ height: "30rem", width: "35rem" }}
      />
    </div>
  );
}
