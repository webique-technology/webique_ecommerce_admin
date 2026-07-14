import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { AUTH } from "../../config/auth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const location = useLocation();
  const loginType = location.pathname === AUTH.ROUTES.SUPER_ADMIN_LOGIN
    ? AUTH.SUPER_ADMIN
    : AUTH.STORE_ADMIN;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      await login(loginType, formData);

      navigate("/dashboard");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
        "Invalid email or password."
      );
    }
  };

  const goToForgotPassword = () => {
    navigate("/forget-password"); // ✅ redirect to login
  };

  return (

    <div className="bg-background font-body-md text-on-background min-h-screen flex flex-col antialiased">
      <main className="flex h-screen w-full items-center justify-center">

        {/* Header */}


        {/* Card */}
        <div className="relative z-10 w-full max-w-[480px]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <span className="material-symbols-outlined text-on-primary text-2xl" data-icon="admin_panel_settings">admin_panel_settings</span>
            </div>

            <h1 className="text-primary font-h1 tracking-tight">AdminPanel</h1>
            <p className="text-on-surface-variant font-body-sm mt-1">Ecommerce Management Console</p>
          </div>
          <div className="block-form space-y-5 w-full">

            <div className="mb-xl text-center">
              <h2 className="text-primary font-h2 mb-2">Welcome Back</h2>
              <p className="text-sm text-gray-500">
                Please enter your credentials to continue.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>

              {/* Username */}
              <div>
                <label className="text-primary font-label-md block">
                  Email address
                </label>

                <div className="relative mt-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    person
                  </span>

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full pl-10 pr-md py-3 bg-surface-bright border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-1">
                <div className="flex justify-between">
                  <label className="text-primary font-label-md block">
                    Password
                  </label>
                  <p className="text-xs font-bold uppercase cursor-pointer" onClick={goToForgotPassword}>Forgot password</p>
                </div>

                <div className="relative mt-1">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    lock
                  </span>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="w-full pl-10 pr-md py-3 bg-surface-bright border border-outline-variant rounded-xl font-body-md text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/5 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-0">{error}</p>
              )}


              <div className="flex items-center mt-5 gap-2">
                <input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer" id="remember" type="checkbox" />
                <label className="ml-sm text-on-surface-variant font-body-sm cursor-pointer select-none" htmlFor="remember">Remember me for 30 days</label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn-primary-packages w-full justify-center"
              >
                Sign In
              </button>


              <div className="relative py-sm">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/40"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-surface-container-lowest px-md text-outline font-label-sm">Or continue with</span>
                </div>
              </div>
              <button className="w-full bg-surface-bright border border-outline-variant text-on-surface py-3 px-md rounded-xl font-label-md hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="button">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Sign in with Google
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-gray-500">
              Need help? <span className="text-blue-500">Contact Support</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}