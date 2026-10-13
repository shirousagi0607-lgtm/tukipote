$(function(){
  // 1. ハンバーガーボタンをクリックしたとき
  $('.hamburger-btn').on('click', function() {
    $('header').toggleClass('open');
  });

  // 2. メニュー内のリンクをクリックしたらメニューを閉じる
  $('.gnav a').on('click', function() {
    $('header').removeClass('open');
  });

  // 3. ページ内リンクをクリックしたときのスムーズスクロール
  $('a[href^="#"]').on('click', function(e) {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    if(target.length) {
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      e.preventDefault();
    }
  });

  // 4. ページトップへ戻るボタンの動き
  $('#page-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500, 'swing');
  });
});