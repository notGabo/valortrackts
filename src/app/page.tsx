import FormSearchUser from "@/components/FormSearchUser";
import Navbar from "@/components/Navbar";
import Navbarv2 from "@/components/Navbarv2";
import UserCardInfo from "@/components/UserCardInfo";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative flex flex-col h-screen justify-between">
      { /*<Navbarv2 /> */ }
      <div >
        <FormSearchUser />
        <UserCardInfo/>
        </div>
      { /*<Footer/> */ }
      </div>
    </>
  );
};

export default page;