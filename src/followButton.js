import "./App.css";
import React, { useState } from "react";
export function FollowButton() {
  // const [counter, setCounter] = useState(0);

  // const [follow, setFollow] = useState("Follow")
  // const [unFollowValue, setUnFollow,] = useState("")
  // const [color, setColor] = useState("red")
  const [isFollowing, setIsFollowing] = useState(false)
 
  const followText=isFollowing ? "followed" : "follow"
  const colour=isFollowing ? "green" : "red"

  function followUs() {
    setIsFollowing(true)
    // if (follow == "Follow") {
    //   setFollow("Followed")
    //   setColor('green')
    //   setUnFollow("unFollow")
    // } 
  }

  function unFollow() {
    setIsFollowing(false)
    // if (unFollowValue == "unFollow") {
    //   setUnFollow("Unfollowed")
    //   setFollow("Follow")
    //   setColor('red')
    // } 
  }

  return (
    <div>
      <button style={{ backgroundColor: colour }} onClick={followUs} > {followText}</button>
      {isFollowing && <button id="btn" onClick={unFollow}> unFollow</button>}
    </div>
  )
}
