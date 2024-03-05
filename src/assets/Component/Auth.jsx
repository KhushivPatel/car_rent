import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { db } from "../../Firebase";
const Auth = () => {
  const navigate = useNavigate();
  async function OnGoogleClick() {
    try {
      const auth = getAuth();

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      //check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
      console.log(error);
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={OnGoogleClick}
        className="border border-solid border-gray-300 p-2 flex items-center justify-center  bg-white px-7 py-3 text-semi text-sm font-medium uppercase rounded-full w-full shadow-md hover:bg-gray-300 transition duration-150 ease-in-out hover:shadow-lg active:bg-gray-400 mb-5"
      >
        <FcGoogle className="text-xl bg-white  rounded-full mr-2" />
        continue with google
      </button>
    </div>
  );
};

export default Auth;

