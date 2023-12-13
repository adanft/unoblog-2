import { DefaultSession } from "next-auth";

type UserType = {
  email?: string | null;
  image?: string | null;
  name?: string | null;
};

function getUserRole(user: UserType): string {
  let userRole = "simple";

  if (user.email == "moba.player.game@gmail.com") {
    userRole = "admin";
  }

  return userRole;
}

export default getUserRole;
