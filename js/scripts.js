/*css toggler*/
$(function () {
    /*css toggler*/

	function enableLightMode() {
		$('link.daynight').prop('disabled', false);
	}

	function disableLightMode() {
		$('link.daynight').prop('disabled', true);
	}

	$('a.daynight').on('click', function(){
		var enabled = ! $('link.daynight').prop('disabled');
		// call JS to set cookie
        $.get( "/toggle_daynight", {state: enabled}, function( data ) {
            console.log(data);
        });
		if(enabled) {
			disableLightMode();
		}
		else {
			enableLightMode();
		}
		return false;
	});

});


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
function heightopen(){
    $(this).height($(this).get(0).scrollHeight).addClass('open'); // get height and open
    $(this).one('transitionend', function(){ // after transition complete
        $(this).height(''); // revert to CSS-set height
    });
}

// close
function heightclose(){
    $(this).height($(this).get(0).scrollHeight).height('').removeClass('open'); // get height and close
}

// open & close based on open state
function heightopenclose(){
    if($(this).hasClass('open')) {
        $(this).each(heightclose); // close
    }
    else {
        $(this).each(heightopen); // open
    }
}


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
/*
$('.sort_table').on('click', function(){
	$(this).toggleClass('up');
});*/

function getNestedValue(obj, key) {
    return key.split(".").reduce(function(result, key) {
       return result[key] 
    }, obj);
}

  function populateFilterData (var1,var2,var3) {
    var opt = document.createElement("option");
    opt.value = var1;
    opt.textContent = var2;
    
    let look2 = document.getElementById(var3);
    look2.appendChild(opt);
    }

Array.prototype.uniqueBG = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].BACKGROUND)) {
            arr.push(this[i].BACKGROUND);
            populateFilterData(this[i].BACKGROUND,this[i].BACKGROUND,"BACKGROUND")
        }
    }
    //return arr; 
  }

Array.prototype.uniqueFUR = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].FUR)) {
            arr.push(this[i].FUR);
            populateFilterData(this[i].FUR,this[i].FUR,"FUR")
        }
    }
    //return arr; 
}

    Array.prototype.uniqueCLOTHES = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].CLOTHES)) {
            arr.push(this[i].CLOTHES);
            populateFilterData(this[i].CLOTHES,this[i].CLOTHES,"CLOTHES")
        }
    }
    //return arr; 
    }

    Array.prototype.uniqueEYES = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].EYES)) {
            arr.push(this[i].EYES);
            populateFilterData(this[i].EYES,this[i].EYES,"EYES")
        }
    }
    //return arr; 
    }

    Array.prototype.uniqueMOUTH = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].MOUTH)) {
            arr.push(this[i].MOUTH);
            populateFilterData(this[i].MOUTH,this[i].MOUTH,"MOUTH")
        }
    }
    //return arr; 
    }

    Array.prototype.uniqueHATS = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].HATS)) {
            arr.push(this[i].HATS);
            populateFilterData(this[i].HATS,this[i].HATS,"HATS")
        }
    }
    //return arr; 
    }

    Array.prototype.uniqueEARRING = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if(!arr.includes(this[i].EARRING)) {
            arr.push(this[i].EARRING);
            populateFilterData(this[i].EARRING,this[i].EARRING,"EARRING")
        }
    }
    //return arr; 
    }
  
  window.onload = function () {
    alert("CHANGE 2!");
    meta.uniqueBG();
    meta.uniqueFUR();
    meta.uniqueCLOTHES();
    meta.uniqueEYES();
    meta.uniqueMOUTH();
    meta.uniqueHATS();
    meta.uniqueEARRING();
  }
