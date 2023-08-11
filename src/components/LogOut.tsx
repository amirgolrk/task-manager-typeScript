import { RiLogoutCircleLine } from "react-icons/ri";
import { logOut } from "../Features/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LogOut = () => {
    const dispatchTo = useDispatch();
    const navigateTo = useNavigate()

    const logoutHandler = () => {
        dispatchTo(
            logOut({
              onSuccess: () => {
                navigateTo("login");
              },
              onFail: () => {
                toast.error("some error ocurred", {
                  position: "top-center",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              },
            })
          );
    }



    return (
        <>
        <li
        title="logOut from the app"
        className="nav-item nav-link  text-danger"
        onClick={logoutHandler}
        style={{ cursor: "pointer" }}
      >
        <RiLogoutCircleLine
          style={{
            color: "red",
            fontSize: "25px",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        />
      </li>
      </>
    )
}

export default LogOut


