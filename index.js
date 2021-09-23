// 1. make the range bar change color before (left) the range thumb.
// 2. when input from the range bar is selected, change number of PAGEVIEWS.
// 3. when input from the range bar is selected, change the PRICE.
// 4. when the YEARLY BILLING toggle is selected, subtract 25% from all PRICES.

// PAGEVIEWS Array and Prices Array
var pageViewsChange = ["10K", "50K", "100K", "500K", "1M"];
var priceRangeChange = [8, 12, 16, 24, 36];

// changing the PAGEVIEWS "string" number per click on range.
function changeText(string) {
  $(".viewChange").text(string);
}

// changing the price per click on range.
function changePrice(number) {
  $(".priceChange, .priceChangeMobile").text("$" + number + ".00");
}

$("#switchMode").click(function() {
  if ($(this).prop("checked") == true) {
    $(".priceChange, .priceChangeMobile").text("$" + 12 + ".00"); // not good practice fixing bug.
    priceRangeChange = [6, 9, 12, 18, 27];
    changePrice(priceRangeChange[valueSwitch]);
  } else {
    $(".priceChange, .priceChangeMobile").text("$" + 16 + ".00"); // not good practice fixing bug.
    priceRangeChange = [8, 12, 16, 24, 36];
    changePrice(priceRangeChange[valueSwitch]);
  }
});
//when choosing one of the range values, calling the changeText() and changePrice().
// if the Switch is clicked, changing the array to give 25% off every price.
// if the Switch is unclicked changing the array back to original price.
$("#customRange").on("change input", function() {
  var value = $(this).val();
  window.valueSwitch = value;
  //   $("#switchMode").click(function() {
  //   if ($(this).prop("checked") == true) {
  //     priceRangeChange = [6, 9, 12, 18, 27];
  //     changePrice(priceRangeChange[value]);
  //     } else {
  //     priceRangeChange = [8, 12, 16, 24, 36];
  //     changePrice(priceRangeChange[value]);
  //   }
  // });

  changeText(pageViewsChange[value]);
  changePrice(priceRangeChange[value]);
});



$("#customRange").change(function() {
  var val = ($(this).val() - $(this).attr("min")) / ($(this).attr("max") - $(this).attr("min"));
  $(this).css("background-image", "-webkit-gradient(linear, left top, right top," + "color-stop(" + val + ", hsl(174, 77%, 80%))," + "color-stop(" + val + ", hsl(224, 65%, 95%))" +
  ")"
);
});

// $('#customRange').change(function() {
//   var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
//
//   $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #94A14E), ' + 'color-stop(' + val + ', #C5C5C5)' +
//     ')'
//   );
// });
