// Bit flags are useful to test for positivity or negativity.
// To use bit flags, each element in enum must have the value as power of 2.
enum gameFlags {
    none = 0,
    videoGames = 1,
    footBall = 2,
    basketBall = 4,
    cricket = 8,
    volleyBall = 16
}
// For each addition of games, value must be assigned such that it is twice the value of previous value.
var studentTalent = gameFlags.footBall | gameFlags.basketBall; // This means student knows football and basketball.

// Checking for all games
console.log("Video Games:", (studentTalent & gameFlags.videoGames) == gameFlags.videoGames);
console.log("FootBall:", (studentTalent & gameFlags.footBall) == gameFlags.footBall);
console.log("BasketBall:", (studentTalent & gameFlags.basketBall) == gameFlags.basketBall);
console.log("Cricket:", (studentTalent & gameFlags.cricket) == gameFlags.cricket);
console.log("VolleyBall:", (studentTalent & gameFlags.videoGames) == gameFlags.volleyBall);
