var sort = {
  "Filters": 0,
  "Material": 1,
  "Grade": 2,
  "Shape": 3,
  "Stringing Length": 4,
  "Treatment": 5,
  "Color": 6,
  "Color Family": 7,
  "Category": 8,
  "Bead Hole Size": 9,
  "Embellishment": 10,
  "Drill Orientation": 11,
  "Collections": 12,
  "Price": 13,
  "Price Range": 14
};

function getSortIndex(refinementBox)
{
    var title = refinementBox.querySelector(".refine-title").textContent;
    return sort[title.trim()];
}

var refinementBoxEls = [].slice.call(document.querySelectorAll(".guided-nav__box"));
refinementBoxEls.sort(function refinementCompare(a, b)
{
    var a_index = getSortIndex(a);
    var b_index = getSortIndex(b);

    return a_index - b_index;
});

var refinementsRoot = document.getElementById("guided-nav-refine");
var frag = new DocumentFragment();
refinementBoxEls.forEach(function(el) {
    refinementsRoot.removeChild(el);
    frag.appendChild(el);
});

refinementsRoot.appendChild(frag);

