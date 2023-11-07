import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };
  return (
    <div className='mt-4 flex-align-center flex-col sm:flex-row gap-6'>
      <button
        onClick={handleGoogleClick}
        type='button'
        className='btn w-full sm:w-fit border dark:border-dark flex-align-center rounded-md gap-x-2 !opacity-100'
      >
        <img src='/images/google.png' alt='' width={15} />
        <p className='capitalize'>Sign in with Google</p>
      </button>
      <a
        href='www.facebook.com'
        className='btn w-full sm:w-fit bg-[#4370d1] flex-align-center gap-x-2 rounded-md text-white !opacity-100'
      >
        <FaFacebook />
        <p className='capitalize'>Sign in with Facebook</p>
      </a>
    </div>
  );
}
