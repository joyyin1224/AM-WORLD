$(document).ready(function() {
    $('#video1').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/NRktvTd5KZo'
                },
            },
            srcAction: 'iframe_src',
        }
    });

    $('#video2').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/6R29eQGsQAk'
                },
            },
            srcAction: 'iframe_src',
        }
    });

    $('#video3').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/UvMk7Z0Sp7E'
                },
            },
            srcAction: 'iframe_src',
        }
    });

    $('#video4').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/3wEJ_T8hovw'
                },
            },
            srcAction: 'iframe_src',
        }
    });
});

$(function() {
    $('#Container').mixItUp();
});

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
});

$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

// $(".add").click(function() {
//     alert("Successfully added to the list!");
// });


$(".add").click(addToList);

function addToList() {
    // var listContainer = $('#list');

    var movie = { "title": "Our Little Sister", "imgsrc": "img/ourlittlesister.jpg" };
    localStorage.newMovie = JSON.stringify(movie);

    console.log('add to list', movie);

    var addMovie = JSON.parse(localStorage.newMovie);
    localStorage.imgSrc = addMovie.imgsrc;
    localStorage.movieTitle = addMovie.title;

    // var div = $('<div></div>');
    // div.addClass('col-lg-2 col-md-3 col-sm-4');

    // div.html('<a href=""><img class="center-block smallposter" src="' + localStorage.imgSrc + '" title="' + localStorage.movieTitle + '" alt="poster"></a>');

    // listContainer.append(div);

    alert("Successfully added to the list!");

    $('.mfp-bg').hide();
    $('.mfp-warp').hide();
    $('.mfp-container').hide();
    $('.mfp-content').hide();
    $('.white-popup-block').hide();
}

$("#newreview").click(addNewReview);

function addNewReview() {
    console.log('yes');
    var reviewContainer = $('#review-container');

    var reviewTitle = $('#review-title').val();
    var reviewRate = $('#review-rate').val();
    var reviewTextarea = $('#review-textarea').val();

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var date = d.getFullYear() + '/' +
        (month < 10 ? '0' : '') + month + '/' +
        (day < 10 ? '0' : '') + day;

    var div = $('<div></div>');

    div.html('<div class="reviewtitle">' + reviewTitle + '</div><div>' + date + ' | by <a href="">User</a> (Country) | <span class="rate">' + reviewRate + '/10.0</span></div><div class="reviewdetail">' + reviewTextarea + '</div>');

    reviewContainer.append(div);
}
