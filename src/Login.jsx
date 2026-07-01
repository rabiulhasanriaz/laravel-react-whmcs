import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/images/bg.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setApiResponse(null);

    try {
      const response = await fetch("http://localhost:8000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      const user = data.find(
      (item) =>
        item.email === form.email &&
        item.raw_password === form.password
    );
    
    if (!user) {
      setError("Invalid email or password");
      return;
    }

    //   if (!response.ok) {
    //     throw new Error(data.message || "Login failed");
    //   }

      localStorage.setItem("auth_user", JSON.stringify(user));
    //   localStorage.setItem("auth_token", data.token || "logged_in");

      navigate("/dashboard");

      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

    return (
       <>
        <div class="wrapper-page">

            <div class="card">
                <div class="card-body">

                    <div class="auth-logo">
                        <h3 class="text-center">
                            <a href="index.html" class="logo d-block my-4">
                                <img src="assets/images/logo-dark.png" class="logo-dark mx-auto" height="30" alt="logo-dark" />
                                <img src="assets/images/logo-light.png" class="logo-light mx-auto" height="30" alt="logo-light" />
                            </a>
                        </h3>
                    </div>

                    <div class="p-3">
                        <h4 class="text-muted font-size-18 text-center">Welcome Back !</h4>
                        <p class="text-muted text-center">Sign in to continue to IGL WHMCS.</p>

                        <form class="form-horizontal" onSubmit={handleLogin}>

                            <div class="mb-3">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="password">Password</label>
                                <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
                            </div>

                            <div class="mb-3 row">
                                <div className="col-6">
                                <div className="form-check">
                                    <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="remember"
                                    />
                                    <label className="form-check-label" htmlFor="remember">
                                    Remember me
                                    </label>
                                </div>
                                </div>
                                <div className="col-6 text-end">
                                <button
                                    className="btn btn-primary w-md waves-effect waves-light"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Logging in..." : "Log In"}
                                </button>
                                </div>
                            </div>

                            <div class="mb-3 row">
                                <div class="col-12">
                                    <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your
                                        password?</a>
                                </div>
                            </div>
                        </form>

                        {error && (
                        <div className="alert alert-danger mt-3">
                            {error}
                        </div>
                        )}

                        {apiResponse && (
                        <div className="alert alert-success mt-3">
                            <strong>API Response:</strong>
                            <pre className="mb-0 mt-2">
                            {JSON.stringify(apiResponse, null, 2)}
                            </pre>
                        </div>
                        )}
                    </div>

                </div>
            </div>

            <div class="text-center">
                <p class="text-white-50">Don't have an account ? <a href="pages-register.html" class="text-white"> Signup Now
                    </a> </p>
                <p class="text-muted">
                    ©
                    <script>document.write(new Date().getFullYear())</script> Agroxa. Crafted with <i
                        class="mdi mdi-heart text-primary"></i> by
                    Themesbrand
                </p>
            </div>

        </div>

        <div class="right-bar">
            <div data-simplebar class="h-100">
                <div class="rightbar-title px-3 py-4">
                    <a href="javascript:void(0);" class="right-bar-toggle float-end">
                        <i class="mdi mdi-close noti-icon"></i>
                    </a>
                    <h5 class="m-0">Settings</h5>
                </div>

              
                <hr class="" />
                <h6 class="text-center mb-0">Choose Layouts</h6>

                <div class="p-4">
                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-1.png" class="img-fluid img-thumbnail" alt="" />
                    </div>

                    <div class="form-check form-switch mb-3">
                        <input type="checkbox" class="form-check-input theme-choice" id="light-mode-switch" checked />
                        <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                    </div>

                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-2.png" class="img-fluid img-thumbnail" alt="" />
                    </div>

                    <div class="form-check form-switch mb-3">
                        <input type="checkbox" class="form-check-input theme-choice" id="dark-mode-switch"
                            data-bsStyle="assets/css/bootstrap-dark.min.css" data-appStyle="assets/css/app-dark.min.css" />
                        <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                    </div>

                    <div class="mb-2">
                        <img src="assets/images/layouts/layout-3.png" class="img-fluid img-thumbnail" alt="" />
                    </div>
                    <div class="form-check form-switch mb-5">
                        <input type="checkbox" class="form-check-input theme-choice" id="rtl-mode-switch"
                            data-appStyle="assets/css/app-rtl.min.css" />
                        <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                    </div>

                    <h6 class="mb-2">Select Custom Colors</h6>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input theme-color" type="radio" name="theme-mode"
                            id="theme-default" value="default" onchange="document.documentElement.setAttribute('data-theme-mode', 'default')" checked />
                        <label class="form-check-label" for="theme-default">Default</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input theme-color" type="radio" name="theme-mode"
                            id="theme-red" value="red" onchange="document.documentElement.setAttribute('data-theme-mode', 'red')" />
                        <label class="form-check-label" for="theme-red">Red</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input theme-color" type="radio" name="theme-mode"
                            id="theme-green" value="green" onchange="document.documentElement.setAttribute('data-theme-mode', 'green')" />
                        <label class="form-check-label" for="theme-green">Green</label>
                    </div>
                </div>

            </div>
           
        </div>
       

       
        {/* <div class="rightbar-overlay"></div> */}

       
        {/* <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/jquery-sparkline/jquery.sparkline.min.js"></script> */}

        {/* <script src="assets/js/app.js"></script> */}
        </>
    );
}