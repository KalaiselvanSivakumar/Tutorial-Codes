// Type Assertion is used to instruct the compiler that the following type is acceptable or to type cast like behaviour
interface FootBall {
    teamName: string;
    needsBall: boolean;
    isGoalBased: boolean;
}

interface VolleyBall {
    teamName: string;
    needsBall: boolean;
    isGoalBased: boolean;
    teamCaptian: string;
}

var player1: VolleyBall = {
    teamName: "Thunder Troops",
    needsBall: true,
    isGoalBased: true,
    teamCaptian: "Kalai selvan"
}

// Auto type asserted by compiler from VolleyBall to FootBall
var player2: FootBall = player1;

// Manual type assertion
var player3: FootBall = <FootBall> player1;
