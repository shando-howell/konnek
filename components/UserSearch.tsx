"use client";

import { Doc } from "@/convex/_generated/dataModel";

const UserSearch = ({
  onSelectUser,
  placeholder = "Search users by name or email...",
  className,
}: {
  onSelectUser: (user: Doc<"users">) => void;
  placeholder?: string;
  className?: string;
 }) => {
  return (
    <div>UserSearch</div>
  )
}

export default UserSearch