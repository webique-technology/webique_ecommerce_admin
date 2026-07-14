import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background font-body-md text-on-background min-h-screen flex flex-col antialiased">

      <main className="flex-grow flex items-center justify-center p-lg">
        <div className="w-full max-w-[440px]">

          <div className="flex flex-col items-center mb-xl">
            <div
              className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-md shadow-sm">
              <span className="material-symbols-outlined text-on-primary"
                data-icon="admin_panel_settings">admin_panel_settings</span>
            </div>
            <h1 className="font-h1 text-h1 text-primary tracking-tight">AdminPanel</h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Ecommerce Management
            </p>
          </div>

          <div
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="mb-xl">
              <h2 className="font-h2 text-h2 text-primary mb-sm">Forgot Password</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Enter your email to
                receive a password reset link</p>
            </div>
            <form className="space-y-lg">

              <div className="space-y-sm">
                <label className="font-label-md text-label-md text-primary"
                  for="email">Email address</label>
                <div className="relative">
                  <div
                    className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-outline text-[20px]"
                      data-icon="mail">mail</span>
                  </div>
                  <input className="block w-full pl-[44px] pr-md py-md bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md outline-none"
                    id="email" name="email" placeholder="name@company.com"
                    required="" type="email" />
                </div>
              </div>

              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-md px-xl rounded-xl hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-sm"
                type="submit">
                <span>Send Reset Link</span>
              </button>

              <div className="text-center pt-sm">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_back
                  </span>
                  Back to Login
                </Link>
              </div>
            </form>
          </div>

          <div className="mt-2xl text-center">
            <div
              className="inline-flex items-center gap-md p-md bg-surface-container rounded-full border border-outline-variant/20">
              <div className="flex -space-x-2">
                <img className="w-6 h-6 rounded-full border-2 border-surface-container-lowest"
                  data-alt="A close-up portrait of a professional woman with a warm, confident expression in a high-end corporate setting. The lighting is soft and diffused, characteristic of a premium SaaS interface. The background is a minimalist office with clean lines and a soft bokeh effect, utilizing a sophisticated palette of neutral grays and whites consistent with the modern ecommerce admin theme."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYtOd-FDQzAEZoYfnnsoPjYxq_NkPpIuyfQWTBoPDFjFfT549lW3jkKYpe7TE_3oY_45QkPW6kU88pWPNlSgGqNsjHEts-OEuXBv8xBTfvXffdyBwXIYC8xLslw2Rk8bhB2XXx_FlfiVHYeZAel5u5c5NpOgUytQlz6wIQOJQKntFfZ3gXwwccc4dHVbGDc6QNoICugvXoFEVOJMwK0ncmkgfqI3wq5rA6604WCumNwP0v3GuT4UIIEjDHlnyAItyGu4MpoYbsVM6" />
                <img className="w-6 h-6 rounded-full border-2 border-surface-container-lowest"
                  data-alt="A professional headshot of a businessman in a sleek, modern corporate environment. The image features high-key lighting that emphasizes clarity and precision. The visual style is clean and authoritative, with a color palette that aligns perfectly with a dark navy and white professional design system. The setting is bright and professional, evoking a sense of reliability and trust for store operators."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaH04doVBpGGCjBEVC9rnK7meuouL3B3M8BOb8_OctQ5avy1rgl1nHK5CRbTgK9tjc4Qgx9wUeDWfS9AMRzIp7nGTbzYjKNXeJ2nADvg_nP2-297gdkit4lZxx6YSfb_N_XHXA0r-inEdqc0ZtrjH6_gT6LYnhm5C0Vz23sNkFN7ocec7MFQb1DAGGZ9gGPE-Rj8zsuPVEhSWfKIAOq5CZcHV0LeSXfxBO6cSYRYC8urvxc6YYPTe4cc8KPeOJSp6KmJHuzeGSFyvR" />
                <img className="w-6 h-6 rounded-full border-2 border-surface-container-lowest"
                  data-alt="A high-quality portrait of a store administrator looking thoughtfully into the distance within a bright, airy workspace. The aesthetic is contemporary and professional, characterized by soft shadows and a pristine light-mode environment. The lighting is natural and sophisticated, and the overall composition maintains the premium, structured look of a high-scale ecommerce management platform's brand identity."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjUy8RMsOo6Ri6Pb0nBu0MsE1FY4CqI0g2BzIIa99POS2Cf35GoDjzaYuzS1iiCZCCbiFwWxSZ_fHfPRA-OTVUL5RiH2TYG2r-hjDPtNF8vuwTKBKP6MDDHpa_mMf0SrkRMyDhmQQh9gzqc7rdrZFOzDRzRcuyBI55Vf0fK4EiVyviY4-gPj2QsCldfIQOZLOifrXHcs6sV0Bvf1ZkelA_RIaWPqOIdiPg4ZElrZJ4LL06yiSeDSsuwgq0tkjagxPToyfg3wkevoJx" />
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Trusted by 10k+
                store managers</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="p-xl flex justify-between items-center text-on-surface-variant">
        <p className="font-body-sm text-body-sm">© 2024 AdminPanel Inc. All rights reserved.</p>
        <div className="flex gap-xl">
          <a className="font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Privacy
            Policy</a>
          <a className="font-label-sm text-label-sm hover:text-primary transition-colors" href="#">Help
            Center</a>
        </div>
      </footer>
    </div>
  )
}

export default ForgetPassword