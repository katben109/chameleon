// FUNCTIONALITY - (Simulation) Variables
/////////////////////
// Config

var shouldDebug = true;

// FUNCTIONALITY - Variables +
// INTERACTIVITY - Different Outcomes, Visible Variables contributing to Visible Changes
// Our Chameleon poem in two parts,
// which build on each other while also recursively referring back to each other.
// The intent is to "complicate" the conventional binary of happy v sad through the metaphor
// of a chameleon, which--like all chameleons--is color-blind. This is why we stayed with a
// grey-scale pallette.

var PoemA = new Poem(
  "Happy Chameleon",
  "Anonymous",
  [
      "When people see me they stop and stare",
    "In awe of my beauty, you can say that I'm rare",
    "A unique reptile, with colors you've never seen",
    "I can be bright when you're nice and camouflage when you're mean",
    "I feel so grey, yet I look so green!",
    "No wonder they call me Nature's mood ring."

  ]
);
var PoemB = new Poem(
  "Sad Chameleon",
  "Anonymous",
  [
    "Imagine a world where you are vibrant with colors you can't even see.",
    "That is what it is like looking in the mirror for me.",
    "Greys to my left and Greys to my right,",
    "Grey's all around with my 360 sight,",
    "I change colors like moods, call me one in a million.",
    "Riddle me that... I'm a Happy Chameleon."
  ]
);

//// FUNCTIONALITY - Variables
// INTERACTIVITY - (contributing to) Visible Changes and Console Output
// State
var timeStep = 0;
var chosenPoem;

// Bookkeeping
var initialized = false;
var simState;

// FUNCTIONALITY - Variable Changes
// Starting Function
/////////////////////
$(document).ready(function() {
  simState = new StateMachine();
  simState.Start(); 
  
  $("#bttn").click(function() {
    simState.Update();
  });  
});

// FUNCTIONALITY - Variable Changes
// INTERACTIVITY - Visible Changes
// Creates the State Machine and sets up the variable state changes.
///////////////////////////////////////////////
var StateMachine = function(){
  this.states = { // Add/Remove States Here
    "Init" : new Init(this),
    "Line1" : new Line1(this),
    "Line2" : new Line2(this),
    "Line3" : new Line3(this),
    "Line4" : new Line4(this),
    "Line5" : new Line5(this),
    "Line6" : new Line6(this)
  };
  this.currentState = this.states["Init"];
  var nextState;

  // Largely don't mess with this section
  this.Start = function () {
    this.currentState.Enter();
    if (shouldDebug) this.Debug();
  };
  this.Update = function () {
    this.currentState.Update(function() {
      this.Transition();
    }.bind(this));
    if (shouldDebug) this.Debug();
  };
  this.Change = function (state) {
    nextState = state;
  };
  this.Transition = function() {
    if (nextState !== undefined) {    
      this.currentState.Exit();
      this.currentState = nextState;
      nextState = undefined;
      this.currentState.Enter();
    }
  }
  // Down to here

  // INTERACTIVITY -  Console Output
  this.Debug = function () {
    console.log("-------------------------");
    console.log("timeStep = " + timeStep);
    console.log("----------------");
    console.log("State = " + this.currentState.name);
    console.log("----------------");
  };
};

// FUNCTIONALITY - Variables, Variable Changes
// INTERACTIVITY - Visible variables, Visible Changes, Console Output
// Initializes and sets rules for machine.
var Init = function (machine) {
  this.name = this.constructor.name;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    $("#pick").show();
    $("#input").hide();
    $("#bttn").hide();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    fsm.Change(fsm.states["Line1"]);


    if (callback !== undefined) callback();
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");
    $("#pick").hide();
    $("#input").show();
    $("#bttn").show();

    
    if (callback !== undefined) callback();
  };
};

// FUNCTIONALITY - Variables, Variable Changes (Lines of Poem),
// INTERACTIVITY - (Calling) Visible variables for Visible Changes (Lines of Poem)
var Line1= function (machine) {
  this.name = this.constructor.name;
  this.line = 0;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function () {
      fsm.Change(fsm.states["Line2"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line2 = function (machine) {
  this.name = this.constructor.name;
  this.line = 1;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line3"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line3 = function (machine) {
  this.name = this.constructor.name;
  this.line = 2;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line4"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line4 = function (machine) {
  this.name = this.constructor.name;
  this.line = 3;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line5"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};

var Line5 = function (machine) {
  this.name = this.constructor.name;
  this.line = 4;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();


    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      fsm.Change(fsm.states["Line6"]);


      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


var Line6= function (machine) {
  this.name = this.constructor.name;
  this.line = 5;
  var fsm = machine;

  // Happens once when state is entered
  this.Enter = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Enter");
    DrawInID("#target", chosenPoem.lines[this.line]);
    $("#target").fadeIn();

    if (callback !== undefined) callback();
  };
  this.Update = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Update");
    $("#target").fadeOut(function() {
      ClearByID("#target");
      fsm.Change(fsm.states["Init"]);

      if (callback !== undefined) callback();
    });
  };
  this.Exit = function (callback) {
    if (shouldDebug) console.log("---- " + this.name + " Exit");

    if (callback !== undefined) callback();
  };
};


// FUNCTIONALITY - Variable Changes
// INTERACTIVITY - Visible Changes, Different Outcomes
// Creates the interactive decision functionality and updates states based on the interactor's choices
function PickPoem(choice) {
  chosenPoem = choice;
  simState.Update();
}

// Data /////////
///////////////////////////////////////////////
// It's useful to treat user input in some standardized way. This function works as data storage object for user actions
// Edit this structure with whatever actions you want to happen
function Poem(name, author, lines) {
  this.name = name;
  this.author = author;
  this.lines = lines;
}
// Draw /////////////
///////////////////////////////////////////////
function ClearByID(id) {
  $(id).html($([]));
}
function FadeByID(id, state) {
  if (state) {
    $(id).fadeIn();
  } else {
    $(id).fadeOut();
  }
  
}
function DrawInID(id, stateName) {
  $(id).append(
    "<p class='d-inline-block py-1 my-1'>" + stateName + "</p>"
  );
}