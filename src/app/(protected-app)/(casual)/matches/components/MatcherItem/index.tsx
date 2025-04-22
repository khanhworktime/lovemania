import { IUserExample } from "@/interfaces/user.model";

interface MatcherItemProps {
  user: IUserExample;
}

export function MatcherItem({ user }: MatcherItemProps) {
  return <div>MatcherItem</div>;
}
