import { getUniqueUser } from "@/actions/userActions";
import EditUser from "@/screens/users/edit";

const EditUserPage = async ({ params }) => {
  const resolvedParams = await params; // Await the params object
  const { userId: userId } = resolvedParams; // Destructure the userId

  console.log("MAIN ID " + userId);
  //const userData = await getUniqueUser(userId);
  // Fetch the user data from the server
  const userData = await getUniqueUser(parseInt(userId));
  console.log("USER DATA = " + userData);
  return (
    <>
      {/* Pass the userId to the EditUser component */}
      <EditUser params={{ userData }} />
    </>
  );
};

export default EditUserPage;
