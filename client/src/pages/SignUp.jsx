import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/common/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='min-h-screen flex-center-center pt-20'>
      <div className='max-w-[450px] w-[95%] mx-auto'>
        <h1 className='login-heading'>let&apos;s get started</h1>
        <div className='mt-3'>
          Already have an account?
          <Link to={"/sign-in"}>
            <span className='text-[#6978ef] hover:underline !opacity-100'>
              {" "}
              Sign in
            </span>
          </Link>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className='lex-align-center flex-col sm:flex-row gap-6'
          >
            <OAuth />
            <p className='divider text-center'>Or</p>
            <div className='mt-4 bg-white border rounded-lg p-4 dark:bg-card-dark dark:border-dark'>
              <label htmlFor='fname' className='text-muted'>
                User Name
              </label>
              <div className='my-3'>
                <input
                  type='text'
                  placeholder='username'
                  className='px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark'
                  id='username'
                  onChange={handleChange}
                />
              </div>
              <label htmlFor='lname' className='text-muted'>
                Email
              </label>
              <div className='my-3'>
                <input
                  type='email'
                  placeholder='email'
                  className='px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark'
                  id='email'
                  onChange={handleChange}
                />
              </div>
              <label htmlFor='email' className='text-muted'>
                Password
              </label>
              <div className='my-3'>
                <input
                  type='password'
                  placeholder='password'
                  className='px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark'
                  id='password'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex-center-between mt-3'>
              <div className='input-check'>
                <input type='checkbox' id='remember' />
                <label htmlFor='remember'>Remember me</label>
              </div>
              <Link className='text-[#6978ef] hover:underline'>
                Forgot your password?
              </Link>
            </div>
            <button
              disabled={loading}
              className='mt-3 btn2 btn-primary w-full disabled:opacity-80 capitalize'
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </form>
        </div>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  );
}
