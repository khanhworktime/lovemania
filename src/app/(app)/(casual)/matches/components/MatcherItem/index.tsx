import { IUser } from "@/interfaces/user.model";

interface MatcherItemProps {
  user: IUser;
}

export function MatcherItem({ user }: MatcherItemProps) {
  return <div>MatcherItem</div>;
}
