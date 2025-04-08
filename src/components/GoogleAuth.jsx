import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleAuth = ({ type }) => {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/auth/google`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credential: credentialResponse.credential }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        // Store user data if needed
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(
          `${type === "login" ? "Logged in" : "Registered"} successfully`
        );
        navigate("/");
      } else {
        throw new Error(data.message || "Authentication failed");
      }
    } catch (error) {
      toast.error(error.message);
      console.error("Google auth error:", error);
    }
  };

  const handleError = () => {
    toast.error("Google authentication failed");
    console.error("Google authentication failed");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            useOneTap
            text={type === "login" ? "continue_with" : "signup_with"}
            shape="rectangular"
            theme="outline"
            size="large"
            width="100%"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
