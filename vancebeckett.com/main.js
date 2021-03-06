//TODO: code refactoring, outsource animations and styles

//Layout status - what is loaded, load status, flipping animation status etc:
var currentPage = 0;
var flippingPage = false;
var headerStat = false;

var previousPage = 0;
var previousAnim;

var p1AnimStarted = false;

window.onload = function() {

  //****** Variables *******//

  //Timelines

  //Main tl for layout and staff
  var tl = new TimelineMax();

  //Page1 animation timline
  var tlp1C = new TimelineMax({delay: 0});
  //Page1 loop animation timeline
  var tlp1CSt = new TimelineMax({delay: 0, repeat: -1, repeatDelay: -0.4});

  //Page2 animation timelines
  var tlp2C = new TimelineMax({delay: 0});
  var tlp2CWind = new TimelineMax({delay: 0, repeat: -1, repeatDelay: 0.2});
  var tlp2cStar1 = new TimelineMax({delay: 0, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar2 = new TimelineMax({delay: 0.5, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar3 = new TimelineMax({delay: 0.3, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar4 = new TimelineMax({delay: 1, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar5 = new TimelineMax({delay: 1.5, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar6 = new TimelineMax({delay: 0.7, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar7 = new TimelineMax({delay: 1.8, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar8 = new TimelineMax({delay: 0.4, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar9 = new TimelineMax({delay: 2, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar10 = new TimelineMax({delay: 1.2, repeat: -1, repeatDelay: 1.2});
  var tlp2cStar11 = new TimelineMax({delay: 0.7, repeat: -1, repeatDelay: 1.2});

  //Page3 animation timelines
  var tlp3C = new TimelineMax({delay: 0});
  var tlp3CRipples = new TimelineMax({delay: 0});
  var tlp3CTreeSwaying = new TimelineMax({delay: 0});
  // stars
  var tlp3cStar1 = new TimelineMax({delay: 0, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar2 = new TimelineMax({delay: 0.5, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar3 = new TimelineMax({delay: 0.3, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar4 = new TimelineMax({delay: 1, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar5 = new TimelineMax({delay: 0.4, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar6 = new TimelineMax({delay: 0.8, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar7 = new TimelineMax({delay: 0.1, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar8 = new TimelineMax({delay: 0.7, repeat: -1, repeatDelay: 1.2});
  // reflected stars
  var tlp3cStar1w = new TimelineMax({delay: 0, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar2w = new TimelineMax({delay: 0.5, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar3w = new TimelineMax({delay: 0.3, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar4w = new TimelineMax({delay: 1, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar5w = new TimelineMax({delay: 0.4, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar6w = new TimelineMax({delay: 0.8, repeat: -1, repeatDelay: 1.2});
  var tlp3cStar7w = new TimelineMax({delay: 0.1, repeat: -1, repeatDelay: 1.2});

  //Page 1 animations

  //***Elements***//

  var docBody = document.body || document.getElementsByTagName("body")[0],
    contentLayout = document.getElementById("contentLayout");

  //header
  var navTile = document.getElementById("navTile"),
    navULineLine = document.getElementById("navULineLine"),
    navULineSVG = document.getElementById("navULineSVG");

  //Table of content button click event
  var navBtn1 = document.getElementById("navBtn1");
  if (navBtn1) {
    navBtn1.addEventListener("click", function() {
      pageLoader(p1TilesInput);
    }, false);
  } else {
    navBtn1.attachEvent("onclick", function() {
      pageLoader(p1TilesInput);
    }, false);
  };
  var navBtn2 = document.getElementById("navBtn2");
  if (navBtn2) {
    navBtn2.addEventListener("click", function() {
      pageLoader(p2TilesInput);
    }, false);
  } else {
    navBtn2.attachEvent("onclick", function() {
      pageLoader(p2TilesInput);
    }, false);
  };
  var navBtn3 = document.getElementById("navBtn3");
  if (navBtn3) {
    navBtn3.addEventListener("click", function() {
      pageLoader(p3TilesInput);
    }, false);
  } else {
    navBtn3.attachEvent("onclick", function() {
      pageLoader(p3TilesInput);
    }, false);
  };
  var navBtn4 = document.getElementById("navBtn4");
  if (navBtn4) {
    navBtn4.addEventListener("click", function() {
      alert("Not ready yet, come in - literally - few days... or delete your cache?");
    }, false);
  } else {
    navBtn4.attachEvent("onclick", function() {
      alert("Not ready yet, come in - literally - few days... or delete your cache?");
    }, false);
  };

  function pUpNextButtonAction(pNumber) {
    switch (pNumber) {
      case 1:
        var pUpNextButton = document.getElementById("p1UpNextTile").contentDocument.getElementById("p1UpNextTileBody");
        var nextPage = p2TilesInput;
        break;
      case 2:
        var pUpNextButton = document.getElementById("p2UpNextTile").contentDocument.getElementById("p2UpNextTileBody");
        var nextPage = p3TilesInput;
        break;
    }

    if (pUpNextButton) {
      pUpNextButton.style.cursor = "pointer";
      pUpNextButton.addEventListener("click", function() {
        pageLoader(nextPage);
      }, false);
      return
    } else {
      pUpNextButton.attachEvent("onclick", function() {
        pageLoader(nextPage);
      }, false);
      return
    }
    return
  }

  //  Page content Elements
  var p1ComicTileInput = [
      [
        "class",
        "p1Content",
        "id",
        "p1ComicTile",
        "type",
        "image/svg+xml",
        "data",
        "tiles/p1/p1Comic.svg",
        "style",
        "display:none;width:100%;max-width:605px;max-height:500px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Beginning of a comics. Page 1 shows the comet (which represents a bussiness that has difficulsties with its branding) falling from the sky. Main characters - The Man and wolf Wewawet observe the comet, thinking if they can help."
      ],
      "tiles/p1/p1Comic.svg",
      "svg753"
    ],
    p1WelcomeTileInput = [
      [
        "class",
        "p1Content",
        "id",
        "p1WelcomeTile",
        "type",
        "text/html",
        "data",
        "tiles/p1/p1WelcomeTile.html",
        "style",
        "display:none;width:100%;max-width:360px;min-height:480px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p1/p1WelcomeTile.html",
      "p1WelcomeTileBody"
    ],
    p1PromiseTileInput = [
      [
        "class",
        "p1Content",
        "id",
        "p1PromiseTile",
        "type",
        "text/html",
        "data",
        "tiles/p1/p1PromiseTile.html",
        "style",
        "display:none;width:100%;max-width:605px;min-height:450px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p1/p1PromiseTile.html",
      "p1PromiseTileBody"
    ],
    p1DoggieTileInput = [
      [
        "class",
        "p1Content",
        "id",
        "p1Doggie",
        "type",
        "image/svg+xml",
        "data",
        "tiles/p1/p1Doggie.svg",
        "style",
        "display:none;width:100%;max-width:360px;max-height:470px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Wepwawet says that peoples tell the next page may be too colorful for you (each page has its own color scheme)."
      ],
      "tiles/p1/p1Doggie.svg",
      "svg170"
    ],
    p1UpNextTileInput = [
      [
        "class",
        "p1Content",
        "id",
        "p1UpNextTile",
        "type",
        "text/html",
        "data",
        "tiles/p1/p1UpNextTile.html",
        "style",
        "display:none;width:100%;max-width:990px;height:185px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p1/p1UpNextTile.html",
      "p1UpNextTileBody"
    ];

  var p2ComicTileInput = [
      [
        "class",
        "p2Content",
        "id",
        "p2ComicTile",
        "type",
        "image/svg+xml",
        "data",
        "tiles/p2/p2Comic.svg",
        "style",
        "display:none;width:100%;max-width:780px;max-height:440px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Page 2 of the comic shows our characters at the mountain thinking what is wrong with the &quot;business&quot; just before they went to help."
      ],
      "tiles/p2/p2Comic.svg",
      "svg527"
    ],
    p2HeaderTileInput = [
      [
        "class",
        "p2Content",
        "id",
        "p2HeaderTile",
        "type",
        "text/html",
        "data",
        "tiles/p2/p2HeaderTile.html",
        "style",
        "display:none;width:185px;max-width:185px;height:440px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p2/p2HeaderTile.html",
      "p2HeaderTileBody"
    ],
    p2Tile1Input = [
      [
        "class",
        "p2Content",
        "id",
        "p2Tile1",
        "type",
        "text/html",
        "data",
        "tiles/p2/content/p2Tile1.html",
        "style",
        "display:none;width:100%;max-width:575px;min-height:330px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p2/content/p2Tile1.html"
    ],
    p2Tile2Input = [
      [
        "class",
        "p2Content",
        "id",
        "p2Tile2",
        "type",
        "text/html",
        "data",
        "tiles/p2/content/p2Tile2.html",
        "style",
        "display:none;width:100%;max-width:390px;min-height:685px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p2/content/p2Tile2.html"
    ],
    p2Tile3Input = [
      [
        "class",
        "p2Content",
        "id",
        "p2Tile3",
        "type",
        "text/html",
        "data",
        "tiles/p2/content/p2Tile3.html",
        "style",
        "display:none;width:100%;max-width:575px;min-height:330px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p2/content/p2Tile3.html"
    ],
    p2UpNextTileInput = [
      [
        "class",
        "p2Content",
        "id",
        "p2UpNextTile",
        "type",
        "text/html",
        "data",
        "tiles/p2/p2UpNextTile.html",
        "style",
        "display:none;width:100%;max-width:990px;height:185px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p2/p2UpNextTile.html"
    ];

  var p3ComicTileInput = [
      [
        "class",
        "p3Content",
        "id",
        "p3ComicTile",
        "type",
        "image/svg+xml",
        "data",
        "tiles/p3/p3Comic.svg",
        "style",
        "display:none;width:100%;max-width:780px;max-height:440px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Page 3 of the comic shows our characters at the ascending the mountain. It's already night, their time is limited."
      ],
      "tiles/p3/p3Comic.svg",
      "svg648"
    ],
    p3HeaderTileInput = [
      [
        "class",
        "p3Content",
        "id",
        "p3HeaderTile",
        "type",
        "text/html",
        "data",
        "tiles/p3/p3HeaderTile.html",
        "style",
        "display:none;width:185px;max-width:185px;height:440px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p3/p3HeaderTile.html",
      "p2HeaderTileBody"
    ],
    p3Tile1Input = [
      [
        "class",
        "p3Content",
        "id",
        "p3Tile1",
        "type",
        "text/html",
        "data",
        "tiles/p3/content/p3Tile1.html",
        "style",
        "display:none;width:100%;max-width:575px;min-height:330px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p3/content/p3Tile1.html"
    ],
    p3Tile2Input = [
      [
        "class",
        "p3Content",
        "id",
        "p3Tile2",
        "type",
        "text/html",
        "data",
        "tiles/p3/content/p3Tile2.html",
        "style",
        "display:none;width:100%;max-width:390px;min-height:685px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p3/content/p3Tile2.html"
    ],
    p3Tile3Input = [
      [
        "class",
        "p3Content",
        "id",
        "p3Tile3",
        "type",
        "text/html",
        "data",
        "tiles/p3/content/p3Tile3.html",
        "style",
        "display:none;width:100%;max-width:575px;min-height:330px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)",
        "alt",
        "Temporary dummy. This one will be filled with content soon."
      ],
      "tiles/p3/content/p3Tile3.html"
    ],
    p3UpNextTileInput = [
      [
        "class",
        "p3Content",
        "id",
        "p3UpNextTile",
        "type",
        "text/html",
        "data",
        "tiles/p3/p3UpNextTile.html",
        "style",
        "display:none;width:100%;max-width:990px;height:185px;opacity:0;box-shadow: -12.5px 12.5px hsla(0, 0%, 0%, 0.5)"
      ],
      "tiles/p3/p3UpNextTile.html"
    ];

  var redColor = "hsl(0, 75%, 70%)",
    blackColor = "hsl(0, 75%, 0%)";

  var p1TilesInput = {
    pNumber: 1,
    pTiles: [
      p1ComicTileInput, p1WelcomeTileInput, p1PromiseTileInput, p1DoggieTileInput, p1UpNextTileInput
    ],
    pTilesObjects: [
      0, 0, 0, 0, 0
    ],
    pTilesIDs: [
      0, 0, 0, 0, 0
    ],
    classSelector: ".p1Content",
    bkgColor: "hsl(196, 75%, 75%)",
    strongColor: "hsl(196, 25%, 38%)",
    weakColor: "hsl(196, 75%, 75%)",
    tocHighliterPosition: "85px",
    timeline: [
      tlp1C, tlp1CSt
    ],
    animation: p1Animation,
    initAnimation: true
  };

  var p2TilesInput = {
    pNumber: 2,
    pTiles: [
      p2ComicTileInput,
      p2HeaderTileInput,
      p2Tile1Input,
      p2Tile2Input,
      p2Tile3Input,
      p2UpNextTileInput
    ],
    pTilesObjects: [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    pTilesIDs: [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    classSelector: ".p2Content",
    bkgColor: "hsl(318, 75%, 75%)",
    strongColor: "hsl(318, 25%, 38%)",
    weakColor: "hsl(318, 75%, 75%)",
    tocHighliterPosition: "320px",
    timeline: [
      tlp2C,
      tlp2CWind,
      tlp2cStar1,
      tlp2cStar2,
      tlp2cStar3,
      tlp2cStar4,
      tlp2cStar5,
      tlp2cStar6,
      tlp2cStar7,
      tlp2cStar8,
      tlp2cStar9,
      tlp2cStar10,
      tlp2cStar11
    ],
    animation: p2Animation,
    initAnimation: true
  };

  var p3TilesInput = {
    pNumber: 3,
    pTiles: [
      p3ComicTileInput,
      p3HeaderTileInput,
      p3Tile1Input,
      p3Tile2Input,
      p3Tile3Input,
      p3UpNextTileInput
    ],
    pTilesObjects: [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    pTilesIDs: [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    classSelector: ".p3Content",
    bkgColor: "hsl(319, 25%, 38%)",
    strongColor: "hsl(318, 25%, 38%)",
    weakColor: "hsl(319, 25%, 38%)",
    tocHighliterPosition: "530px",
    timeline: [
      tlp3C,
      tlp3CRipples,
      tlp3CTreeSwaying,
      tlp3cStar1,
      tlp3cStar2,
      tlp3cStar3,
      tlp3cStar4,
      tlp3cStar5,
      tlp3cStar6,
      tlp3cStar7,
      tlp3cStar8,
      tlp3cStar1w,
      tlp3cStar2w,
      tlp3cStar3w,
      tlp3cStar4w,
      tlp3cStar5w,
      tlp3cStar6w,
      tlp3cStar7w
    ],
    animation: p3Animation,
    initAnimation: true
  };

  //****** Functions *******//
  //**Content loader**//
  var initialLoad = false;

  function flipped() {
    flippingPage = false;
  }

  function pageLoader(pTilesInput) {
    if (pTilesInput.pNumber !== currentPage) {
      var loadState = 0;
      for (var i = 0; i < pTilesInput.pTiles.length; i++) {
        var xhr = new XMLHttpRequest();
        (function(i) {
          xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              loadState += 1;
              if (loadState == pTilesInput.pTiles.length) {
                for (var j = 0; j < pTilesInput.pTilesObjects.length; j++) {
                  var pageObj = document.createElement("object");
                  pTilesInput.pTilesObjects.splice(j, 1, pageObj);
                  var appendedObj = contentLayout.appendChild(pTilesInput.pTilesObjects[j]);
                  appendedObj.class = pTilesInput.pTiles[j][0][1];
                  appendedObj.id = pTilesInput.pTiles[j][0][3];
                  appendedObj.type = pTilesInput.pTiles[j][0][5];
                  appendedObj.data = pTilesInput.pTiles[j][0][7];
                  appendedObj.style.cssText = pTilesInput.pTiles[j][0][9];
                  if (pTilesInput.pTiles[j][0][11] !== undefined) {
                    appendedObj.alt = pTilesInput.pTiles[j][0][11];
                  }
                  pTilesInput.pTilesIDs.splice(j, 1, document.getElementById(pTilesInput.pTiles[j][0][3]));
                }
                pageFlip(pTilesInput);
              }
            }
          };
        })(i);
        xhr.open("GET", pTilesInput.pTiles[i][1], true);
        xhr.send();
      }
    }
  }

  //Calc tiles content heights
  function tileHeightCalc(pageCalc) {
    for (var i = 0; i < pageCalc.pTilesIDs.length; i++) {
      if (pageCalc.pTiles[i][0][5] === "text/html") {
        if (document.getElementById(pageCalc.pTiles[i][0][3]).contentDocument.getElementById(pageCalc.pTiles[i][2])) {
          var contentID = document.getElementById(pageCalc.pTiles[i][0][3]).contentDocument.getElementById(pageCalc.pTiles[i][2]);
          if (parseInt(contentID.style.minHeight) < contentID.clientHeight) {
            document.getElementById(pageCalc.pTiles[i][0][3]).style.height = contentID.clientHeight + "px";
          }
        }
      }
    }
  }

  //Animation termination function
  function terminateTL(timeline) {
    if (previousAnim != undefined) {
      for (var i = previousAnim.length - 1; i >= 0; i--) {
        previousAnim[i].restart(true, true).clear().pause();
      }
    }
    previousAnim = timeline;
  }

  //Random
  function randomNumber(max, min) {
    if (min === undefined) {
      min = 0;
    }
    var number = Math.floor(Math.random() * max),
      rnd = Math.random(),
      polar = 1;
    if (rnd <= 0.5) {
      polar *= -1;
    }
    if (number < min) {
      return min * polar;
    } else {
      return number * polar;
    }
  }

  function randomPositive(max, min) {
    if (min === undefined) {
      min = 0;
    }
    var number = Math.random() * max;
    if (number < min) {
      return min;
    } else {
      return number;
    }
  }

  var randomRotationReturn = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];

  function randomRotation(max, min, starnumber) {
    var rnd = randomNumber(max, min);
    randomRotationReturn[starnumber] = rnd * (-1);
    return "rotate(" + rnd + "deg)";
  }

  function randomScale(max, min) {
    return "scale(" + randomPositive(max, min) + ")";
  }

  //**Animations**//
  function tileAppear(tile, dir, path) {
    var tl = new TimelineMax();
    if (typeof path === "undefined") {
      path = 150;
    }
    if (dir === "ltr") {
      tl.fromTo(tile, 0.9, {
        x: -path
      }, {
        x: 0,
        ease: Power3.easeOut
      }).to(tile, 0.9, {
        css: {
          opacity: "1",
          ease: Power3.easeOut
        }
      }, "-=0.9");
    } else {
      tl.fromTo(tile, 0.9, {
        y: path
      }, {
        y: 0,
        ease: Power3.easeOut
      }).to(tile, 0.9, {
        css: {
          opacity: "1",
          ease: Power3.easeOut
        }
      }, "-=0.9");
    }
  }

  function tileDisappear(tile, path) {
    var tl = new TimelineMax();
    if (typeof path === "undefined") {
      path = 150;
    }
    tl.to(tile, 0.7, {
      y: path,
      ease: Power3.easeOut
    }).to(tile, 0.7, {
      css: {
        opacity: "0",
        ease: Power3.easeOut
      }
    }, "-=0.7").set(tile, {display: "none"});
  }

  function pageFlip(toPage) {
    if (toPage.pNumber !== currentPage && flippingPage !== true) {
      flippingPage = true;

      //Scroll to top of the page
      (function() {
        TweenMax.to(document.body, 1, {scrollTop: 0}); //For Safari
        TweenMax.to(document.documentElement, 1, {scrollTop: 0}); //For Chrome, Firefox, IE and Opera
      })()

      var disappArr;
      switch (currentPage) {
        case 1:
          disappArr = p1TilesInput.pTilesIDs;
          break;
        case 2:
          disappArr = p2TilesInput.pTilesIDs;
          break;
        case 3:
          disappArr = p3TilesInput.pTilesIDs;
          break;
        case 4:
          disappArr = p4TilesInput.pTilesIDs;
          break;
      }

      previousPage = currentPage;
      currentPage = toPage.pNumber;

      for (var i = 0; i < toPage.pTilesIDs.length; i++) {
        toPage.pTilesIDs[i].style.display = "block";
      }

      function packeryLayout() {
        tileHeightCalc(toPage);
        var pckry = new Packery(".tileGridContainer", {
          itemSelector: toPage.clasSelector,
          gutter: 25
        });
        function pckryLayoutReset() {
          pckry.layout();
        };
        window.onresize = function(event) {
          tileHeightCalc(toPage);
          pckry.layout();
        };
        for (var i; i < toPage.pTilesIDs.length; i++) {
          if (disappArr !== undefined) {
            pckry.remove(disappArr[i]);
          }
        }
        tl.call(tileHeightCalc, [toPage], this, appearOffset + .1).call(pckryLayoutReset, [], this, appearOffset + .3);
        // .call(pUpNextButtonAction, [toPage.pNumber], this, appearOffset + 1)
        pUpNextButtonAction(toPage.pNumber);
        // tl.call(pUpNextButton, [toPage.pNumber], this, "+=1");
      }

      var tl = new TimelineMax();
      var disappOffset;
      var appearOffset = 0.3;
      var flipDuration;
      if (disappArr !== undefined) {
        disappOffset = 0.7 + 0.15 * (disappArr.length - 1);
        appearOffset = 0.9 + 0.15 * disappArr.length; //0.55
        var bkgColorChangeDuration = appearOffset + toPage.pTilesIDs.length * 0.15 - 0.15 + 0.9;
        flipDuration = bkgColorChangeDuration;
        tl.call(pageContentDisappear, [disappArr], this, 0).to(docBody, bkgColorChangeDuration, {
          css: {
            backgroundColor: toPage.bkgColor
          }
        }, 0).to(navULineLine, bkgColorChangeDuration, {
          attr: {
            "stroke": toPage.weakColor
          }
        }, 0).to(navULineSVG, bkgColorChangeDuration, {
          css: {
            left: toPage.tocHighliterPosition,
            ease: Power3.easeOut
          }
        }, 0);
      }
      if (flipDuration === undefined) {
        flipDuration = 0.9 + 0.15 * toPage.pTilesIDs.length;
      }

      function animate() {
        toPage.timeline[0].play();
        toPage.animation();
      }
      tl.call(packeryLayout, [], this, appearOffset).call(pageContentAppear, [toPage.pTilesIDs], this, appearOffset).call(terminateTL, [toPage.timeline], this, disappOffset).call(animate).call(flipped, [], flipDuration);
    }
    return;
  }

  function pageContentDisappear(pageTiles) {
    var tl = new TimelineMax();
    var startTime = 0;
    for (var i = pageTiles.length - 1; i >= 0; i--) {
      tl.call(tileDisappear, [pageTiles[i]], this, startTime);
      startTime += 0.15;
    }
  }

  function pageContentAppear(pageTiles) {
    var tl = new TimelineMax();
    for (var i = 0; i < pageTiles.length; i++) {
      tl.call(tileAppear, [pageTiles[i]], this, "+=0.15");
    }
  }

  //******Page 1 animations***************************************

  function p1Animation() {
    //Page 1 Tiles
    var p1ComicTile = document.getElementById("p1ComicTile"),
      p1ComicSVG = p1ComicTile.contentDocument,
      p1Doggie = document.getElementById("p1Doggie"),
      p1DoggieSVG = p1Doggie.contentDocument;

    function p1ComicSVGid(id) {
      return p1ComicSVG.getElementById(id);
    }

    function p1DoggieSVGid(id) {
      return p1DoggieSVG.getElementById(id);
    }

    //Credits, Bckg, Frgr
    var openingLogo = p1ComicSVGid("openingLogo"),
      openingCredits = p1ComicSVGid("openingCredits"),
      p1cBackground = p1ComicSVGid("p1cBackground"),
      p1cForeground = p1ComicSVGid("p1cForeground"),
      openingTitle = p1ComicSVGid("openingTitle");

    //Clouds
    var p1cCloud01 = p1ComicSVGid("p1cCloud01"),
      p1cC2 = p1ComicSVGid("p1cC2"),
      p1cC1 = p1ComicSVGid("p1cC1"),
      p1cC3 = p1ComicSVGid("p1cC3"),
      p1cC4 = p1ComicSVGid("p1cC4"),
      p1cC5 = p1ComicSVGid("p1cC5"),
      path89 = p1ComicSVGid("path89");

    //Foreground
    var p1cManSilhouette = p1ComicSVGid("p1cManSilhouette"),
      p1cDoge = p1ComicSVGid("p1cDoge"),
      p1cDogeEye01 = p1ComicSVGid("p1cDogeEye01"),
      p1cDogeEye02 = p1ComicSVGid("p1cDogeEye02");

    //Chat
    var p1cChatBox1 = p1ComicSVGid("p1cChatBox1"),
      p1cChatIco1 = p1ComicSVGid("p1cChatIco1"),
      p1cChatBox2 = p1ComicSVGid("p1cChatBox2"),
      p1cChatIco2 = p1ComicSVGid("p1cChatIco2"),
      p1cChatBox3 = p1ComicSVGid("p1cChatBox3"),
      p1cChatIco3 = p1ComicSVGid("p1cChatIco3");

    //Comet
    var p1cCometTail = p1ComicSVGid("p1cCometTail"),
      p1cCometTailPath = p1ComicSVGid("p1cCometTailPath"),
      p1cCometComet = p1ComicSVGid("p1cCometComet"),
      p1cCometTailMotionPath = MorphSVGPlugin.pathDataToBezier(p1cCometTailPath, {align: p1cCometComet});
    tlp1C.set(p1cCometComet, {
      xPercent: -50,
      yPercent: -50
    });

    var p1cCometTailHider = p1ComicSVGid("p1cCometTailHider");
    MorphSVGPlugin.pathDataToBezier(p1cCometTailPath, {align: p1cCometTailHider});
    tlp1C.set(p1cCometTailHider, {
      xPercent: -85,
      yPercent: 0
    });

    //Red masking window
    var redWindow = p1ComicSVGid("redWindow"),
      redWindowStroke = p1ComicSVGid("redWindowStroke"),
      redWindowClip = p1ComicSVGid("redWindowClip"),
      whiteBlink = p1ComicSVGid("whiteBlink");

    //Face and neck shadows
    var face1Shadow01 = p1ComicSVGid("face1Shadow01"),
      face1Shadow02 = p1ComicSVGid("face1Shadow02"),
      face2Shadow01 = p1ComicSVGid("face2Shadow01"),
      face2Shadow02 = p1ComicSVGid("face2Shadow02"),
      face3Shadow01 = p1ComicSVGid("face3Shadow01"),
      face3Shadow02 = p1ComicSVGid("face3Shadow02"),
      face4Shadow01 = p1ComicSVGid("face4Shadow01"),
      face4Shadow02 = p1ComicSVGid("face4Shadow02"),
      bangs3shadow00 = p1ComicSVGid("bangs3shadow00"),
      bangs3shadow01 = p1ComicSVGid("bangs3shadow01"),
      bangs3shadow02 = p1ComicSVGid("bangs3shadow02"),
      neck1Shadow01 = p1ComicSVGid("neck1Shadow01"),
      neck1Shadow02 = p1ComicSVGid("neck1Shadow02"),
      neck2Shadow01 = p1ComicSVGid("neck2Shadow01"),
      neck2Shadow02 = p1ComicSVGid("neck2Shadow02"),
      neck3Shadow01 = p1ComicSVGid("neck3Shadow01"),
      neck3Shadow02 = p1ComicSVGid("neck3Shadow02"),
      neck4Shadow02 = p1ComicSVGid("neck4Shadow02"),
      neck4Shadow01 = p1ComicSVGid("neck4Shadow01");

    //Hairs
    var bangs1_01 = p1ComicSVGid("bangs1_01"),
      bangs1_02 = p1ComicSVGid("bangs1_02"),
      bangs2_01 = p1ComicSVGid("bangs2_01"),
      bangs2_02 = p1ComicSVGid("bangs2_02"),
      bangs3_01 = p1ComicSVGid("bangs3_01"),
      bangs3_02 = p1ComicSVGid("bangs3_02");

    //Doggie tile
    var p1cWChatBox1 = p1DoggieSVGid("p1cWChatBox1"),
      p1cWChatBox2 = p1DoggieSVGid("p1cWChatBox2"),
      p1cWChatBox3 = p1DoggieSVGid("p1cWChatBox3"),
      p1cWChatIco1 = p1DoggieSVGid("p1cWChatIco1"),
      p1cWChatIco2 = p1DoggieSVGid("p1cWChatIco2"),
      p1cWChatIco3 = p1DoggieSVGid("p1cWChatIco3"),
      p1cWChatBox2m = p1DoggieSVGid("p1cWChatBox2m");

    console.log("page 1 anim started");
    //Animation

    ///

    if (p1AnimStarted === true) {
      //      tlp1C.seek(10);
    }

    p1AnimStarted = true;
    //Credits
    tlp1C.fromTo(openingLogo, 1.5, {
      attr: {
        "fill-opacity": 0
      }
    }, {
      attr: {
        "fill-opacity": 1
      }
    }, "creditsStart").to(openingLogo, 1.2, {
      attr: {
        "fill-opacity": 0
      }
    }, "+=0.2").fromTo(openingCredits, 1.5, {
      attr: {
        "fill-opacity": 0
      }
    }, {
      attr: {
        "fill-opacity": 1
      }
    }, "+=0.3", "creditsEnd").to(openingCredits, 1.2, {
      attr: {
        "fill-opacity": 0
      }
    }, "+=0.2").to(p1cCloud01, 9, {
      x: 20
    }, "creditsStart");

    //Scale down
    tlp1C.to(p1cBackground, 5, {
      attr: {
        "transform": "matrix(1, 0, 0, 1, 1, 1)"
      },
      ease: Power1.easeIn
    }, "-=3.6").fromTo(openingTitle, 3, {
      x: -400,
      y: 180
    }, {
      x: 0,
      y: 0
    }, "scaledDown-=2.5").fromTo(p1cC2, 0.6, {
      x: -40,
      y: 25
    }, {
      x: 0,
      y: 0
    }, "scaledDown-=0.5").fromTo(p1cC1, 0.8, {
      x: 60,
      y: 40
    }, {
      x: 0,
      y: 0
    }, "scaledDown-=0.6").fromTo(p1cC3, 1, {
      x: -55,
      y: -35
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=1").fromTo(path89, 1.6, {
      x: 15,
      y: -15
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=2").fromTo(p1cC4, 1, {
      x: 50,
      y: -40
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=1").fromTo(p1cC5, 1, {
      x: -50,
      y: -35
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=0.9").to(p1cForeground, 1, {
      y: -2
    }, "scaleStart-=1.4").fromTo(p1cManSilhouette, 1, {
      x: 50,
      y: 50
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=1.2").fromTo(p1cDoge, 1, {
      x: -50,
      y: 50
    }, {
      x: 0,
      y: 0
    }, "scaleStart-=1.4").to(p1cDogeEye01, 0.8, {
      morphSVG: {
        shape: p1cDogeEye02,
        shapeIndex: 1
      }
    }, "scaleStart+=0.7").to(p1cDogeEye01, 1.2, {
      morphSVG: {
        shape: p1cDogeEye01,
        shapeIndex: 1
      }
    }, "scaleStart+=2.6").to([
      p1cChatBox1, p1cChatIco1
    ], 1, {
      x: + 50,
      y: + 50,
      opacity: 1
    }, "scaleStart+=1.5").from([
      p1cCometComet, p1cCometTailHider
    ], 15, {
      bezier: {
        values: p1cCometTailMotionPath,
        type: "cubic"
      },
      ease: Power3.easeOut
    }, "scaleStart-=2");

    tlp1C.to([
      redWindow, redWindowStroke, redWindowClip
    ], 1.5, {
      x: 500,
      ease: Power3.easeOut
    }, "windowSlide-=9").to(whiteBlink, 0.4, {
      "fill-opacity": 0.8
    }, "windowSlide-=8").to(whiteBlink, 0.6, {
      "fill-opacity": 0
    }, "windowSlide-=7.5").to(face1Shadow02, 3.3, {
      morphSVG: {
        shape: face1Shadow01,
        shapeIndex: 1
      }
    }, "windowSlide-=7.4").to(face2Shadow01, 3.3, {
      morphSVG: {
        shape: face2Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(face3Shadow01, 3.3, {
      morphSVG: {
        shape: face3Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(face4Shadow01, 3.3, {
      morphSVG: {
        shape: face4Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(bangs3shadow00, 3.3, {
      morphSVG: {
        shape: bangs3shadow01,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(neck1Shadow01, 3.3, {
      morphSVG: {
        shape: neck1Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(neck2Shadow01, 3.3, {
      morphSVG: {
        shape: neck2Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(neck3Shadow01, 3.3, {
      morphSVG: {
        shape: neck3Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").to(neck4Shadow01, 3.3, {
      morphSVG: {
        shape: neck4Shadow02,
        shapeIndex: 0
      }
    }, "windowSlide-=7.4").call(p1CStandardAnimation, [], this, "-=4.7");

    tlp1C.to([
      p1cChatBox2, p1cChatIco2
    ], 1, {
      x: -50,
      y: + 50,
      opacity: 1
    }, "windowSlide-=6").to([
      p1cChatBox3, p1cChatIco3
    ], 1, {
      x: -30,
      y: + 50,
      opacity: 1
    }, "windowSlide-=3").to([
      p1cWChatBox1, p1cWChatIco1
    ], 1, {
      x: -30,
      y: + 50,
      opacity: 1
    }, "windowSlide").to([
      p1cWChatBox2, p1cWChatIco2, p1cWChatBox2m
    ], 1, {
      x: + 30,
      y: + 50,
      opacity: 1
    }, "windowSlide+=0.2").to([
      p1cWChatBox3, p1cWChatIco3
    ], 1, {
      x: -30,
      y: + 50,
      opacity: 1
    }, "windowSlide+=0.4");

    function p1CStandardAnimation() {

      //Hair and shadows
      tlp1CSt.play().to(bangs3shadow00, 1.3, {
        morphSVG: {
          shape: bangs3shadow02,
          shapeIndex: 0
        },
        ease: Power2.easeIn
      }, "hairsAStart").to(bangs3_01, 1.3, {
        morphSVG: {
          shape: bangs3_02,
          shapeIndex: 0
        },
        ease: Power2.easeIn
      }, "hairsAStart").to(bangs2_01, 1.3, {
        morphSVG: {
          shape: bangs2_02,
          shapeIndex: 0
        },
        ease: Power2.easeIn
      }, "hairsAStart+=0.4").to(bangs1_01, 1.3, {
        morphSVG: {
          shape: bangs1_02,
          shapeIndex: 0
        },
        ease: Power2.easeIn
      }, "hairsAStart+=0.7").to(bangs3shadow00, 1.3, {
        morphSVG: {
          shape: bangs3shadow01,
          shapeIndex: 0
        },
        ease: Power2.easeOut
      }, "hairsEnd-=0.4").to(bangs3_01, 1.3, {
        morphSVG: {
          shape: bangs3_01,
          shapeIndex: 0
        },
        ease: Power2.easeOut
      }, "hairsEnd-=0.4").to(bangs2_01, 1.3, {
        morphSVG: {
          shape: bangs2_01,
          shapeIndex: 0
        },
        ease: Power2.easeOut
      }, "hairsEnd").to(bangs1_01, 1.3, {
        morphSVG: {
          shape: bangs1_01,
          shapeIndex: 0
        },
        ease: Power2.easeOut
      }, "hairsEnd+=0.3");
    }
  }

  //******Page 2 animations***************************************

  function p2Animation() {
    //Page 1 Tiles
    var p2ComicTile = document.getElementById("p2ComicTile"),
      p2ComicSVG = p2ComicTile.contentDocument;

    function p2ComicSVGid(id) {
      return p2ComicSVG.getElementById(id);
    }
    //Scene
    var p2cg234 = p2ComicSVGid("g234");
    //Wolf
    var p2cWolf01Body = p2ComicSVGid("p2cWolf01Body"),
      p2cWolf01BodyWind = p2ComicSVGid("p2cWolf01BodyWind"),
      p2cWolf02Body = p2ComicSVGid("p2cWolf02Body"),
      p2cWolf02BodyWind = p2ComicSVGid("p2cWolf02BodyWind"),
      p2cWolf01Eye = p2ComicSVGid("p2cWolf01Eye"),
      p2cWolf02Eye = p2ComicSVGid("p2cWolf02Eye"),
      p2cWolf01EyeBlink = p2ComicSVGid("p2cWolf01EyeBlink"),
      p2cWolf01Gum = p2ComicSVGid("p2cWolf01Gum"),
      p2cWolf02Gum = p2ComicSVGid("p2cWolf02Gum"),
      p2cWolf01UTeeth = p2ComicSVGid("p2cWolf01UTeeth"),
      p2cWolf02UTeeth = p2ComicSVGid("p2cWolf02UTeeth"),
      p2cWolf01LTeeth = p2ComicSVGid("p2cWolf01LTeeth"),
      p2cWolf02LTeeth = p2ComicSVGid("p2cWolf02LTeeth");
    //Owl
    var p2cOwl01 = p2ComicSVGid("p2cOwl01"),
      path107 = p2ComicSVGid("path107"), //owl body clip-path
      p2cOwl01beak = p2ComicSVGid("p2cOwl01beak"),
      p2cOwl01lEye = p2ComicSVGid("p2cOwl01lEye"),
      p2cOwl01rEye = p2ComicSVGid("p2cOwl01rEye"),
      p2cOwl01lEyeBlink = p2ComicSVGid("p2cOwl01lEyeBlink"),
      p2cOwl01face = p2ComicSVGid("p2cOwl01face"),
      p2cOwl02 = p2ComicSVGid("p2cOwl02"),
      p2cOwl02beak = p2ComicSVGid("p2cOwl02beak"),
      p2cOwl02rEye = p2ComicSVGid("p2cOwl02rEye"),
      p2cOwl02rEyeBlink = p2ComicSVGid("p2cOwl02rEyeBlink"),
      p2cOwl02lEye = p2ComicSVGid("p2cOwl02lEye"),
      p2cOwl02lEyeBlink = p2ComicSVGid("p2cOwl02lEyeBlink"),
      p2cOwl02face = p2ComicSVGid("p2cOwl02face"),
      p2cOwl02a = p2ComicSVGid("p2cOwl02a"),
      p2cOwl02abeak = p2ComicSVGid("p2cOwl02abeak"),
      p2cOwl02arEye = p2ComicSVGid("p2cOwl02arEye"),
      p2cOwl02arEyeBlink = p2ComicSVGid("p2cOwl02arEyeBlink"),
      p2cOwl02alEye = p2ComicSVGid("p2cOwl02alEye"),
      p2cOwl02alEyeBlink = p2ComicSVGid("p2cOwl02alEyeBlink"),
      p2cOwl02aface = p2ComicSVGid("p2cOwl02aface"),
      p2cOwl03 = p2ComicSVGid("p2cOwl03"),
      p2cOwl03beak = p2ComicSVGid("p2cOwl03beak"),
      p2cOwl03rEye = p2ComicSVGid("p2cOwl03rEye"),
      p2cOwl03lEye = p2ComicSVGid("p2cOwl03lEye"),
      p2cOwl03face = p2ComicSVGid("p2cOwl03face"),
      p2cOwl04rDarkWing01 = p2ComicSVGid("p2cOwl04rDarkWing01"),
      p2cOwl04lDarkWing01 = p2ComicSVGid("p2cOwl04lDarkWing01"),
      p2cOwl04a = p2ComicSVGid("p2cOwl04a"), //copy
      p2cOwl04aWBody = p2ComicSVGid("p2cOwl04aWBody"),
      p2cOwl04aface = p2ComicSVGid("p2cOwl04aface"),
      p2cOwl04alEye = p2ComicSVGid("p2cOwl04alEye"),
      p2cOwl04arEye = p2ComicSVGid("p2cOwl04arEye"),
      p2cOwl04abeak = p2ComicSVGid("p2cOwl04abeak"),
      p2cOwl04alDarkWing02 = p2ComicSVGid("p2cOwl04alDarkWing02"),
      p2cOwl04arDarkWing02 = p2ComicSVGid("p2cOwl04arDarkWing02"),
      p2cOwl04aWBodyClip = p2ComicSVGid("p2cOwl04aWBodyClip"), //Owl body new clip path      end of copy
      p2cOwl05rDarkWing01 = p2ComicSVGid("p2cOwl05rDarkWing01"),
      p2cOwl05lDarkWing01 = p2ComicSVGid("p2cOwl05lDarkWing01"),
      p2cOwl05WBody = p2ComicSVGid("p2cOwl05WBody"),
      p2cOwl05beak = p2ComicSVGid("p2cOwl05beak"),
      p2cOwl05rEye = p2ComicSVGid("p2cOwl05rEye"),
      p2cOwl05lEye = p2ComicSVGid("p2cOwl05lEye"),
      p2cOwl05face = p2ComicSVGid("p2cOwl05face"),
      p2cOwl06WBody = p2ComicSVGid("p2cOwl06WBody"), //next
      p2cOwl06face = p2ComicSVGid("p2cOwl06face"),
      p2cOwl06lEye = p2ComicSVGid("p2cOwl06lEye"),
      p2cOwl06rEye = p2ComicSVGid("p2cOwl06rEye"),
      p2cOwl06beak = p2ComicSVGid("p2cOwl06beak"),
      p2cOwl07WBody = p2ComicSVGid("p2cOwl07WBody"), //next
      p2cOwl07face = p2ComicSVGid("p2cOwl07face"),
      p2cOwl07lEye = p2ComicSVGid("p2cOwl07lEye"),
      p2cOwl07rEye = p2ComicSVGid("p2cOwl07rEye"),
      p2cOwl07beak = p2ComicSVGid("p2cOwl07beak"), //next
      p2cOwl08WBody = p2ComicSVGid("p2cOwl08WBody"),
      p2cOwlMP = p2ComicSVGid("p2cOwlMP"),
      p2cOwlAnimPath = MorphSVGPlugin.pathDataToBezier(p2cOwlMP, {align: "relative"});

    //TODO align to an svg object
    // var path = MorphSVGPlugin.pathDataToBezier(".path",{offsetX:-10,offsetY:-10});

    /*
    p2cOwlAnimPath = MorphSVGPlugin.pathDataToBezier(p2cOwlMP, {
      align: p2cOwl04a
    });
    */

    //Chat
    var p2cChatBox1 = p2ComicSVGid("p2cChatBox1"),
      p2cChatIco1 = p2ComicSVGid("p2cChatIco1"),
      p2cChatBox2 = p2ComicSVGid("p2cChatBox2"),
      p2cChatIco2 = p2ComicSVGid("p2cChatIco2"),
      p2cChatBox3 = p2ComicSVGid("p2cChatBox3"),
      p2cChatIco3 = p2ComicSVGid("p2cChatIco3");
    //background
    var p2cMountain = p2ComicSVGid("p2cMountain"),
      p2cRuins = p2ComicSVGid("p2cRuins"),
      p2cMan = p2ComicSVGid("p2cMan");
    //stars
    var p2cStar1g = p2ComicSVGid("p2cStar1g"),
      p2cStar2g = p2ComicSVGid("p2cStar2g"),
      p2cStar3g = p2ComicSVGid("p2cStar3g"),
      p2cStar4g = p2ComicSVGid("p2cStar4g"),
      p2cStar5g = p2ComicSVGid("p2cStar5g"),
      p2cStar6g = p2ComicSVGid("p2cStar6g"),
      p2cStar7g = p2ComicSVGid("p2cStar7g"),
      p2cStar8g = p2ComicSVGid("p2cStar8g"),
      p2cStar9g = p2ComicSVGid("p2cStar9g"),
      p2cStar10g = p2ComicSVGid("p2cStar10g"),
      p2cStar11g = p2ComicSVGid("p2cStar11g");

    console.log("page 2 anim started");

    //loops
    function p2CWindLoop() {
      tlp2CWind.play().to(p2cWolf01Body, 1.4, {
        morphSVG: {
          shape: p2cWolf02BodyWind,
          shapeIndex: "auto"
        }
      }).to(p2cWolf01Body, 1.4, {
        morphSVG: {
          shape: p2cWolf02Body,
          shapeIndex: "auto"
        }
      }, "+=0.2");
    }

    function starAnimTo(star, number) {
      var rnd = randomRotation(60, 25, number);
      var webkit = rnd + " " + randomScale(0.6, 0.3);
      var others = rnd;
      TweenMax.to(star, 1.2, {
        css: {
          "-webkit-transform": webkit,
          "-moz-transform": others,
          "-o-transform": others
        }
      });
    }

    //          "-ms-transform": others,

    function starAnimFrom(star, number) {
      var rnd = randomRotationReturn[number];
      var webkit = "rotate(" + rnd + "deg) scale(1)";
      var others = "rotate(" + rnd + "deg)";
      TweenMax.to(star, 1.2, {
        css: {
          "-webkit-transform": webkit,
          "-moz-transform": others,
          "-o-transform": others
        }
      });
    }

    //          "-ms-transform": others,

    function p2CStarsLoop() {
      tlp2cStar1.play().call(starAnimTo, [
        p2cStar1g, 0
      ], this, "start").call(starAnimFrom, [
        p2cStar1g, 0
      ], this, "start+=1.2");
      tlp2cStar2.play().call(starAnimTo, [
        p2cStar2g, 1
      ], this, "start").call(starAnimFrom, [
        p2cStar2g, 1
      ], this, "start+=1.2");
      tlp2cStar3.play().call(starAnimTo, [
        p2cStar3g, 2
      ], this, "start").call(starAnimFrom, [
        p2cStar3g, 2
      ], this, "start+=1.2");
      tlp2cStar4.play().call(starAnimTo, [
        p2cStar4g, 3
      ], this, "start").call(starAnimFrom, [
        p2cStar4g, 3
      ], this, "start+=1.2");
      tlp2cStar5.play().call(starAnimTo, [
        p2cStar5g, 4
      ], this, "start").call(starAnimFrom, [
        p2cStar5g, 4
      ], this, "start+=1.2");
      tlp2cStar6.play().call(starAnimTo, [
        p2cStar6g, 5
      ], this, "start").call(starAnimFrom, [
        p2cStar6g, 5
      ], this, "start+=1.2");
      tlp2cStar7.play().call(starAnimTo, [
        p2cStar7g, 6
      ], this, "start").call(starAnimFrom, [
        p2cStar7g, 6
      ], this, "start+=1.2");
      tlp2cStar8.play().call(starAnimTo, [
        p2cStar8g, 7
      ], this, "start").call(starAnimFrom, [
        p2cStar8g, 7
      ], this, "start+=1.2");
      tlp2cStar9.play().call(starAnimTo, [
        p2cStar9g, 8
      ], this, "start").call(starAnimFrom, [
        p2cStar9g, 8
      ], this, "start+=1.2");
      tlp2cStar10.play().call(starAnimTo, [
        p2cStar10g, 9
      ], this, "start").call(starAnimFrom, [
        p2cStar10g, 9
      ], this, "start+=1.2");
      tlp2cStar11.play().call(starAnimTo, [
        p2cStar11g, 10
      ], this, "start").call(starAnimFrom, [
        p2cStar11g, 10
      ], this, "start+=1.2");
    }

    //blinks and wind
    tlp2C.call(p2CStarsLoop, [], this, "0").to(p2cWolf01Body, 1, {
      morphSVG: {
        shape: p2cWolf01Body,
        shapeIndex: "0"
      }
    }, "animStart+=1").to(p2cWolf01Body, 1, {
      morphSVG: {
        shape: p2cWolf01BodyWind,
        shapeIndex: "0"
      }
    }, "animStart+=2").to(p2cWolf01Body, 1, {
      morphSVG: {
        shape: p2cWolf01Body,
        shapeIndex: "0"
      }
    }, "animStart+=3").to(p2cWolf01Eye, 0.8, {
      morphSVG: {
        shape: p2cWolf01EyeBlink,
        shapeIndex: "0"
      }
    }, "animStart").to(p2cWolf01Eye, 0.8, {
      morphSVG: {
        shape: p2cWolf01Eye,
        shapeIndex: "0"
      }
    }, "animStart+=0.8").to(p2cWolf01Eye, 0.8, {
      morphSVG: {
        shape: p2cWolf01EyeBlink,
        shapeIndex: "0"
      }
    }, "animStart+=2.8").to(p2cWolf01Eye, 0.8, {
      morphSVG: {
        shape: p2cWolf01Eye,
        shapeIndex: "0"
      }
    }, "animStart+=3.6").to(p2cOwl01lEye, 0.8, {
      morphSVG: {
        shape: p2cOwl01lEyeBlink,
        shapeIndex: "0"
      }
    }, "animStart+=1.4").to(p2cOwl01lEye, 0.8, {
      morphSVG: {
        shape: p2cOwl01lEye,
        shapeIndex: "0"
      }
    }, "animStart+=2.2");

    //owl head turn
    tlp2C.to([
      p2cOwl01, path107
    ], 1, {
      morphSVG: {
        shape: p2cOwl02,
        shapeIndex: "0"
      }
    }, "owlHeadTurn").to(p2cOwl01rEye, 1, {
      morphSVG: {
        shape: p2cOwl02rEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn").to(p2cOwl01lEye, 1, {
      morphSVG: {
        shape: p2cOwl02lEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn").to(p2cOwl01beak, 1, {
      morphSVG: {
        shape: p2cOwl02beak,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn").to(p2cOwl01face, 1, {
      morphSVG: {
        shape: p2cOwl02face,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn");

    //wolf head turn and chat
    tlp2C.to(p2cWolf01Body, 1.2, {
      morphSVG: {
        shape: p2cWolf02Body,
        shapeIndex: "auto"
      },
      ease: Power2.easeInOut
    }, "wolfHeadTurn").to(p2cWolf01Eye, 1.2, {
      morphSVG: {
        shape: p2cWolf02Eye,
        shapeIndex: "auto"
      },
      ease: Power2.easeInOut
    }, "wolfHeadTurn").to(p2cWolf01Gum, 1.2, {
      morphSVG: {
        shape: p2cWolf02Gum,
        shapeIndex: "auto"
      },
      ease: Power2.easeInOut
    }, "wolfHeadTurn").to(p2cWolf01UTeeth, 1.2, {
      morphSVG: {
        shape: p2cWolf02UTeeth,
        shapeIndex: "auto"
      },
      ease: Power2.easeInOut
    }, "wolfHeadTurn").to(p2cWolf01LTeeth, 1.2, {
      morphSVG: {
        shape: p2cWolf02LTeeth,
        shapeIndex: "auto"
      },
      ease: Power2.easeInOut
    }, "wolfHeadTurn").call(p2CWindLoop, [], this, "wolfHeadTurn+=1.3").to([
      p2cChatBox1, p2cChatIco1
    ], 1, {
      x: -10,
      y: + 50,
      opacity: 1
    }).to(p2cOwl01lEye, 0.6, {
      morphSVG: {
        shape: p2cOwl02lEyeBlink,
        shapeIndex: "auto"
      }
    }, "blink02").to(p2cOwl01lEye, 0.6, {
      morphSVG: {
        shape: p2cOwl02lEye,
        shapeIndex: "auto"
      }
    }, "blink02+=0.7").to(p2cOwl01rEye, 0.6, {
      morphSVG: {
        shape: p2cOwl02rEyeBlink,
        shapeIndex: "auto"
      }
    }, "blink02").to(p2cOwl01rEye, 0.6, {
      morphSVG: {
        shape: p2cOwl02rEye,
        shapeIndex: "auto"
      }
    }, "blink02+=0.7");

    //owl creepy turn and chat
    tlp2C.to([
      p2cOwl01, path107
    ], 0.7, {
      morphSVG: {
        shape: p2cOwl02a,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2a").to(p2cOwl01rEye, 0.7, {
      morphSVG: {
        shape: p2cOwl02arEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2a").to(p2cOwl01lEye, 0.7, {
      morphSVG: {
        shape: p2cOwl02alEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2a").to(p2cOwl01beak, 0.7, {
      morphSVG: {
        shape: p2cOwl02abeak,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2a").to(p2cOwl01face, 0.7, {
      morphSVG: {
        shape: p2cOwl02aface,
        shapeIndex: "0"
      }
    }, "owlHeadTurn2a").to([
      p2cChatBox2, p2cChatIco2
    ], 1, {
      x: + 10,
      y: + 50,
      opacity: 1
    }, "+=1");

    //owl's creepy turn-return
    tlp2C.to([
      p2cOwl01, path107
    ], 0.7, {
      morphSVG: {
        shape: p2cOwl02,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2").to(p2cOwl01rEye, 0.7, {
      morphSVG: {
        shape: p2cOwl02rEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2").to(p2cOwl01lEye, 0.7, {
      morphSVG: {
        shape: p2cOwl02lEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2").to(p2cOwl01beak, 0.7, {
      morphSVG: {
        shape: p2cOwl02beak,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn2").to(p2cOwl01face, 0.7, {
      morphSVG: {
        shape: p2cOwl02face,
        shapeIndex: "0"
      }
    }, "owlHeadTurn2");

    //Owl: ready...
    tlp2C.to([
      p2cOwl01, path107
    ], 0.5, {
      morphSVG: {
        shape: p2cOwl03,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn3").to(p2cOwl01rEye, 0.5, {
      morphSVG: {
        shape: p2cOwl03rEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn3").to(p2cOwl01lEye, 0.5, {
      morphSVG: {
        shape: p2cOwl03lEye,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn3").to(p2cOwl01beak, 0.5, {
      morphSVG: {
        shape: p2cOwl03beak,
        shapeIndex: "auto"
      }
    }, "owlHeadTurn3").to(p2cOwl01face, 0.5, {
      morphSVG: {
        shape: p2cOwl03face,
        shapeIndex: "0"
      }
    }, "owlHeadTurn3").to([
      p2cChatBox3, p2cChatIco3
    ], 1, {
      x: -10,
      y: + 50,
      opacity: 1
    }, "owlHeadTurn3+=0.6");

    //Owl: steady...
    tlp2C.to([
      p2cOwl04rDarkWing01, p2cOwl04lDarkWing01
    ], 0.1, {
      css: {
        opacity: 1
      }
    }, "owlflap1-=0.8").to(p2cOwl04lDarkWing01, 0.5, {
      morphSVG: {
        shape: p2cOwl04alDarkWing02,
        shapeIndex: "auto"
      }
    }, "owlflap1-=0.8").to(p2cOwl04rDarkWing01, 0.5, {
      morphSVG: {
        shape: p2cOwl04arDarkWing02,
        shapeIndex: "auto"
      }
    }, "owlflap1-=0.8").to([
      p2cOwl01, path107
    ], 0.5, {
      morphSVG: {
        shape: p2cOwl04aWBody,
        shapeIndex: "-48"
      }
    }, "owlflap1-=0.8").to(p2cOwl01rEye, 0.5, {
      morphSVG: {
        shape: p2cOwl04arEye,
        shapeIndex: "auto"
      }
    }, "owlflap1-=0.8").to(p2cOwl01lEye, 0.5, {
      morphSVG: {
        shape: p2cOwl04alEye,
        shapeIndex: "auto"
      }
    }, "owlflap1-=0.8").to(p2cOwl01beak, 0.5, {
      morphSVG: {
        shape: p2cOwl04abeak,
        shapeIndex: "auto"
      }
    }, "owlflap1-=0.8").to(p2cOwl01face, 0.5, {
      morphSVG: {
        shape: p2cOwl04aface,
        shapeIndex: "0"
      }
    }, "owlflap1-=0.8");

    //Owl: GO!!!
    tlp2C.to([
      p2cOwl04aWBody,
      p2cOwl04aface,
      p2cOwl04alEye,
      p2cOwl04arEye,
      p2cOwl04abeak,
      p2cOwl04alDarkWing02,
      p2cOwl04arDarkWing02
    ], 0, {
      css: {
        opacity: 1
      }
    }, "owlflap2-=0.3").to([
      p2cOwl04rDarkWing01,
      p2cOwl04lDarkWing01,
      p2cOwl01,
      p2cOwl01rEye,
      p2cOwl01lEye,
      p2cOwl01beak,
      p2cOwl01face
    ], 0, {
      css: {
        opacity: 0
      }
    }, "owlflap2-=0.27");

    /*
    var tlp2CBez = TweenMax.to([p2cOwl04a], 4, {
      bezier: {
        values: p2cOwlAnimPath,
        type: "cubic"
      },
      ease: Power2.easeInOut
    });
    */

    /*
    tlp2C.to(tlp2CBez, 0.2 * tlp2CBez.duration(), {
      progress: 0.2
    }, "owlflap3");
    */

    //This one is the right one

    tlp2C.to([
      p2cOwl04aWBody,
      p2cOwl04aWBodyClip,
      p2cOwl04aface,
      p2cOwl04alEye,
      p2cOwl04arEye,
      p2cOwl04abeak,
      p2cOwl04alDarkWing02,
      p2cOwl04arDarkWing02
    ], 4, {
      bezier: {
        values: p2cOwlAnimPath,
        type: "cubic"
      },
      ease: Power2.easeInOut
    }, "volol-=0.25");

    //      ease: Power2.easeInOut

    //to bottom point
    tlp2C.to([
      p2cOwl04aWBody, p2cOwl04aWBodyClip
    ], 1, {
      morphSVG: {
        shape: p2cOwl05WBody,
        shapeIndex: "83"
      }
    }, "owlflap3-=3.5").to(p2cOwl04aface, 1, {
      morphSVG: {
        shape: p2cOwl05face,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to(p2cOwl04alEye, 1, {
      morphSVG: {
        shape: p2cOwl05lEye,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to(p2cOwl04arEye, 1, {
      morphSVG: {
        shape: p2cOwl05rEye,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to(p2cOwl04abeak, 1, {
      morphSVG: {
        shape: p2cOwl05beak,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to(p2cOwl04alDarkWing02, 1, {
      morphSVG: {
        shape: p2cOwl05lDarkWing01,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to(p2cOwl04arDarkWing02, 1, {
      morphSVG: {
        shape: p2cOwl05rDarkWing01,
        shapeIndex: "auto"
      }
    }, "owlflap3-=3.5").to([
      p2cOwl04alDarkWing02, p2cOwl04arDarkWing02
    ], 0.1, {
      css: {
        opacity: 0
      }
    }, "owlflap3-=3.3");

    //to side fly
    tlp2C.to([
      p2cOwl04aWBody, p2cOwl04aWBodyClip
    ], 0.8, {
      morphSVG: {
        shape: p2cOwl06WBody,
        shapeIndex: "4"
      }
    }, "owlflap4-=2.5").to(p2cOwl04aface, 0.8, {
      morphSVG: {
        shape: p2cOwl06face,
        shapeIndex: "auto"
      }
    }, "owlflap4-=2.5").to(p2cOwl04alEye, 0.8, {
      morphSVG: {
        shape: p2cOwl06lEye,
        shapeIndex: "auto"
      }
    }, "owlflap4-=2.5").to(p2cOwl04arEye, 0.8, {
      morphSVG: {
        shape: p2cOwl06rEye,
        shapeIndex: "auto"
      }
    }, "owlflap4-=2.5").to(p2cOwl04abeak, 0.8, {
      morphSVG: {
        shape: p2cOwl06beak,
        shapeIndex: "auto"
      }
    }, "owlflap4-=2.5");

    //Owl side fly from

    tlp2C.to([
      p2cOwl04aWBody, p2cOwl04aWBodyClip
    ], 0.8, {
      morphSVG: {
        shape: p2cOwl07WBody,
        shapeIndex: "99"
      }
    }, "owlflap5-=1.7").to(p2cOwl04aface, 0.8, {
      morphSVG: {
        shape: p2cOwl06face,
        shapeIndex: "auto"
      }
    }, "owlflap5-=1.7").to(p2cOwl04alEye, 0.8, {
      morphSVG: {
        shape: p2cOwl07lEye,
        shapeIndex: "auto"
      }
    }, "owlflap5-=1.7").to(p2cOwl04arEye, 0.8, {
      morphSVG: {
        shape: p2cOwl07rEye,
        shapeIndex: "auto"
      }
    }, "owlflap5-=1.7").to(p2cOwl04abeak, 0.8, {
      morphSVG: {
        shape: p2cOwl07beak,
        shapeIndex: "auto"
      }
    }, "owlflap5-=1.7").to([
      p2cOwl04aface, p2cOwl04alEye, p2cOwl04arEye, p2cOwl04abeak
    ], 0.3, {
      css: {
        opacity: 0
      }
    }, "owlflap5-=1.6");

    //owl flies off...
    tlp2C.to([
      p2cOwl04aWBody, p2cOwl04aWBodyClip
    ], 0.7, {
      morphSVG: {
        shape: p2cOwl08WBody,
        shapeIndex: "-65"
      }
    }, "owlflap6-=0.8").to(p2cOwl04aWBody, 1, {
      scale: 0.3,
      transformOrigin: "80% 70%",
      opacity: 0
    }, "owlflap6-=0.2");

  }

  //******Page 3 animations***************************************

  function p3Animation() {

    //Page 3 Comic Tile
    var p3ComicTile = document.getElementById("p3ComicTile"),
      p3ComicSVG = p3ComicTile.contentDocument;

    function p3ComicSVGid(id) {
      return p3ComicSVG.getElementById(id);
    }

    //Water distortion
    var turbwave = p3ComicSVGid("turbwave")
    tlp3CRipples.to(turbwave, 8, {
      attr: {
        "baseFrequency": 0.04
      },
      repeat: -1,
      yoyo: true
    });

    var p3ComicTileMoon = p3ComicSVGid("p3ComicTileMoon");

    //Stars
    var p3ComicTileStar1g = p3ComicSVGid("p3ComicTileStar1g"),
      p3ComicTileStar2g = p3ComicSVGid("p3ComicTileStar2g"),
      p3ComicTileStar3g = p3ComicSVGid("p3ComicTileStar3g"),
      p3ComicTileStar4g = p3ComicSVGid("p3ComicTileStar4g"),
      p3ComicTileStar5g = p3ComicSVGid("p3ComicTileStar5g"),
      p3ComicTileStar6g = p3ComicSVGid("p3ComicTileStar6g"),
      p3ComicTileStar7g = p3ComicSVGid("p3ComicTileStar7g"),
      p3ComicTileStar8g = p3ComicSVGid("p3ComicTileStar8g");
    // reflected Stars
    var p3ComicTileStar1wg = p3ComicSVGid("p3ComicTileStar1wg"),
      p3ComicTileStar2wg = p3ComicSVGid("p3ComicTileStar2wg"),
      p3ComicTileStar3wg = p3ComicSVGid("p3ComicTileStar3wg"),
      p3ComicTileStar4wg = p3ComicSVGid("p3ComicTileStar4wg"),
      p3ComicTileStar5wg = p3ComicSVGid("p3ComicTileStar5wg"),
      p3ComicTileStar6wg = p3ComicSVGid("p3ComicTileStar6wg"),
      p3ComicTileStar7wg = p3ComicSVGid("p3ComicTileStar7wg");
    // shadows
    var p3ComicTileTreeRootL0 = p3ComicSVGid("p3ComicTileTreeRootL0"),
      p3ComicTileTreeRootL1 = p3ComicSVGid("p3ComicTileTreeRootL1"),
      p3ComicTileTreeRootB0 = p3ComicSVGid("p3ComicTileTreeRootB0"),
      p3ComicTileTreeRootB1 = p3ComicSVGid("p3ComicTileTreeRootB1"),
      p3ComicTileTreeRootR0 = p3ComicSVGid("p3ComicTileTreeRootR0"),
      p3ComicTileTreeRootR1 = p3ComicSVGid("p3ComicTileTreeRootR1"),
      p3ComicTileTreeShadow0 = p3ComicSVGid("p3ComicTileTreeShadow0"),
      p3ComicTileTreeShadow1 = p3ComicSVGid("p3ComicTileTreeShadow1"),
      p3ComicWolfShadow0 = p3ComicSVGid("p3ComicWolfShadow0"),
      p3ComicWolfShadow1 = p3ComicSVGid("p3ComicWolfShadow1");
    // tree
    var p3ComicTileTreeBranchLeftCroneASnow0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneASnow0"),
      p3ComicTileTreeBranchLeftCroneASnow1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneASnow1"),
      p3ComicTileTreeTrunk0Crone0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone0"),
      p3ComicTileTreeTrunk0Crone1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1"),
      p3ComicTileTreeTrunk0Crone0SnowB0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone0SnowB0"),
      p3ComicTileTreeTrunk0Crone0SnowB1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone0SnowB1"),
      p3ComicTileTreeBranchLeftCroneA0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneA0"),
      p3ComicTileTreeBranchLeftCroneA1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneA1"),
      p3ComicTileTreeBranchLeftCroneB0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneB0"),
      p3ComicTileTreeBranchLeftCroneB1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneB1"),
      p3ComicTileTreeBranchLeftCroneCBranchA0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchA0"),
      p3ComicTileTreeBranchLeftCroneCBranchA1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchA1"),
      p3ComicTileTreeBranchLeftCroneCBranchB0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchB0"),
      p3ComicTileTreeBranchLeftCroneCBranchB1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchB1"),
      p3ComicTileTreeBranchUpper0 = p3ComicSVGid("p3ComicTileTreeBranchUpper0"),
      p3ComicTileTreeBranchUpper1 = p3ComicSVGid("p3ComicTileTreeBranchUpper1"),
      p3ComicTileTreeBranchUpperA0 = p3ComicSVGid("p3ComicTileTreeBranchUpperA0"),
      p3ComicTileTreeBranchUpperA1 = p3ComicSVGid("p3ComicTileTreeBranchUpperA1"),
      p3ComicTileTreeBranchUpperSnow0 = p3ComicSVGid("p3ComicTileTreeBranchUpperSnow0"),
      p3ComicTileTreeBranchUpperSnow1 = p3ComicSVGid("p3ComicTileTreeBranchUpperSnow1"),
      p3ComicTileTreeBranchBottomB0 = p3ComicSVGid("p3ComicTileTreeBranchBottomB0"),
      p3ComicTileTreeBranchBottomB1 = p3ComicSVGid("p3ComicTileTreeBranchBottomB1"),
      p3ComicTileTreeBranchBottomC0 = p3ComicSVGid("p3ComicTileTreeBranchBottomC0"),
      p3ComicTileTreeBranchBottomC1 = p3ComicSVGid("p3ComicTileTreeBranchBottomC1"),
      p3ComicTileTreeBranchBottomBSnow0 = p3ComicSVGid("p3ComicTileTreeBranchBottomBSnow0"),
      p3ComicTileTreeBranchBottomBSnow1 = p3ComicSVGid("p3ComicTileTreeBranchBottomBSnow1"),
      p3ComicTileTreeBranchBottomCSnow0 = p3ComicSVGid("p3ComicTileTreeBranchBottomCSnow0"),
      p3ComicTileTreeBranchBottomCSnow1 = p3ComicSVGid("p3ComicTileTreeBranchBottomCSnow1"),
      p3ComicTileTreeTrunk0 = p3ComicSVGid("p3ComicTileTreeTrunk0"),
      p3ComicTileTreeTrunk1 = p3ComicSVGid("p3ComicTileTreeTrunk1"),
      p3ComicTileTreeBranchLeft0 = p3ComicSVGid("p3ComicTileTreeBranchLeft0"),
      p3ComicTileTreeBranchLeft1 = p3ComicSVGid("p3ComicTileTreeBranchLeft1"),
      p3ComicTileTreeBranchLeftCroneABranchA0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneABranchA0"),
      p3ComicTileTreeBranchLeftCroneABranchA1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneABranchA1"),
      p3ComicTileTreeBranchLeftCroneBBranchA0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneBBranchA0"),
      p3ComicTileTreeBranchLeftCroneBBranchA1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneBBranchA1"),
      p3ComicTileTreeTrunk0Crone1BranchA0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchA0"),
      p3ComicTileTreeTrunk0Crone1BranchA1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchA1"),
      p3ComicTileTreeTrunk0Crone1BranchB0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchB0"),
      p3ComicTileTreeTrunk0Crone1BranchB1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchB1"),
      p3ComicTileTreeTrunk0Crone1BranchC0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchC0"),
      p3ComicTileTreeTrunk0Crone1BranchC1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone1BranchC1"),
      p3ComicTileTreeTrunkSnow0 = p3ComicSVGid("p3ComicTileTreeTrunkSnow0"),
      p3ComicTileTreeTrunkSnow1 = p3ComicSVGid("p3ComicTileTreeTrunkSnow1"),
      p3ComicTileTreeBranchLeftSnowA0 = p3ComicSVGid("p3ComicTileTreeBranchLeftSnowA0"),
      p3ComicTileTreeBranchLeftSnowA1 = p3ComicSVGid("p3ComicTileTreeBranchLeftSnowA1"),
      p3ComicTileTreeBranchLeftCroneBBranchB0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneBBranchB0"),
      p3ComicTileTreeBranchLeftCroneBBranchB1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneBBranchB1"),
      p3ComicTileTreeBranchLeftCroneABranchB0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneABranchB0"),
      p3ComicTileTreeBranchLeftCroneABranchB1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneABranchB1"),
      p3ComicTileTreeTrunk0Crone0SnowA0 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone0SnowA0"),
      p3ComicTileTreeTrunk0Crone0SnowA1 = p3ComicSVGid("p3ComicTileTreeTrunk0Crone0SnowA1"),
      p3ComicTileTreeBranchLeftCroneC0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneC0"),
      p3ComicTileTreeBranchLeftCroneC1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneC1"),
      p3ComicTileTreeBranchLeftCroneCSnow0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCSnow0"),
      p3ComicTileTreeBranchLeftCroneCSnow1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCSnow1"),
      p3ComicTileTreeBranchLeftCroneCBranchBSnow0 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchBSnow0"),
      p3ComicTileTreeBranchLeftCroneCBranchBSnow1 = p3ComicSVGid("p3ComicTileTreeBranchLeftCroneCBranchBSnow1"),
      p3ComicTileTreeBranchLeftSnowB0 = p3ComicSVGid("p3ComicTileTreeBranchLeftSnowB0"),
      p3ComicTileTreeBranchLeftSnowB1 = p3ComicSVGid("p3ComicTileTreeBranchLeftSnowB1");
    // chat
    var p3ComicChat1Box = p3ComicSVGid("p3ComicChat1Box"),
      p3ComicChat1Ico = p3ComicSVGid("p3ComicChat1Ico"),
      p3ComicChat2Box = p3ComicSVGid("p3ComicChat2Box"),
      p3ComicChat2Ico = p3ComicSVGid("p3ComicChat2Ico");
    // wolf
    var p3ComicWolfBody1 = p3ComicSVGid("p3ComicWolfBody1"),
      p3ComicWolfBody2 = p3ComicSVGid("p3ComicWolfBody2"),
      p3ComicWolfShadow2 = p3ComicSVGid("p3ComicWolfShadow2"),
      p3ComicWolfBody3 = p3ComicSVGid("p3ComicWolfBody3"),
      p3ComicWolfShadow3 = p3ComicSVGid("p3ComicWolfShadow3"),
      p3ComicWolfBody4 = p3ComicSVGid("p3ComicWolfBody4"),
      p3ComicWolfShadow4 = p3ComicSVGid("p3ComicWolfShadow4");

    var treeElements = [
      p3ComicTileTreeBranchLeftCroneASnow0,
      p3ComicTileTreeBranchLeftCroneASnow1,
      p3ComicTileTreeTrunk0Crone0,
      p3ComicTileTreeTrunk0Crone1,
      p3ComicTileTreeTrunk0Crone0SnowB0,
      p3ComicTileTreeTrunk0Crone0SnowB1,
      p3ComicTileTreeBranchLeftCroneA0,
      p3ComicTileTreeBranchLeftCroneA1,
      p3ComicTileTreeBranchLeftCroneB0,
      p3ComicTileTreeBranchLeftCroneB1,
      p3ComicTileTreeBranchLeftCroneCBranchA0,
      p3ComicTileTreeBranchLeftCroneCBranchA1,
      p3ComicTileTreeBranchLeftCroneCBranchB0,
      p3ComicTileTreeBranchLeftCroneCBranchB1,
      p3ComicTileTreeBranchUpper0,
      p3ComicTileTreeBranchUpper1,
      p3ComicTileTreeBranchUpperA0,
      p3ComicTileTreeBranchUpperA1,
      p3ComicTileTreeBranchUpperSnow0,
      p3ComicTileTreeBranchUpperSnow1,
      p3ComicTileTreeBranchBottomB0,
      p3ComicTileTreeBranchBottomB1,
      p3ComicTileTreeBranchBottomC0,
      p3ComicTileTreeBranchBottomC1,
      p3ComicTileTreeBranchBottomBSnow0,
      p3ComicTileTreeBranchBottomBSnow1,
      p3ComicTileTreeBranchBottomCSnow0,
      p3ComicTileTreeBranchBottomCSnow1,
      p3ComicTileTreeTrunk0,
      p3ComicTileTreeTrunk1,
      p3ComicTileTreeBranchLeft0,
      p3ComicTileTreeBranchLeft1,
      p3ComicTileTreeBranchLeftCroneABranchA0,
      p3ComicTileTreeBranchLeftCroneABranchA1,
      p3ComicTileTreeBranchLeftCroneBBranchA0,
      p3ComicTileTreeBranchLeftCroneBBranchA1,
      p3ComicTileTreeTrunk0Crone1BranchA0,
      p3ComicTileTreeTrunk0Crone1BranchA1,
      p3ComicTileTreeTrunk0Crone1BranchB0,
      p3ComicTileTreeTrunk0Crone1BranchB1,
      p3ComicTileTreeTrunk0Crone1BranchC0,
      p3ComicTileTreeTrunk0Crone1BranchC1,
      p3ComicTileTreeTrunkSnow0,
      p3ComicTileTreeTrunkSnow1,
      p3ComicTileTreeBranchLeftSnowA0,
      p3ComicTileTreeBranchLeftSnowA1,
      p3ComicTileTreeBranchLeftCroneBBranchB0,
      p3ComicTileTreeBranchLeftCroneBBranchB1,
      p3ComicTileTreeBranchLeftCroneABranchB0,
      p3ComicTileTreeBranchLeftCroneABranchB1,
      p3ComicTileTreeTrunk0Crone0SnowA0,
      p3ComicTileTreeTrunk0Crone0SnowA1,
      p3ComicTileTreeBranchLeftCroneC0,
      p3ComicTileTreeBranchLeftCroneC1,
      p3ComicTileTreeBranchLeftCroneCSnow0,
      p3ComicTileTreeBranchLeftCroneCSnow1,
      p3ComicTileTreeBranchLeftCroneCBranchBSnow0,
      p3ComicTileTreeBranchLeftCroneCBranchBSnow1,
      p3ComicTileTreeBranchLeftSnowB0,
      p3ComicTileTreeBranchLeftSnowB1
    ];

    function starAnimTo(star, number) {
      var rnd = randomRotation(60, 25, number);
      var webkit = rnd + " " + randomScale(0.6, 0.3);
      var others = rnd;
      TweenMax.to(star, 1.2, {
        css: {
          "-webkit-transform": webkit,
          "-moz-transform": others,
          "-o-transform": others
        }
      });
    }

    //          "-ms-transform": others,

    function starAnimFrom(star, number) {
      var rnd = randomRotationReturn[number];
      var webkit = "rotate(" + rnd + "deg) scale(1)";
      var others = "rotate(" + rnd + "deg)";
      TweenMax.to(star, 1.2, {
        css: {
          "-webkit-transform": webkit,
          "-moz-transform": others,
          "-o-transform": others
        }
      });
    }

    function p3CStarsLoop() {
      // stars
      tlp3cStar1.play().call(starAnimTo, [
        p3ComicTileStar1g, 0
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar1g, 0
      ], this, "start+=1.2");
      tlp3cStar2.play().call(starAnimTo, [
        p3ComicTileStar2g, 1
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar2g, 1
      ], this, "start+=1.2");
      tlp3cStar3.play().call(starAnimTo, [
        p3ComicTileStar3g, 2
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar3g, 2
      ], this, "start+=1.2");
      tlp3cStar4.play().call(starAnimTo, [
        p3ComicTileStar4g, 3
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar4g, 3
      ], this, "start+=1.2");
      tlp3cStar5.play().call(starAnimTo, [
        p3ComicTileStar5g, 4
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar5g, 4
      ], this, "start+=1.2");
      tlp3cStar6.play().call(starAnimTo, [
        p3ComicTileStar6g, 5
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar6g, 5
      ], this, "start+=1.2");
      tlp3cStar7.play().call(starAnimTo, [
        p3ComicTileStar7g, 6
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar7g, 6
      ], this, "start+=1.2");
      tlp3cStar8.play().call(starAnimTo, [
        p3ComicTileStar8g, 7
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar8g, 7
      ], this, "start+=1.2");
      // reflected stars
      tlp3cStar1w.play().call(starAnimTo, [
        p3ComicTileStar1wg, 8
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar1wg, 8
      ], this, "start+=1.2");
      tlp3cStar2w.play().call(starAnimTo, [
        p3ComicTileStar2wg, 9
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar2wg, 9
      ], this, "start+=1.2");
      tlp3cStar3w.play().call(starAnimTo, [
        p3ComicTileStar3wg, 10
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar3wg, 10
      ], this, "start+=1.2");
      tlp3cStar4w.play().call(starAnimTo, [
        p3ComicTileStar4wg, 11
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar4wg, 11
      ], this, "start+=1.2");
      tlp3cStar5w.play().call(starAnimTo, [
        p3ComicTileStar5wg, 12
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar5wg, 12
      ], this, "start+=1.2");
      tlp3cStar6w.play().call(starAnimTo, [
        p3ComicTileStar6wg, 13
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar6wg, 13
      ], this, "start+=1.2");
      tlp3cStar7w.play().call(starAnimTo, [
        p3ComicTileStar7wg, 14
      ], this, "start").call(starAnimFrom, [
        p3ComicTileStar7wg, 14
      ], this, "start+=1.2");
    }
    p3CStarsLoop();

    //animation durations
    var moonRise = 6,
      treeSwaying = 3,
      wolfDur1 = 1,
      wolfDur2 = 1,
      wolfDur3 = 1,
      wolfDur35 = 1.5;

    console.log("page 3 anim started");

    tlp3CTreeSwaying.pause();
    (function() {
      for (var i = 0; i < treeElements.length - 1; i += 2) {
        var elem0 = treeElements[i],
          elem1 = treeElements[i + 1];
        tlp3CTreeSwaying.to(elem0, treeSwaying, {
          morphSVG: {
            shape: elem1,
            shapeIndex: "auto"
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        }, 0);
      }
    })();
    tlp3CTreeSwaying.play();

    tlp3C.to(p3ComicTileMoon, moonRise, {
      attr: {
        cy: 68
      },
      ease: Power2.easeOut
    }, "moonRise").to(p3ComicTileTreeRootL0, moonRise, {
      morphSVG: {
        shape: p3ComicTileTreeRootL1,
        shapeIndex: "auto"
      }
    }, "moonRise").to(p3ComicTileTreeRootB0, moonRise, {
      morphSVG: {
        shape: p3ComicTileTreeRootB1,
        shapeIndex: "auto"
      }
    }, "moonRise").to(p3ComicTileTreeRootR0, moonRise, {
      morphSVG: {
        shape: p3ComicTileTreeRootR1,
        shapeIndex: "auto"
      }
    }, "moonRise").to(p3ComicTileTreeShadow0, moonRise, {
      morphSVG: {
        shape: p3ComicTileTreeShadow1,
        shapeIndex: "auto"
      }
    }, "moonRise").to(p3ComicWolfShadow0, moonRise, {
      morphSVG: {
        shape: p3ComicWolfShadow1,
        shapeIndex: "auto"
      }
    }, "moonRise");

    // chat animation
    tlp3C.to([
      p3ComicChat1Box, p3ComicChat1Ico
    ], 1, {
      x: + 50,
      y: + 50,
      opacity: 1
    }, "5")

    // wolf jump
    tlp3C.to(p3ComicWolfBody1, wolfDur1, {
      morphSVG: {
        shape: p3ComicWolfBody2,
        shapeIndex: "auto"
      }
    }, "wolfSt1").to(p3ComicWolfShadow0, wolfDur1, {
      morphSVG: {
        shape: p3ComicWolfShadow2,
        shapeIndex: "auto"
      }
    }, "wolfSt1").to([
      p3ComicChat2Box, p3ComicChat2Ico
    ], 1, {
      x: - 30,
      y: + 50,
      opacity: 1
    }).to(p3ComicWolfBody1, wolfDur2, {
      morphSVG: {
        shape: p3ComicWolfBody3,
        shapeIndex: "auto"
      }
    }, "wolfSt2-=1").to(p3ComicWolfShadow0, wolfDur2, {
      morphSVG: {
        shape: p3ComicWolfShadow3,
        shapeIndex: "auto"
      }
    }, "wolfSt2-=1").to(p3ComicWolfBody1, wolfDur3, {
      morphSVG: {
        shape: p3ComicWolfBody4,
        shapeIndex: "auto"
      }
    }, "wolfSt3").to(p3ComicWolfShadow0, wolfDur3, {
      morphSVG: {
        shape: p3ComicWolfShadow4,
        shapeIndex: "auto"
      }
    }, "wolfSt3").to(p3ComicWolfBody1, wolfDur35, {

      x: "-80",
      y: "+100"

    }, "wolfSt3").to(p3ComicWolfShadow0, wolfDur35, {

      x: "-80",
      y: "+100"

    }, "wolfSt3");

  }
  pageLoader(p1TilesInput);
};
