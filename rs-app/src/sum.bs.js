// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';


function sum(item) {
  if (item) {
    return (item[0] + sum(item[1]) | 0) + sum(item[2]) | 0;
  } else {
    return 0;
  }
}

var myTree = /* Node */[
  1,
  /* Node */[
    2,
    /* Node */[
      4,
      /* Leaf */0,
      /* Leaf */0
    ],
    /* Node */[
      6,
      /* Leaf */0,
      /* Leaf */0
    ]
  ],
  /* Node */[
    3,
    /* Node */[
      5,
      /* Leaf */0,
      /* Leaf */0
    ],
    /* Node */[
      7,
      /* Leaf */0,
      /* Leaf */0
    ]
  ]
];

console.log(sum(myTree));

exports.sum = sum;
exports.myTree = myTree;
/*  Not a pure module */
