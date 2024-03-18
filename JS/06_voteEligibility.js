console.log(`==========Assignment no:2============`);
var voteEligible = function (age) {
  if (age == 0 || age < 0 || age > 130 || age == null) {
    console.log(`Age is :${age} --> Invalid data`);
  } else if (age < 18) {
    console.log(`Age is:${age} -->  Not eligible for vote`);
  } else {
    console.log(`Age is: ${age} --> Eligible for vote`);
  }
};

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(null);
