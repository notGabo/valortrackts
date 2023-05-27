import FormSearchUser from "@/components/FormSearchUser";
import Navbar from "@/components/Navbar";
import Navbarv2 from "@/components/Navbarv2";
import UserCardInfo from "@/components/UserCardInfo";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Navbarv2 />
      <FormSearchUser />
      <UserCardInfo/>
      <Footer/>
    </>
  );
};

export default page;