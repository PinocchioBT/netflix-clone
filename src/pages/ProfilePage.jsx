import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { auth } from "../../utils/firebase";
import "./ProfilePage.css";
import PlansPage from "./PlansPage";
import { selectUser } from "../features/userSlice";

function ProfilePage() {
  const user = useSelector(selectUser);

  return (
    <div className="profilePage">
      <Navbar />
      <div className="profilePage-body">
        <h1>Edit Profile</h1>
        <div className="profilePage-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="netflix-logo"
          />
          <div className="profilePage-details">
            <h2 className="profilePage-email">{user.email}</h2>
            <div className="profilePage-plans">
              <h3>Plans</h3>
              <hr></hr>
              <PlansPage/>
              <button
                onClick={() => auth.signOut()}
                className="profilePage-signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
