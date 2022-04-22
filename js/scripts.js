var loadcounter = 0
var loadcountertotal = 0
var metafiltered = null
// custom select
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// animate toggles
// open
function heightopen() {
  $(this).height($(this).get(0).scrollHeight).addClass('open'); // get height and open
  $(this).one('transitionend', function() { // after transition complete
    $(this).height(''); // revert to CSS-set height
  });
}

// close
function heightclose() {
  $(this).height($(this).get(0).scrollHeight).height('').removeClass('open'); // get height and close
}

// open & close based on open state
function heightopenclose() {
  if ($(this).hasClass('open')) {
    $(this).each(heightclose); // close
  } else {
    $(this).each(heightopen); // open
  }
}
/*
$('#toggle_stats').on('click', function(){
    $(this).toggleClass('close');
    $('.stats_full_holder').each(heightopenclose);
});
$('#toggle_sales').on('click', function(){
    $(this).toggleClass('close');
    $('.sales_history').each(heightopenclose);
});
$('.checkbox_holder div').on('click', function(){
    $(this).toggleClass('close');
    $('.checkbox_holder').each(heightopenclose);
});
$('.trigger').on('click', function(){
	$(this).toggleClass('open');
    $('.header').each(heightopenclose);
});
*/
/*
$('.sort_table').on('click', function(){
	$(this).toggleClass('up');
});*/

function getNestedValue(obj, key) {
  return key.split(".").reduce(function(result, key) {
    return result[key]
  }, obj);
}

function populateFilterData(var1, var2, var3) {
  var opt = document.createElement("option");
  opt.value = var1;
  opt.textContent = var2;

  let look2 = document.getElementById(var3);
  look2.appendChild(opt);
}

function populateCard(mint, rank, pic) {

  let vDiv = document.createElement('div');
  vDiv.className = "featured_item";

  let img = document.createElement('div');
  img.className = "featured_item_img";
  vDiv.append(img);
/*
  if (mint <= 3000) {
    let OGStamp = document.createElement('div');
    OGStamp.className = "featured_item_img_ribbon";
    img.append(OGStamp);

    let OGSpan = document.createElement("span");
    OGSpan.textContent = "OG";
    OGStamp.append(OGSpan);
  }
*/	
  if (rank <= 60) {
    let rank1 = document.createElement('div');
    rank1.className = "featured_item_img_ribbon_rank_mythic";
    img.append(rank1);

    let rank1Span = document.createElement("span");
    rank1Span.textContent = "MYTHIC";
    rank1.append(rank1Span);
  }
  if (rank >= 61 && rank <= 300) {
    let rank2 = document.createElement('div');
    rank2.className = "featured_item_img_ribbon_rank_legendary";
    img.append(rank2);

    let rank2Span = document.createElement("span");
    rank2Span.textContent = "LEGENDARY";
    rank2.append(rank2Span);
  }
    if (rank >= 301 && rank <= 900) {
    let rank3 = document.createElement('div');
    rank3.className = "featured_item_img_ribbon_rank_epic";
    img.append(rank3);

    let rank3Span = document.createElement("span");
    rank3Span.textContent = "EPIC";
    rank3.append(rank3Span);
  }
    if (rank >= 901 && rank <= 2100) {
    let rank4 = document.createElement('div');
    rank4.className = "featured_item_img_ribbon_rank_rare";
    img.append(rank4);

    let rank4Span = document.createElement("span");
    rank4Span.textContent = "RARE";
    rank4.append(rank4Span);
  }
    if (rank >= 2101 && rank <= 3600) {
    let rank5 = document.createElement('div');
    rank5.className = "featured_item_img_ribbon_rank_uncommon";
    img.append(rank5);

    let rank5Span = document.createElement("span");
    rank5Span.textContent = "UNCOMMON";
    rank5.append(rank5Span);
  }	
    if (rank >= 3601 && rank <= 6000) {
    let rank6 = document.createElement('div');
    rank6.className = "featured_item_img_ribbon_rank_common";
    img.append(rank6);

    let rank6Span = document.createElement("span");
    rank6Span.textContent = "COMMON";
    rank6.append(rank6Span);
  }	

  let elem = document.createElement("img");
  elem.src = pic;
  img.append(elem);

  let k = document.createElement('div');
  k.className = "featured_image_desc";
  k.style = "padding-bottom: 5px;";
  vDiv.append(k);

  let lll = document.createElement('div');
  lll.className = "item_stats";
  k.append(lll);

  let m = document.createElement('div');
  m.className = "item_stat";
  m.textContent = 'rank';
  lll.append(m);

  let m1 = document.createElement("span");
  m1.textContent = rank;
  m.append(m1);

  let n = document.createElement('div');
  n.className = "item_stat";
  n.textContent = 'mint no.';
  lll.append(n);

  let n1 = document.createElement("span");
  n1.textContent = mint;
  n.append(n1);

  let look = document.querySelector(".nfts");
  look.appendChild(vDiv);
}

function filterChange() {
  var hh = document.getElementById('ranks').value;
  document.getElementById('ranks').value = '';

  var gg = document.getElementById('ids').value;
  document.getElementById('ids').value = '';

  metafiltered = meta

  let sortie = document.getElementById('sort_by');
  let sortieval = sortie.options[sortie.selectedIndex].value
  if (sortieval === 'rank') {
    metafiltered = metafiltered.sort(function(a, b) {
      return a.rank - b.rank
    });
  }
  if (sortieval === 'id') {
    metafiltered = metafiltered.sort(function(a, b) {
      return a.edition - b.edition
    });
  }

  /*
	var e = document.getElementById("BACKGROUND");
    if (e.options[e.selectedIndex].text != 'Please select') {
        let countEntries = 0
        function filterByBG(obj) {
            if (obj.BACKGROUND === e.options[e.selectedIndex].text) {
                return true;
            }
            return false;
        }
        metafiltered = metafiltered.filter(filterByBG);
    }
    */
  var e = document.getElementById("FUR");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByFUR(obj) {
      if (obj.FUR === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByFUR);
  }
  var e = document.getElementById("CLOTHES");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByCLOTHES(obj) {
      if (obj.CLOTHES === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByCLOTHES);
  }
  var e = document.getElementById("EYES");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByEYES(obj) {
      if (obj.EYES === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByEYES);
  }
  var e = document.getElementById("MOUTH");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByMOUTH(obj) {
      if (obj.MOUTH === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByMOUTH);
  }
  var e = document.getElementById("HATS");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByHATS(obj) {
      if (obj.HATS === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByHATS);
  }
  var e = document.getElementById("EARRING");
  if (e.options[e.selectedIndex].text != 'Please select') {
    function filterByEARRING(obj) {
      if (obj.EARRING === e.options[e.selectedIndex].text) {
        return true;
      }
      return false;
    }

    metafiltered = metafiltered.filter(filterByEARRING);
  }

  function clearCards() {
    const myNode = document.querySelector(".nfts");
    myNode.innerHTML = '';
  }
  clearCards();

  var s = document.getElementsByClassName("results_count")[0]
  s.innerText = metafiltered.length + " RESULTS"
  var s = document.getElementsByClassName("results_count")[1]
  s.innerText = metafiltered.length + " RESULTS"

  var filteredloadcounter = 0	
  loadcounter = 0
  loadcountertotal = metafiltered.length
  if (loadcountertotal >= 18) {filteredloadcounter = 18 - 1 } else {filteredloadcounter = loadcountertotal - 1}
  while (loadcounter <= filteredloadcounter) {
    let v1 = getNestedValue(metafiltered, loadcounter + ".edition");
    let v2 = getNestedValue(metafiltered, loadcounter + ".rank");
    let v3 = getNestedValue(metafiltered, loadcounter + ".image");
    populateCard(v1, v2, v3)
    loadcounter = loadcounter + 1;
  }
    var s = document.getElementsByClassName("results_count")[1]
	if ( loadcounter === metafiltered.length) {
		s.innerText = loadcounter + " / " + metafiltered.length +" Results";
		loadcounter = 0;
		loadcountertotal = 0;
	}
	else {
		s.innerText = loadcounter + " / " + metafiltered.length +" - Scroll Down";
	}
}
  
function filterByRank() {

  metafiltered = meta
  var h = document.getElementById('ranks').value;

  if (h != '') {
    var ee = document.getElementById("FUR");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("CLOTHES");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("EYES");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("MOUTH");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("HATS");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("EARRING");
    ee.options[ee.selectedIndex].text = 'Please select';

    function filterByID(obj) {
      if (obj.rank == h) {
        return true;
      }
      return false;
    }
    if (metafiltered === metafiltered.filter(filterByID)) {
      metafiltered = null
    }
    metafiltered = metafiltered.filter(filterByID);


    function clearCards() {
      const myNode = document.querySelector(".nfts");
      myNode.innerHTML = '';
    }
    clearCards();

    var s = document.getElementsByClassName("results_count")[0]
    s.innerText = metafiltered.length + " RESULT"
    var s = document.getElementsByClassName("results_count")[1]
    s.innerText = metafiltered.length + " RESULT"
    
    loadcounter = 0
    loadcountertotal = metafiltered.length
    while (loadcounter <= loadcountertotal - 1) {
      let v1 = getNestedValue(metafiltered, loadcounter + ".edition");
      let v2 = getNestedValue(metafiltered, loadcounter + ".rank");
      let v3 = getNestedValue(metafiltered, loadcounter + ".image");
      populateCard(v1, v2, v3)
      loadcounter = loadcounter + 1;
    }
      var s = document.getElementsByClassName("results_count")[1]
      s.innerText = loadcounter + " / " + metafiltered.length +" Result";
  }
  document.getElementById('ranks').value = '';
  loadcounter = 0;
  metafiltered = null;
  loadcountertotal = 0;
}

function filterByIDs() {

  metafiltered = meta
  var g = document.getElementById('ids').value;

  if (g != '') {
    var ee = document.getElementById("FUR");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("CLOTHES");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("EYES");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("MOUTH");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("HATS");
    ee.options[ee.selectedIndex].text = 'Please select';

    var ee = document.getElementById("EARRING");
    ee.options[ee.selectedIndex].text = 'Please select';

    function filterByID(obj) {
      if (obj.edition == g || obj.token == g) {
        return true;
      }
      return false;
    }
    if (metafiltered === metafiltered.filter(filterByID)) {
      metafiltered = null
    }
    metafiltered = metafiltered.filter(filterByID);


    function clearCards() {
      const myNode = document.querySelector(".nfts");
      myNode.innerHTML = '';
    }
    clearCards();

    var s = document.getElementsByClassName("results_count")[0]
    s.innerText = metafiltered.length + " RESULT"
    var s = document.getElementsByClassName("results_count")[1]
    s.innerText = metafiltered.length + " RESULT"

    loadcounter = 0
    loadcountertotal = metafiltered.length
    while (loadcounter <= loadcountertotal - 1) {
      let v1 = getNestedValue(metafiltered, loadcounter + ".edition");
      let v2 = getNestedValue(metafiltered, loadcounter + ".rank");
      let v3 = getNestedValue(metafiltered, loadcounter + ".image");
      populateCard(v1, v2, v3);
      loadcounter = loadcounter + 1;
    }
    var s = document.getElementsByClassName("results_count")[1]
    s.innerText = loadcounter + " / " + metafiltered.length +" Result";
  }
  document.getElementById('ids').value = '';
  loadcounter = 0;
  metafiltered = null;
  loadcountertotal = 0;
}

function loadStatData() {
  const api_url = "https://api.solradar.io/dd/latestPrices?collectionId=bored_ape_solana_club";

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    //console.log(data);
    if (response) {}
    let apistats = document.getElementsByClassName('stat');
    apistats[0].innerHTML = '\n                  <a href="https://magiceden.io/marketplace/bored_ape_solana_club"><span>' + data[0].listedCount + '</span>listed\n               '
    apistats[1].innerHTML = '\n                  <span>◎' + data[0].floorPrice + '</span> Floor</a>\n               '
    apistats[2].innerHTML = '\n                  <a href="https://solradar.io/collection/bored_ape_solana_club/historical"><span>◎' + (data[0].volume24hr).toFixed(2) + '</span>volume(24h)</a>\n               '
  }

  getapi(api_url);
}

function changeSort() {
  let sortie = document.getElementById('sort_by');
  let sortieval = sortie.options[sortie.selectedIndex].value
  if (sortieval === 'rank') {
    meta = meta.sort(function(a, b) {
      return a.rank - b.rank
    });
    if (metafiltered !== null) {
      filterChange();
    } else {
    	filterChange();
    }
  }
  if (sortieval === 'id') {
    meta = meta.sort(function(a, b) {
      return a.edition - b.edition
    });
    if (metafiltered !== null) {
      filterChange();
    } else {
    	filterChange();
    }
  }
}

window.onload = function() {
  sessionStorage.clear();
  //LOAD TRAIT FILTERS	
  //alert("Created by: Exxempt out of love and care for the BASC.");
  function populateFilterData(var1, var2, var3) {
    var opt = document.createElement("option");
    opt.value = var1;
    opt.textContent = var2;

    let look2 = document.getElementById(var3);
    look2.appendChild(opt);
  }

  Array.prototype.uniqueBG = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].BACKGROUND)) {
        arr.push(this[i].BACKGROUND);
        populateFilterData(this[i].BACKGROUND, this[i].BACKGROUND, "BACKGROUND")
      }
    }
    //return arr; 
  }

  Array.prototype.uniqueFUR = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].FUR)) {
        arr.push(this[i].FUR);
        populateFilterData(this[i].FUR, this[i].FUR, "FUR")
      }
    }
  }

  Array.prototype.uniqueCLOTHES = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].CLOTHES)) {
        arr.push(this[i].CLOTHES);
        populateFilterData(this[i].CLOTHES, this[i].CLOTHES, "CLOTHES")
      }
    }
  }

  Array.prototype.uniqueEYES = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].EYES)) {
        arr.push(this[i].EYES);
        populateFilterData(this[i].EYES, this[i].EYES, "EYES")
      }
    }
  }

  Array.prototype.uniqueMOUTH = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].MOUTH)) {
        arr.push(this[i].MOUTH);
        populateFilterData(this[i].MOUTH, this[i].MOUTH, "MOUTH")
      }
    }
  }

  Array.prototype.uniqueHATS = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].HATS)) {
        arr.push(this[i].HATS);
        populateFilterData(this[i].HATS, this[i].HATS, "HATS")
      }
    }
  }

  Array.prototype.uniqueEARRING = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (!arr.includes(this[i].EARRING)) {
        arr.push(this[i].EARRING);
        populateFilterData(this[i].EARRING, this[i].EARRING, "EARRING")
      }
    }
  }

  //meta.uniqueBG();
  meta.uniqueFUR();
  meta.uniqueCLOTHES();
  meta.uniqueEYES();
  meta.uniqueMOUTH();
  meta.uniqueHATS();
  meta.uniqueEARRING();

  function getNestedValue(obj, key) {
    return key.split(".").reduce(function(result, key) {
      return result[key]
    }, obj);
  }
  meta = meta.sort(function(a, b) {
    return a.edition - b.edition
  });
  loadcountertotal = meta.length
  while (loadcounter <= 18 - 1) {
    let v1 = getNestedValue(meta, loadcounter + ".edition");
    let v2 = getNestedValue(meta, loadcounter + ".rank"); //hold for rank
    let v3 = getNestedValue(meta, loadcounter + ".image");
    populateCard(v1, v2, v3);
    loadcounter = loadcounter + 1;
  }
    var s = document.getElementsByClassName("results_count")[1]
    s.innerText = loadcounter + " / " + meta.length +" - Scroll Down";
}