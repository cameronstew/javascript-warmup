module.exports = {

  helloWorld: function(){
    return "Hello World";
  },

  hello: function(string){
    return "Hello " + string;
  },

  shout: function(string){
    var stringShout = string.toUpperCase();
    return "Hello " + stringShout;
  },

  whisper: function(string){
    var stringWhisper = string.toLowerCase();
    return "Hello " + stringWhisper;
  },

  separate: function(string){
    return string.split("");
  },

  reverseJoin: function(array){
    return array.reverse().join(",");
  },
  reverseJoinCompact: function(array){
    return array.reverse().join("");
  },
  backwardsDay: function(string){
    var stringReversed = string.split("").reverse().join("");
    return "Hello " + stringReversed;
  }
}
