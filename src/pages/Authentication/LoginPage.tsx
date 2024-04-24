import { motion } from "framer-motion";
import { HeroHighlight } from "../../components/ui/hero-highlight";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";

export default function LoginPage() {
    const navigate = useNavigate()
    const handleSignin = async () => {
        try{
            const result = await signInWithPopup(auth, googleProvider)
            localStorage.setItem('token', result.user?.uid || '')
            localStorage.setItem('user', JSON.stringify(result.user))
            navigate('/')
            console.log(result)
        }
        catch(e){
            console.log(e)
        }
    }

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        This was the Authentication page for Google. 
        <br></br>
        <button onClick={handleSignin} className="mt-5 p-2 inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Login with Google
        </button>
        
      </motion.h1>
    </HeroHighlight>
  );
}
