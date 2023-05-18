$('form').on('submit', function(e){
    e.preventDefault();
    $('ul').append(`<li value='${$('input').eq(1).val()}'>${$('input').val()}: ${$('input').eq(1).val()} stars<button type="button">Remove</button></li>`);
})

$('ul').on('click', function(e){
    if(e.target.tagName != 'BUTTON'){
        return;
    }
    $(e.target).parent().remove();
})

$('select').on('change', function(){
    

    if($('select').val() === '0' || $('select').val() === '1'){
        let list = $('ul li');
        let toSort = [];
        list.each(function(){
            toSort.push($(this));
        });
        toSort.sort((a, b) => a.val() - b.val());
        $('ul').html('');
        if($('select').val() === '1'){
            toSort.reverse();
        }
        toSort.forEach(function(i){
            $('ul').append(i);
        });
    }
    if($('select').val() === '2'){
        let list = $('ul li');
        let toSort = [];
        list.each(function(){
            toSort.push($(this));
        });
        toSort.sort((a,b) => a.text().localeCompare(b.text()));
        $('ul').html('');
        toSort.forEach(function(i){
            $('ul').append(i);
        });
    }
});