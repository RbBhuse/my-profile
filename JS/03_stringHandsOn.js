console.log(`=============Assignment no:1=============`);

function stringHandsOn() {
  var givenString = "   Hey you are doing good, keep it up   ";
  console.log(`=========Step no1=========`);
  console.log(`Given string is: ${givenString}`);

  console.log(`=========Step no2=========`);
  var len = givenString.length;
  console.log(`Length of string is: ${len}`);

  console.log(`=========Step no3=========`);
  var strAfterTrim = givenString.trim();
  console.log(
    `String after removing leading and trailing spaces: ${strAfterTrim}`
  );
  var lenOfTrimStr = strAfterTrim.length;
  console.log(`Length of String is: ${lenOfTrimStr}`);

  console.log(`=========Step no4=========`);
  var rovedSpaces = len - lenOfTrimStr;
  console.log(
    ` Count extra spaces removed in given String is: ${rovedSpaces} `
  );

  console.log(`=========Step no5=========`);
  console.log(
    `First character of String is: ${strAfterTrim.charAt(
      0
    )}  Last character is: ${strAfterTrim.charAt(lenOfTrimStr - 1)}`
  );

  console.log(`=========Step no6=========`);
  var words = strAfterTrim.split(" ");
  var totalWords = words.length;
  console.log(`Total number of words in string is: ${totalWords}`);

  console.log(`=========Step no7=========`);
  var indexofGood = givenString.indexOf("good");
  console.log(`Index of "good" is : ${indexofGood}`);

  /* we acn use other method also
    var indexofGood = givenString.search("good");
    console.log(`Index of "good" is : ${indexofGood}`);*/

  console.log(`=========Step no8=========`);
  var subStr = givenString.substring(22);
  console.log(`SubString is: ${subStr}`);

  console.log(`=========Step no9=========`);
  var isEndWithUp = strAfterTrim.endsWith("up");
  console.log(`Is string end with "up": ${isEndWithUp}`);

  console.log(`=========Step no10=========`);
  var isStartWithHey = strAfterTrim.startsWith("Hey");
  console.log(`Is string start with "Hey": ${isStartWithHey}`);
}

stringHandsOn();
